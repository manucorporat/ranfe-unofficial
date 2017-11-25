import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'results-page',
  styleUrl: 'results-page.scss'
})
export class ResultsPage {

  @State() currentIndex: number = 0;
  @State() validIndex: number = 2;

  @State() results: any;

  async componentDidLoad() {
    // const response = await fetch()
  }

  @Listen('navTab')
  onNavTab(ev: CustomEvent) {
    this.currentIndex = ev.detail;
  }

  getCityA(): string {
    return 'Valladolid';
  }

  getCityB(): string {
    return 'Madrid';
  }
  getData() {
    return [];
  }

  renderPage() {
    switch (this.currentIndex) {
      case 0: return <results-table cityA={this.getCityA()} cityB={this.getCityB()} data={this.getData()} />;
      case 1: return <results-table reversed={true} cityA={this.getCityA()} cityB={this.getCityB()} data={this.getData()} />;
      case 2: return <results-people />;
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
              <search-widget cityA={this.getCityA()} cityB={this.getCityB()} />
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
            buttons={['Ida', 'Vuelta', 'Pasajeros', 'Finalizar']} />

          <div class="main-content" role="main">
            { this.renderPage()}
          </div>
        </div>
      </div>,
      <renfe-footer />
    ];
  }
}

