import { createElement } from '../render.js';

const createEventsTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class EventsView {
  get Template () {
    return createEventsTemplate();
  }

  get Element() {
    if (!this.element){
      this.element = createElement(this.Template);
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
