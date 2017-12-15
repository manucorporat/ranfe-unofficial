import { Component, Listen, State } from '@stencil/core';
import { getURLParam, requestJourneys } from '../../utils/utils';

export interface Journey {
  id: string;
  origin: string;
  destination: string;
  day: string;
  departure: string;
  arrival: string;
  train_model: string;
  num_seats: number;
  price: string;
};

export interface Person {
  nu: number;
  selected: boolean;

  dni?: string;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
}

@Component({
  tag: 'results-page',
  styleUrl: 'results-page.scss'
})
export class ResultsPage {

  private people: Person[] = [];
  @State() selectedDeparture: Journey;
  @State() selectedArrival: Journey;

  @State() hasArrival: boolean;
  @State() currentIndex: number = 0;
  @State() validIndex: number = 0;
  @State() resultsDeparture: Journey[];
  @State() resultsArrival: Journey[];

  async componentDidLoad() {
    this.hasArrival = !!this.getArrival();
    this.people = [];
    for (let i = 0; i < this.getPeople(); i++) {
      this.people.push({
        nu: i + 1,
        selected: false,

        dni: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
      });
    }

    this.resultsDeparture = await requestJourneys(this.getCityA(), this.getCityB(), this.getDeparture());
    if (this.hasArrival) {
      this.resultsArrival = await requestJourneys(this.getCityB(), this.getCityA(), this.getDeparture());
    }
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    this.validIndex = Math.max(this.validIndex, index);
  }

  @Listen('peopleContinue')
  onPeopleContinue() {
    this.setCurrentIndex(this.currentIndex + 1);
  }

  @Listen('tableSelected')
  onTableSelected(ev: CustomEvent) {
    const journey = ev.detail as Journey;
    if (this.currentIndex === 0) {
      this.selectedDeparture = journey;
      this.setCurrentIndex(1);
    } else if (this.currentIndex === 1) {
      if (!this.hasArrival) {
        throw new Error('arrival is disabled');
      }
      this.selectedArrival = journey;
      this.setCurrentIndex(2);
    }
  }

  @Listen('navTab')
  onNavTab(ev: CustomEvent) {
    this.currentIndex = ev.detail;
  }

  getCityA(): string {
    return getURLParam('origin');
  }
  getCityB(): string {
    return getURLParam('destination');
  }
  getDeparture(): string {
    return getURLParam('departure');
  }
  getArrival(): string {
    return getURLParam('arrival');
  }
  getPeople(): number {
    return parseInt(getURLParam('people'));
  }

  renderPage() {
    let index = this.currentIndex;
    if (!this.hasArrival && index > 0) {
      index++;
    }
    switch (index) {
      case 0: return <results-table
        cityA={this.getCityA()}
        cityB={this.getCityB()}
        selected={this.selectedDeparture}
        data={this.resultsDeparture} />;

      case 1: return <results-table
        reversed={true}
        cityA={this.getCityA()}
        cityB={this.getCityB()}
        selected={this.selectedArrival}
        data={this.resultsArrival} />;

      case 2: return <results-people people={this.people} />;
      case 3: return <results-finish
        people={this.people}
        departure={this.getDepartureData()}
        arrival={this.getArrivalData()}
      />;
    }
  }

  getDepartureData(): Journey {
    if (!this.resultsDeparture) {
      return null;
    }
    return this.resultsDeparture.find(journey => journey === this.selectedDeparture);
  }

  getArrivalData(): Journey {
    if (!this.resultsArrival) {
      return null;
    }
    return this.resultsArrival.find(journey => journey === this.selectedArrival);
  }

  render() {
    return [
      <renfe-header background={true}/>,

      <div class="top-content">
        <search-widget
          cityA={this.getCityA()}
          cityB={this.getCityB()}
          departure={this.getDeparture()}
          arrival={this.getArrival()}
          people={this.getPeople()+''} />
      </div>,

      <div class="flex-section">

        <div class="side-container">
          <div class="sticky">
            <div class="widget">
              <search-widget class="small"
                cityA={this.getCityA()}
                cityB={this.getCityB()}
                departure={this.getDeparture()}
                arrival={this.getArrival()}
                people={this.getPeople()+''}/>
            </div>
            <div class="widget">
              <weather-container city={this.getCityA()} />
              <weather-container city={this.getCityB()} />
            </div>

          </div>
        </div>

        <div class="main-container">

          <results-nav
            current={this.currentIndex}
            valid={this.validIndex}
            buttons={this.hasArrival
              ? ['Ida', 'Vuelta', 'Pasajeros', 'Finalizar']
              : ['Ida', 'Pasajeros', 'Finalizar']
            } />

          <div class="main-content" role="main">
            { this.renderPage()}
          </div>
        </div>
      </div>,
      <renfe-footer />
    ];
  }
}

