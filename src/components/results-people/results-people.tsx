import { Component, Event, EventEmitter, Element, Prop, State } from "@stencil/core";
import { Person } from "../../pages/results-page/results-page";

@Component({
  tag: 'results-people',
  styleUrl: 'results-people.scss'
})
export class ResultsPeople {

  @Element() el: HTMLElement;
  @Prop() people: Person[];
  @State() nu = 0;

  @Event() peopleContinue: EventEmitter;

  componentDidLoad() {
    if (this.people) {
      configInputs(this.el, 'input[name=dni]', this.people.map(p => p.dni));
      configInputs(this.el, 'input[name=name]', this.people.map(p => p.name));
      configInputs(this.el, 'input[name=surname]', this.people.map(p => p.surname));
      configInputs(this.el, 'input[name=phone]', this.people.map(p => p.phone));
      configInputs(this.el, 'input[name=email]', this.people.map(p => p.email));
    }
  }

  select(person: any) {
    const found = this.people.find(p => p === person);
    if (found && !found.selected) {
      this.people.forEach(p => p.selected = false);
      found.selected = true;
      this.nu = this.nu + 1;
    }
  }

  onContinue(ev: Event) {
    ev.preventDefault();
    this.peopleContinue.emit();
    return false;
  }

  render() {
    const Div = 'div' as any;
    const people = this.people.map(person => (
      <Div
        class={{ person: true, selected: person.selected }}
        onClick={() => this.select(person)}
        onFocusIn={() => this.select(person)}
      >
        <div class="person-title">Pasajero {person.nu}</div>
        <div class="person-summary">
          <p><strong>Nombre:</strong> {person.name} {person.surname}</p>
          <p><strong>DNI:</strong> {person.dni}</p>
          <p><strong>Teléfono:</strong> {person.phone}</p>
          <p><strong>Email:</strong> {person.email}</p>
        </div>
        <div class="person-form">
          <div class="form-group">
            <input placeholder="DNI" name="dni" onInput={(ev) => setValue(ev, 'dni', person) } required />
          </div>
          <div class="form-group">
            <input placeholder="Nombre" name="name" onInput={(ev) => setValue(ev, 'name', person) } required />
            <input placeholder="Apellidos" name="surname" onInput={(ev) => setValue(ev, 'surname', person) } required />
          </div>
          <input type="phone" name="phone" placeholder="Telefono" onInput={(ev) => setValue(ev, 'phone', person) } required />
          <input type="email" name="email" placeholder="Email" onInput={(ev) => setValue(ev,'email',person)} required />
        </div>
      </Div>
    ));
    return [
      <form style={{ display: 'block' }} onSubmit={(ev) => this.onContinue(ev)}>
        {people}
        <button class="normal-button" type="submit">Continuar</button>
      </form>
    ]
  }
}

function setValue(ev: Event, field: string, person: any) {
  person[field] = (ev.target as any).value;
}

function configInputs(el: HTMLElement, query: string, values: string[]) {
  const found = el.querySelectorAll(query);
  for (let i = 0; i < found.length; i++) {
    (found.item(i) as HTMLInputElement).value = values[i];
  }
}
