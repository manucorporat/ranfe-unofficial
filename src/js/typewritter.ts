import { isEmpty } from './utils';

export class TypeWritter {

  rmLatency = 50;
  addLatency = 100;
  emptyDelay = 50;
  finishDelay = 6000;
  isRemoving = true;

  sentenceIndex = 0;
  sentenceLength = 0;

  constructor(
    private sentences: string[],
    private ele: HTMLElement
  ) { }


  start() {
    this.schedule();
  }

  private do() {
    const text = this.ele.textContent;
    if (this.isRemoving) {
      if (isEmpty(text)) {
        this.isRemoving = false;
        setTimeout(this.schedule.bind(this), this.emptyDelay);
      } else {
        this.ele.textContent = text.substr(0, text.length - 1);
        this.schedule();
      }
    } else {
      this.sentenceLength++;
      const sentence = this.sentences[this.sentenceIndex];
      const substr = sentence.substr(0, this.sentenceLength);
      this.ele.textContent = substr;
      if (this.sentenceLength >= sentence.length) {
        this.isRemoving = true;
        this.sentenceLength = 0;
        this.sentenceIndex++;
        if (this.sentenceIndex >= this.sentences.length) {
          this.sentenceIndex = 0;
        }
        setTimeout(this.schedule.bind(this), this.finishDelay);
      } else {
        this.schedule();
      }
    }
  }

  private schedule() {
    setTimeout(this.do.bind(this), this.delay());
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
}
