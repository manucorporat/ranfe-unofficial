import { Component, Event, EventEmitter, Prop } from "@stencil/core";

interface Day {
  number: number;
  x: number;
  y: number
}

@Component({
  tag: 'calendar-widget',
  styleUrl: 'calendar-widget.scss'
})
export class CalendarWidget {

  @Prop() locales: string;
  @Prop() includeLegend = true;
  @Prop({ mutable: true }) year: number;
  @Prop({ mutable: true }) month: number;
  @Prop({ mutable: true }) day: number;

  @Event() calendarSelected: EventEmitter;

  private getDate() {
    const date = new Date();
    if (this.year != null) {
      date.setFullYear(this.year);
    }
    if (this.month != null) {
      date.setMonth(this.month);
    }
    date.setDate(1);
    return date;
  }

  private buildCalendar() {
    const date = this.getDate();
    const month = date.getMonth();
    const days: Day[] = [];
    let xpos = 0;
    let ypos = this.includeLegend ? 2 : 1;
    for (let day = 1; month === date.getMonth(); day++) {
      const x = date.getDay();
      if (x < xpos) {
        ypos++;
      }
      xpos = x;
      days.push({ number: day, x: xpos + 1, y: ypos });
      date.setDate(day + 1);
    }
    return days;
  }

  private onSelected(day: number) {
    const date = this.getDate();
    this.calendarSelected.emit({
      day: day,
      month: date.getMonth(),
      year: date.getFullYear()
    });
  }

  private renderLegend() {
    if (!this.includeLegend) {
      return null;
    }
    const date = new Date(Date.UTC(2017, 0, 1));
    const formater = new Intl.DateTimeFormat(this.locales, {weekday: 'narrow'});
    const weekDays = [];
    for (let day = 1; day <= 7; day++) {
      date.setDate(day);
      weekDays.push(<div>{formater.format(date)}</div>);
    }
    return weekDays;
  }

  private renderCalendar() {
    return this.buildCalendar().map(day => (
      <button
        class={{ 'selected': day.number === this.day }}
        onClick={() => this.onSelected(day.number)}
        style={{
          gridColumn: `${day.x}`,
          gridRow: `${day.y}`,
        }}>{day.number}</button>
    ));
  }

  render() {
    return [
      ...this.renderLegend(),
      ...this.renderCalendar()
    ];
  }
}
