import { Component, Prop, Element, State, Listen } from "@stencil/core";
import { ActiveRouter } from "@stencil/router";

@Component({
  tag: 'search-widget',
  styleUrl: 'search-widget.scss'
})
export class SearchWidget {

  @Element() el: HTMLElement;
  @State() showCalendar: HTMLInputElement = null;
  @Prop() cityA: string;
  @Prop() cityB: string;
  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter;

  swapCities() {
    const inputOrigin = this.el.querySelector('input[name=origin]') as HTMLInputElement;
    const inputDestination = this.el.querySelector('input[name=destination]') as HTMLInputElement;
    if (inputOrigin && inputDestination) {
      const tmp = inputOrigin.value;
      inputOrigin.value = inputDestination.value;
      inputDestination.value = tmp;
    }
  }

  showDate() {
    // app.toggleVisibility(event, 'ida-vuelta')
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
    const url = '/results?' + params.toString();
    const history = this.activeRouter.get('history');
    history.push(url, {});
  }

  @Listen('calendarSelected')
  onCalendarSelected(ev: CustomEvent) {
    if (this.showCalendar) {
      const detail = ev.detail;
      const text = `${detail.year}-${detail.month}-${detail.day}`;
      this.showCalendar.value = text;
      this.showCalendar = null;
    }
  }

  openCalendar(ev: Event) {
    ev.preventDefault();
    this.showCalendar = ev.target as HTMLInputElement;
  }

  render() {
    return [
      <div class={{
        calendar: true,
        show: !!this.showCalendar
      }}>
        <calendar-widget />
      </div>,
      <form onSubmit={(ev) => this.search(ev)}>
        <div class="form-group city-group">
          <input type="text" placeholder="Origen" name="origin" value={this.cityA} required />
          <button type="button"
            tabindex="-1"
            class="swap"
            onClick={()=>this.swapCities()}>
              <i class="fa fa-exchange" aria-hidden="true"></i>
          </button>
          <input type="text" placeholder="Destino" name="destination" value={this.cityB} required></input>
        </div>
        <div class="form-group date-group">
          <input type="text" placeholder="Ida" name="departure" onFocus={(ev) => this.openCalendar(ev)} class="ida" required />
          <input type="text" placeholder="Vuelta" name="arrival" onFocus={(ev) => this.openCalendar(ev)} class="vuelta" />
          <input type="number" min="1" placeholder="Personas" value="1" name="people" class="people" required />
          <button type="submit" class="submit">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    ];
  }
}
