/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import 'ionicons';


import {
<<<<<<< HEAD
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
      
=======
  CalendarWidget as CalendarWidget
} from './components/calendar-widget/calendar-widget';

declare global {
  interface HTMLCalendarWidgetElement extends CalendarWidget, HTMLElement {
  }
  var HTMLCalendarWidgetElement: {
    prototype: HTMLCalendarWidgetElement;
    new (): HTMLCalendarWidgetElement;
  };
  interface HTMLElementTagNameMap {
    "calendar-widget": HTMLCalendarWidgetElement;
  }
  interface ElementTagNameMap {
    "calendar-widget": HTMLCalendarWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "calendar-widget": JSXElements.CalendarWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface CalendarWidgetAttributes extends HTMLAttributes {
      locales?: string;
      includeLegend?: boolean;
      year?: number;
      month?: number;
      day?: number;
>>>>>>> d48ce70af60d9e6fe9c406b9c6685c9880a2697a
    }
  }
}

