import { createElement } from "../render"

const createNoPointTemplate = () => (`<p class="trip-events__msg">Click New Event to create your first point</p>`);

export default class NoPointView {
  #element = null;

  get Element() {
    if (!this.#element) {
      this.#element = createElement(this.Template);
    }

    return this.#element;
  };

  get Template() {
    return createNoPointTemplate();
  }

  removeElement() {
    this.#element = null;
  };
};