import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";
import { Journey } from "../../pages/results-page/results-page";

@Component({
  tag: 'results-table',
  styleUrl: 'results-table.scss'
})
export class ResultsTable {

  @Prop() cityA: string;
  @Prop() cityB: string;
  @Prop() reversed: boolean = false;
  @Prop() selected: Journey;
  @Prop() data: Journey[];
  @Event() tableSelected: EventEmitter;

  onSelected(journey: Journey) {
    this.tableSelected.emit(journey);
  }

  renderResults() {
    const data = this.data;
    if (!data || data.length === 0) {
      return <div class="no-trains">No hay trenes disponibles</div>;
    }
    return (
      <div>
        <div class="tickets head">
          <div>Salida</div>
          <div>Llegada</div>
          <div>Tren</div>
          <div>Precio</div>
        </div>
        {data.map((journey) => (
          <button
            class={{
              tickets: true,
              selected: journey === this.selected
            }}
            onClick={() => this.onSelected(journey)}>
            <div>{journey.departure}</div>
            <div>{journey.arrival}</div>
            <div>{journey.train_model}</div>
            <div>{journey.price}</div>
          </button>
        ))}
      </div>
    );
  }

  render() {
    return [
      ((this.cityA && this.cityB) && <div class="title-result">
        <h2>
          <span id="title-origin">{this.cityA}</span>   <ion-icon name="arrow-forward" class={{ reversed: this.reversed }}></ion-icon> <span id="title-destination">{this.cityB}</span>
        </h2>
      </div>),
      this.renderResults()
    ];
  }
}
