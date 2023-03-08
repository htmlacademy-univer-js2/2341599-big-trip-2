import EventsView from '../view/events-view';//так же
import PointView from '../view/point-view';//createRoutePointTemplate
import EditFormView from '../view/edit_form-view';//createCreatingFormTemplate
import SortingView from '../view/sorting-view';//sorting-view
import { render } from '../render.js';

export default class EventsPresenter {
  constructor(tripContainer) {
    this.eventsList = new EventsView();
    this.tripContainer = tripContainer;
  }

  init(routePointsModel) {
    this.routePointsModel = routePointsModel;
    this.boardRoutePoints = [...this.routePointsModel.getRoutePoints()];

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditFormView(this.boardRoutePoints[0]), this.eventsList.getElement());

    for (let i = 0; i < this.boardRoutePoints.length; i++){
      render(new PointView(this.boardRoutePoints[i]), this.eventsList.getElement());
    }
  }
}
