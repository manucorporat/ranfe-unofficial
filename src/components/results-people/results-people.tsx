import { Component, Method, Prop, State } from "@stencil/core";

@Component({
  tag: 'results-people',
  styleUrl: 'results-people.scss'
})
export class ResultsPeople {

  @State() people: any[];
  @State() nu = 0;
  @Prop() nuPeople: number = 1;

  componentDidLoad() {
    this.people = [];
    for (let i = 0; i < this.nuPeople; i++) {
      this.people.push({
        nu: i + 1,
      });
    }
  }

  @Method()
  getPeople(): any[] {
    return this.people;
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
        <div class="person-title">Pasajero {person.nu}</div>
        <div class="person-summary">
          <p><strong>Nombre:</strong> {person.name} {person.lastname}</p>
          <p><strong>DNI:</strong> {person.dni}</p>
          <p><strong>Teléfono:</strong> {person.phone}</p>
        </div>
        <form class="person-form">
          <div class="form-group">
            <input placeholder="DNI" name="dni" onInput={(ev) => setValue(ev, 'dni', person) } />
          </div>
          <div class="form-group">
            <input placeholder="Nombre" name="name" onInput={(ev) => setValue(ev, 'name', person) } />
            <input placeholder="Apellidos" name="surname" onInput={(ev) => setValue(ev, 'surname', person) }/>
          </div>
          <input placeholder="Telefono" name="phone" onInput={(ev) => setValue(ev, 'phone', person) } />
          <input placeholder="Email" name="email" onInput={(ev) => setValue(ev,'email',person)}/>
        </form>
      </div>
    ));
  }
}

function setValue(ev: Event, field: string, person: any) {
  person[field] = (ev.target as any).value;
}