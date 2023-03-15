import { createElement } from '../render.js';

const createSiteMenuTemplate = () => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
  <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
  <a class="trip-tabs__btn" href="#">Stats</a>
</nav>`
);

export default class SiteMenuView {
  get Template () {
    return createSiteMenuTemplate();
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
