import { Component, Prop, Element, Listen, State, h } from "@stencil/core";
import { ActiveRouter } from "@stencil/router";

@Component({
  tag: 'search-widget',
  styleUrl: 'search-widget.scss'
})
export class SearchWidget {

  @State() showCalendar: HTMLInputElement = null;

  @Element() el: HTMLElement;
  @Prop() cityA: string;
  @Prop() cityB: string;
  @Prop() departure: string;
  @Prop() arrival: string;
  @Prop() people: string;
  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;

  componentDidLoad() {
    (this.el.querySelector('input[name=origin]') as any).value = this.cityA || '';
    (this.el.querySelector('input[name=destination]') as any).value = this.cityB || '';
    (this.el.querySelector('input[name=departure]') as any).value = this.departure || '';
    (this.el.querySelector('input[name=arrival]') as any).value = this.arrival || '';
    (this.el.querySelector('input[name=people]') as any).value = this.people || '';
  }

  swapCities() {
    const inputOrigin = this.el.querySelector('input[name=origin]') as HTMLInputElement;
    const inputDestination = this.el.querySelector('input[name=destination]') as HTMLInputElement;
    if (inputOrigin && inputDestination) {
      const tmp = inputOrigin.value;
      inputOrigin.value = inputDestination.value;
      inputDestination.value = tmp;
    }
  }

  search(ev: any) {
    // prevent auto submit
    console.log(ev);
    ev.preventDefault();

    const formData = new FormData(ev.target) as any;
    const params = new URLSearchParams();
    for (let entry of formData.entries()) {
      params.append(entry[0], entry[1]);
    }
    // const url = '/results?' + params.toString();
    // const history = this.activeRouter.get('history');
    // history.push(url, {});
  }

  @Listen('calendarSelected')
  onCalendarSelected(ev: CustomEvent) {
    const input = this.showCalendar;
    if (input) {
      const detail = ev.detail;
      const text = `${detail.year}-${detail.month}-${detail.day}`;
      input.value = text;
      setTimeout(() => {
        this.closeCalendar();
        // const elements = input.form.elements;
        // const index = Array.from(elements).findIndex(e => e === input);
        // if (index >= 0 && elements[index + 1]) {
        //   (elements[index + 1] as any).focus();
        // }
      }, 200);
    }
  }

  openCalendar(ev: Event) {
    ev.preventDefault();
    this.showCalendar = ev.target as HTMLInputElement;
    return false;
  }

  closeCalendar() {
    if (this.showCalendar) {
      this.showCalendar.blur();
    }
    this.showCalendar = null;
  }

  render() {
    return [
      <div class={{
        "calendar": true,
        "show": !!this.showCalendar
      }}>
        <div class="calendar-dialog-title">{this.showCalendar && this.showCalendar.placeholder}</div>
        <calendar-widget day={getDayFromInput(this.showCalendar)}/>
      </div>,
      <form onSubmit={(ev) => this.search(ev)}>
        <div class="form-group city-group">
          <input type="text" placeholder="Origen" name="origin" maxlength="20" required />
          <button type="button"
            tabindex="-1"
            class="swap"
            onClick={() => this.swapCities()}>
            <ion-icon name="swap" />
          </button>
          <input type="text" placeholder="Destino" name="destination" maxlength="20" required></input>
        </div>
        <div class="form-group date-group">

          <input
            type="text"
            placeholder="Ida"
            name="departure"
            maxlength="20"
            onFocus={(ev) => this.openCalendar(ev)}
            onBlur={()=> this.closeCalendar()}
            class="ida"
            required />

          <input type="text"
            placeholder="Vuelta"
            name="arrival"
            maxlength="20"
            onFocus={(ev) => this.openCalendar(ev)}
            onBlur={()=> this.closeCalendar()}
            class="vuelta" />

          <input type="number" min="1" max="100" placeholder="Personas" value="1" name="people" class="people" required />
          <button type="submit" class="submit">
            <ion-icon name="arrow-forward" />
          </button>
        </div>
      </form>
    ];
  }
}

function getDayFromInput(input: HTMLInputElement) {
  if (!input) {
    return undefined;
  }
  const parts = input.value.split('-');
  if (parts.length === 3) {
    return parseInt(parts[2]);
  }
  return null;
}