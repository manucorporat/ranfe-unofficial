/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import 'ionicons';


import {
  MainButton as MainButton
} from './components/main-button/main-button';

declare global {
  interface HTMLMainButtonElement extends MainButton, HTMLElement {
  }
  var HTMLMainButtonElement: {
    prototype: HTMLMainButtonElement;
    new (): HTMLMainButtonElement;
  };
  interface HTMLElementTagNameMap {
    "main-button": HTMLMainButtonElement;
  }
  interface ElementTagNameMap {
    "main-button": HTMLMainButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "main-button": JSXElements.MainButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface MainButtonAttributes extends HTMLAttributes {
      
        icon?: string,
        title?: string,
        description?: string
    }
  }
}


import {
  Footer as RenfeFooter
} from './components/renfe-footer/renfe-footer';

declare global {
  interface HTMLRenfeFooterElement extends RenfeFooter, HTMLElement {
  }
  var HTMLRenfeFooterElement: {
    prototype: HTMLRenfeFooterElement;
    new (): HTMLRenfeFooterElement;
  };
  interface HTMLElementTagNameMap {
    "renfe-footer": HTMLRenfeFooterElement;
  }
  interface ElementTagNameMap {
    "renfe-footer": HTMLRenfeFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "renfe-footer": JSXElements.RenfeFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface RenfeFooterAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  HomePage as RenfeHeader
} from './components/renfe-header/renfe-header';

declare global {
  interface HTMLRenfeHeaderElement extends RenfeHeader, HTMLElement {
  }
  var HTMLRenfeHeaderElement: {
    prototype: HTMLRenfeHeaderElement;
    new (): HTMLRenfeHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "renfe-header": HTMLRenfeHeaderElement;
  }
  interface ElementTagNameMap {
    "renfe-header": HTMLRenfeHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "renfe-header": JSXElements.RenfeHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface RenfeHeaderAttributes extends HTMLAttributes {
      
        background?: boolean
    }
  }
}


import {
  RenfeJumbo as RenfeJumbo
} from './components/renfe-jumbo/renfe-jumbo';

declare global {
  interface HTMLRenfeJumboElement extends RenfeJumbo, HTMLElement {
  }
  var HTMLRenfeJumboElement: {
    prototype: HTMLRenfeJumboElement;
    new (): HTMLRenfeJumboElement;
  };
  interface HTMLElementTagNameMap {
    "renfe-jumbo": HTMLRenfeJumboElement;
  }
  interface ElementTagNameMap {
    "renfe-jumbo": HTMLRenfeJumboElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "renfe-jumbo": JSXElements.RenfeJumboAttributes;
    }
  }
  namespace JSXElements {
    export interface RenfeJumboAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ResultsNav as ResultsNav
} from './components/results-nav/results-nav';

declare global {
  interface HTMLResultsNavElement extends ResultsNav, HTMLElement {
  }
  var HTMLResultsNavElement: {
    prototype: HTMLResultsNavElement;
    new (): HTMLResultsNavElement;
  };
  interface HTMLElementTagNameMap {
    "results-nav": HTMLResultsNavElement;
  }
  interface ElementTagNameMap {
    "results-nav": HTMLResultsNavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "results-nav": JSXElements.ResultsNavAttributes;
    }
  }
  namespace JSXElements {
    export interface ResultsNavAttributes extends HTMLAttributes {
      
        current?: number,
        valid?: number,
        buttons?: string[]
    }
  }
}


import {
  ResultsPeople as ResultsPeople
} from './components/results-people/results-people';

declare global {
  interface HTMLResultsPeopleElement extends ResultsPeople, HTMLElement {
  }
  var HTMLResultsPeopleElement: {
    prototype: HTMLResultsPeopleElement;
    new (): HTMLResultsPeopleElement;
  };
  interface HTMLElementTagNameMap {
    "results-people": HTMLResultsPeopleElement;
  }
  interface ElementTagNameMap {
    "results-people": HTMLResultsPeopleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "results-people": JSXElements.ResultsPeopleAttributes;
    }
  }
  namespace JSXElements {
    export interface ResultsPeopleAttributes extends HTMLAttributes {
      
        people?: any[]
    }
  }
}


