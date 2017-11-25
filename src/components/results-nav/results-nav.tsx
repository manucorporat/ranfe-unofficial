import { Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: 'results-nav',
  styleUrl: 'results-nav.scss'
})
export class ResultsNav {

  @Prop() current = 0;
  @Prop() valid = 0;
  @Prop() buttons: string[];

  @Event() navTab: EventEmitter;

  onClick(index: number) {
    this.navTab.emit(index);
  }

  hostData() {
    return {
      'role': 'navigation'
    };
  }

  render() {
    return this.buttons.map((b, i) => {
      const classes = {
        selected: i === this.current,
      };
      return <button
        class={classes}
        disabled={i>this.valid}
        onClick={() => this.onClick(i)}>{b}</button>;
    })
  }
}
