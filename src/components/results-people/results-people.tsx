import { Component, Prop,  State } from "@stencil/core";

@Component({
  tag: 'results-people',
  styleUrl: 'results-people.scss'
})
export class ResultsPeople {

  @State() people: any[];
  @State() nu = 0;
  @Prop() nuPeople: number = 1;

  componentDidLoad() {
    this.people = [
      {
        nu: 1,
        name: '',
      },
      {
        nu: 2,
        name: '',
      }
    ];
  }

  select(person: any) {
    this.people.forEach(p => p.selected = false);
    const found = this.people.find(p => p === person);
    if (found) {
      found.selected = true;
      this.nu = this.nu + 1;
    }
  }

  render() {
    return this.people && this.people.map(person => (
      <div class={{ person: true, selected: person.selected }} onClick={() => this.select(person)}>
        <div class="person-summary"><strong>Pasajero {person.nu}: </strong> {person.name} {person.lastname}</div>
        <form class="person-form">
          <div class="form-group">
            <input placeholder="DNI" name="dni" onInput={(ev) => setValue(ev, 'dni', person) } />
          </div>
          <div class="form-group">
            <input placeholder="Nombre" name="name" onInput={(ev) => setValue(ev, 'name', person) } />
            <input placeholder="Apellidos" name="surname" onInput={(ev) => setValue(ev, 'surname', person) }/>
          </div>
          <input placeholder="Telefono" name="phone" onInput={(ev) => setValue(ev, 'phone', person) } />
        </form>
      </div>
    ));
  }
}

function setValue(ev: Event, field: string, person: any) {
  person[field] = (ev.target as any).value;
}