import {
  ResultsTable as ResultsTable
} from './components/results-table/results-table';

declare global {
  interface HTMLResultsTableElement extends ResultsTable, HTMLElement {
  }
  var HTMLResultsTableElement: {
    prototype: HTMLResultsTableElement;
    new (): HTMLResultsTableElement;
  };
  interface HTMLElementTagNameMap {
    "results-table": HTMLResultsTableElement;
  }
  interface ElementTagNameMap {
    "results-table": HTMLResultsTableElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "results-table": JSXElements.ResultsTableAttributes;
    }
  }
  namespace JSXElements {
    export interface ResultsTableAttributes extends HTMLAttributes {
      
        cityA?: string,
        cityB?: string,
        reversed?: boolean,
        selectedId?: string,
        data?: any
    }
  }
}


import {
  SearchWidget as SearchWidget
} from './components/search-widget/search-widget';

declare global {
  interface HTMLSearchWidgetElement extends SearchWidget, HTMLElement {
  }
  var HTMLSearchWidgetElement: {
    prototype: HTMLSearchWidgetElement;
    new (): HTMLSearchWidgetElement;
  };
  interface HTMLElementTagNameMap {
    "search-widget": HTMLSearchWidgetElement;
  }
  interface ElementTagNameMap {
    "search-widget": HTMLSearchWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "search-widget": JSXElements.SearchWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface SearchWidgetAttributes extends HTMLAttributes {
      
        cityA?: string,
        cityB?: string
    }
  }
}


import {
  TypeWritter as TypeWritter
} from './components/type-writter/type-writter';

declare global {
  interface HTMLTypeWritterElement extends TypeWritter, HTMLElement {
  }
  var HTMLTypeWritterElement: {
    prototype: HTMLTypeWritterElement;
    new (): HTMLTypeWritterElement;
  };
  interface HTMLElementTagNameMap {
    "type-writter": HTMLTypeWritterElement;
  }
  interface ElementTagNameMap {
    "type-writter": HTMLTypeWritterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "type-writter": JSXElements.TypeWritterAttributes;
    }
  }
  namespace JSXElements {
    export interface TypeWritterAttributes extends HTMLAttributes {
      
        text?: string,
        sentences?: string[],
        rmLatency?: number,
        addLatency?: number,
        emptyDelay?: number,
        finishDelay?: number
    }
  }
}


import {
  WeatherContainer as WeatherContainer
} from './components/weather-container/weather-container';

declare global {
  interface HTMLWeatherContainerElement extends WeatherContainer, HTMLElement {
  }
  var HTMLWeatherContainerElement: {
    prototype: HTMLWeatherContainerElement;
    new (): HTMLWeatherContainerElement;
  };
  interface HTMLElementTagNameMap {
    "weather-container": HTMLWeatherContainerElement;
  }
  interface ElementTagNameMap {
    "weather-container": HTMLWeatherContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "weather-container": JSXElements.WeatherContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface WeatherContainerAttributes extends HTMLAttributes {
      
        city?: string
    }
  }
}


import {
  AdminDelete as AdminDelete
} from './pages/admin-page/admin-delete';

declare global {
  interface HTMLAdminDeleteElement extends AdminDelete, HTMLElement {
  }
  var HTMLAdminDeleteElement: {
    prototype: HTMLAdminDeleteElement;
    new (): HTMLAdminDeleteElement;
  };
  interface HTMLElementTagNameMap {
    "admin-delete": HTMLAdminDeleteElement;
  }
  interface ElementTagNameMap {
    "admin-delete": HTMLAdminDeleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "admin-delete": JSXElements.AdminDeleteAttributes;
    }
  }
  namespace JSXElements {
    export interface AdminDeleteAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AdminPage as AdminEdit
} from './pages/admin-page/admin-edit';

