import { Component, Method, Prop } from "@stencil/core";

@Component({
  tag: 'type-writter',
  styleUrl: 'type-writter.scss'
})
export class TypeWritter {

  private sentenceIndex = 0;
  private sentenceLength = 0;
  private isRemoving = true;
  private timer: any;

  @Prop({mutable: true}) text = '';
  @Prop() sentences: string[];

  @Prop() rmLatency = 50;
  @Prop() addLatency = 100;
  @Prop() emptyDelay = 50;
  @Prop() finishDelay = 6000;

  componentDidLoad() {
    if (this.sentences) {
      shuffleArray(this.sentences);
      this.sentences.push(this.text);
    }
  }

  componentDidUnload() {
    clearTimeout(this.timer);
  }

  @Method()
  start() {
    this.schedule();
  }

  private do() {
    const text = this.text;
    if (this.isRemoving) {
      if (isEmpty(text)) {
        this.isRemoving = false;
        this.timer = setTimeout(this.schedule.bind(this), this.emptyDelay);
      } else {
        this.text = text.substr(0, text.length - 1);
        this.schedule();
      }
    } else {
      this.sentenceLength++;
      const sentence = this.sentences[this.sentenceIndex];
      const substr = sentence.substr(0, this.sentenceLength);
      this.text = substr;
      if (this.sentenceLength >= sentence.length) {
        this.isRemoving = true;
        this.sentenceLength = 0;
        this.sentenceIndex++;
        if (this.sentenceIndex >= this.sentences.length) {
          this.sentenceIndex = 0;
        }
        this.timer = setTimeout(this.schedule.bind(this), this.finishDelay);
      } else {
        this.schedule();
      }
    }
  }

  private schedule() {
    this.timer = setTimeout(this.do.bind(this), this.delay());
  }

  private delay(): number {
    let latency;
    if (this.isRemoving) {
      latency = this.rmLatency;
    } else {
      latency = this.addLatency;
    }
    return Math.random() * latency + (latency / 2);
  }

  hostData() {
    return {
      'role': 'header'
    };
  }
  render() {
    return <span>{this.text}</span>
  }
}

function isEmpty(text: string): boolean {
  return text.length === 0;
}

// Barajea aleatoriamente un array de datos
function shuffleArray(a: any[]) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}
