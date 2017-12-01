import { Component, Listen, State } from '@stencil/core';
import { getURLParam } from '../../utils/utils';

@Component({
  tag: 'results-page',
  styleUrl: 'results-page.scss'
})
export class ResultsPage {

  private people: any[] = [];
  @State() selectedDeparture: string;
  @State() selectedArrival: string;

  @State() hasArrival: boolean;
  @State() currentIndex: number = 0;
  @State() validIndex: number = 0;
  @State() resultsDeparture: any;
  @State() resultsArrival: any;

  constructor() {
    for (let i = 0; i < 2; i++) {
      this.people.push({
        nu: i + 1,
      });
    }
  }

  async componentDidLoad() {
    this.hasArrival = !!this.getArrival();
    console.log(this.getCityA());

    // const formData = new FormData();
    // formData.append('origin', this.getCityA());
    // formData.append('destination', this.getCityB());

    // const response = await fetch('http://localhost:8000/results.php', {
    //   method: 'post',
    //   body: formData
    // })
    // const json = await response.json();
    // console.log(json);
    this.resultsDeparture = [
      {
        id: 1,
        departure: '12:04',
        arrival: '12:50',
        duration: "12",
        price: '12',
        train_model: 'AVANT',
      },
      {
        id: 2,
        departure: '12:04',
        arrival: '12:50',
        duration: "12",
        price: '12',
        train_model: 'AVANT',
      },
      {
        id: 3,
        departure: '12:04',
        arrival: '12:50',
        duration: "12",
        price: '12',
        train_model: 'AVANT',
      },
      {
        id: 4,
        departure: '12:04',
        arrival: '12:50',
        duration: "12",
        price: '12',
        train_model: 'AVANT',
      }
    ];
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    this.validIndex = Math.max(this.validIndex, index);
  }

  @Listen('tableSelected')
  onTableSelected(ev: CustomEvent) {
    const id = ev.detail as string;
    this.selectedDeparture = id;
    setTimeout(() => {
      if (this.currentIndex === 0) {
        this.setCurrentIndex(1);
      } else if (this.currentIndex === 1) {
        if (!this.hasArrival) {
          throw new Error('arrival is disabled');
        }
        this.setCurrentIndex(2);
      }
    }, 200);
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
    return 2;
  }
  get() {
    return [];
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
        selectedId={this.selectedDeparture}
        data={this.resultsDeparture} />;

      case 1: return <results-table
        reversed={true}
        cityA={this.getCityA()}
        cityB={this.getCityB()}
        selectedId={this.selectedArrival}
        data={this.resultsArrival} />;

      case 2: return <results-people people={this.people} />;
      case 3: return <results-end />;
    }
  }

  render() {
    return [
      <renfe-header background={true}/>,

      <div class="top-content">
        <search-widget cityA={this.getCityA()} cityB={this.getCityB()} />
      </div>,

      <div class="flex-section">

        <div class="side-container">
          <div class="sticky">
            <div class="widget">
              <search-widget class="small" cityA={this.getCityA()} cityB={this.getCityB()} />
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