declare global {
  interface HTMLAdminEditElement extends AdminEdit, HTMLElement {
  }
  var HTMLAdminEditElement: {
    prototype: HTMLAdminEditElement;
    new (): HTMLAdminEditElement;
  };
  interface HTMLElementTagNameMap {
    "admin-edit": HTMLAdminEditElement;
  }
  interface ElementTagNameMap {
    "admin-edit": HTMLAdminEditElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "admin-edit": JSXElements.AdminEditAttributes;
    }
  }
  namespace JSXElements {
    export interface AdminEditAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AdminNew as AdminNew
} from './pages/admin-page/admin-new';

declare global {
  interface HTMLAdminNewElement extends AdminNew, HTMLElement {
  }
  var HTMLAdminNewElement: {
    prototype: HTMLAdminNewElement;
    new (): HTMLAdminNewElement;
  };
  interface HTMLElementTagNameMap {
    "admin-new": HTMLAdminNewElement;
  }
  interface ElementTagNameMap {
    "admin-new": HTMLAdminNewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "admin-new": JSXElements.AdminNewAttributes;
    }
  }
  namespace JSXElements {
    export interface AdminNewAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AdminPage as AdminPage
} from './pages/admin-page/admin-page';

declare global {
  interface HTMLAdminPageElement extends AdminPage, HTMLElement {
  }
  var HTMLAdminPageElement: {
    prototype: HTMLAdminPageElement;
    new (): HTMLAdminPageElement;
  };
  interface HTMLElementTagNameMap {
    "admin-page": HTMLAdminPageElement;
  }
  interface ElementTagNameMap {
    "admin-page": HTMLAdminPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "admin-page": JSXElements.AdminPageAttributes;
    }
  }
  namespace JSXElements {
    export interface AdminPageAttributes extends HTMLAttributes {
      
        match?: any,
        history?: any
    }
  }
}


import {
  HomePage as HomePage
} from './pages/home-page/home-page';

declare global {
  interface HTMLHomePageElement extends HomePage, HTMLElement {
  }
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };
  interface HTMLElementTagNameMap {
    "home-page": HTMLHomePageElement;
  }
  interface ElementTagNameMap {
    "home-page": HTMLHomePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "home-page": JSXElements.HomePageAttributes;
    }
  }
  namespace JSXElements {
    export interface HomePageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  LoginPage as LoginPage
} from './pages/login-page/login-page';

declare global {
  interface HTMLLoginPageElement extends LoginPage, HTMLElement {
  }
  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };
  interface HTMLElementTagNameMap {
    "login-page": HTMLLoginPageElement;
  }
  interface ElementTagNameMap {
    "login-page": HTMLLoginPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "login-page": JSXElements.LoginPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LoginPageAttributes extends HTMLAttributes {
      
        history?: any
    }
  }
}


import {
  ResultsPage as ResultsPage
} from './pages/results-page/results-page';

declare global {
  interface HTMLResultsPageElement extends ResultsPage, HTMLElement {
  }
  var HTMLResultsPageElement: {
    prototype: HTMLResultsPageElement;
    new (): HTMLResultsPageElement;
  };
  interface HTMLElementTagNameMap {
    "results-page": HTMLResultsPageElement;
  }
  interface ElementTagNameMap {
    "results-page": HTMLResultsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "results-page": JSXElements.ResultsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ResultsPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  RootPage as RootPage
} from './pages/root-page/root-page';

declare global {
  interface HTMLRootPageElement extends RootPage, HTMLElement {
  }
  var HTMLRootPageElement: {
    prototype: HTMLRootPageElement;
    new (): HTMLRootPageElement;
  };
  interface HTMLElementTagNameMap {
    "root-page": HTMLRootPageElement;
  }
  interface ElementTagNameMap {
    "root-page": HTMLRootPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "root-page": JSXElements.RootPageAttributes;
    }
  }
  namespace JSXElements {
    export interface RootPageAttributes extends HTMLAttributes {
      
    }
  }
}

