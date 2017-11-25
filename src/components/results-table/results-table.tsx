import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'results-table',
  styleUrl: 'results-table.scss'
})
export class ResultsTable {

  @Prop() cityA: string;
  @Prop() cityB: string;
  @Prop() reversed: boolean = false;
  @Prop() data: any;

  renderResults() {
    const data = this.data;
    if (!data || data.length === 0) {
      return <div class="no-trains">No hay trenes disponibles</div>;
    } else {
      return (
        <table class="tickets">
          <thead>
            <tr>
              <td>Salida</td>
              <td>Llegada</td>
              <td>Duración</td>
              <td>Tren</td>
              <td>Clase</td>
              <td>Precio</td>
            </tr>
          </thead>
          <tbody id="table-data">
            {data.map((item) => (
              <tr>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.duration}</td>
                <td>{item.train}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
