import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'results-table',
  styleUrl: 'results-table.scss'
})
export class ResultsTable {

  @Prop() cityA: string;
  @Prop() cityB: string;
  @Prop() reversed: boolean = false;
  @Prop() selectedId: string;
  @Prop() data: any;
  @Event() tableSelected: EventEmitter;

  onSelected(id: string) {
    this.tableSelected.emit(id);
  }

  renderResults() {
    const data = this.data;
    if (!data || data.length === 0) {
      return <div class="no-trains">No hay trenes disponibles</div>;
    } else {
      return (
        <div>
          <div class="tickets head">
            <div>Salida</div>
            <div>Llegada</div>
            <div>Duración</div>
            <div>Tren</div>
            <div>Precio</div>
          </div>
          {data.map((item) => (
            <button class={{
              tickets: true,
              selected: item.id === this.selectedId
            }} onClick={() => this.onSelected(item.id)}>
              <div>{item.departure}</div>
              <div>{item.arrival}</div>
              <div>{item.duration}</div>
              <div>{item.train_model}</div>
              <div>{item.price}</div>
            </button>
          ))}
        </div>
      );
    }
  }

  render() {
    const iconClass = {
      'fa': true,
      'fa-long-arrow-right': true,
      'reversed': this.reversed
    };
    return [
      <div class="title-result">
        <h2>
          <span id="title-origin">{this.cityA}</span> <i class={iconClass} aria-hidden="true"></i> <span id="title-destination">{this.cityB}</span>
        </h2>
      </div>,
      this.renderResults()
    ];
  }
}
