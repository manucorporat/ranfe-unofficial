import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'results-finish',
  styleUrl: 'results-finish.scss'
})
export class ResultsFinish {

  @Prop() people: any[] = [];
  @Prop() departure: any = null;
  @Prop() arrival: any = null;

  render() {
    const journeys = [this.departure, this.arrival].filter(j => !!j);
    const people = this.people.map((person) => {
      return (
        <div class="finish-person">
          <p><strong>Nombre:</strong> {person.name} {person.lastname}</p>
          <p><strong>DNI:</strong> {person.dni}</p>
          <p><strong>Teléfono:</strong> {person.phone}</p>
          <div>
            {journeys.map(journey => {
              return <div>{journey.origin} -> {journey.destination}</div>
            })}
          </div>
        </div>
      )
    });
    return [
      ...people,

    ]
  }
}
