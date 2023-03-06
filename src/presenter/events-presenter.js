import EventsView from '../view/events-view';
import PointView from '../view/point-view';
import NewFormView from '../view/new_form-view';
import EditFormView from '../view/edit_form-view';
import SortingView from '../view/sorting-view';
import { render } from '../render.js';

export default class EventsPresenter {
  constructor() {
    this.eventsList = new EventsView();
  }

  init (tripContainer) {
    this.tripContainer = tripContainer;

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditFormView(), this.eventsList.getElement());

    for (let i = 0; i < 3; i++){
      render(new PointView(), this.eventsList.getElement());
    }

    render(new NewFormView(), this.eventsList.getElement());
  }
}
