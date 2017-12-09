import { Component, Event, EventEmitter, Prop, PropWillChange, PropDidChange } from "@stencil/core";

interface Day {
  number: number;
  xpos: number;
  ypos: number
}


const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const WEEK_DAYS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];


@Component({
  tag: 'calendar-widget',
  styleUrl: 'calendar-widget.scss'
})
export class CalendarWidget {

  @Prop({ mutable: true }) year: number;
  @Prop({ mutable: true }) month: number;

  @PropDidChange('month')
  monthChanged(month: number) {
    this.fixValues
  }

  @Event() calendarSelected: EventEmitter;

  componentDidLoad() {
    this.fixValues();
  }

  fixValues() {
    const date = new Date();
    if (this.year == null) {
      this.year = date.getFullYear();
    } else {
      date.setFullYear(this.year);
      this.year = date.getFullYear();
    }
    if (this.month == null) {
      this.month = date.getMonth();
    } else {
      date.setMonth(this.month);
      this.month = date.getMonth();
    }
  }

  buildCalendar() {
    this.fixValues();
    const date = new Date();
    const month = this.month;

    date.setFullYear(this.year);
    date.setMonth(month);

    const days: Day[] = [];
    let day = 1;
    let xpos = 0;
    let ypos = 0;
    while(true) {
      date.setDate(day);
      if (month !== date.getMonth()) {
        break;
      }
      const x = date.getDay();
      if (x < xpos) {
        ypos++;
      }
      xpos = x;
      days.push({
        number: day,
        xpos: xpos,
        ypos: ypos
      });
      day++;
    }
    return days;
  }

  onSelected(day: number) {
    this.calendarSelected.emit({
      day: day,
      month: this.month + 1,
      year: this.year
    });
  }

  onPrev() {
    this.month = this.month - 1;
  }

  onNext() {
    this.month = this.month + 1;
  }

  // render() {
  //   const weekDays = WEEK_DAYS.map(day => {
  //     return <div>{day}</div>
  //   });
  //   const days = this.days.map(day => {
  //     return <button
  //     onClick={()=>this.onSelected(day.number)}
  //       style={{
  //         gridColumn: day.xpos+1 + '',
  //         gridRow: day.ypos+2 + '',
  //       }}>{day.number}</button>;
  //   });
  //   return [
  //     <div class="calendar-title">
  //       <button class="calendar-button" onClick={() => this.onPrev()}>Prev</button>
  //       <div>{MONTHS[this.month]} / {this.year}</div>
  //       <button class="calendar-button" onClick={() => this.onNext()}>Siguiente</button>
  //     </div>,
  //     <div class="calendar-container">
  //       {weekDays}
  //       {days}
  //     </div>
  //   ]
  // }

  render2() {
    const days = this.buildCalendar();
    return days.map(day => (
      <button
        onClick={() => this.onSelected(day.number)}
        style={{
          gridColumn: `${day.xpos}`,
          gridRow: `${day.ypos}`,
        }}>{day.number}</button>
    ));
  }
}
