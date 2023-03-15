import EventsView from '../view/events-view';
import PointView from '../view/point-view';
import EditFormView from '../view/edit_form-view';
import SortingView from '../view/sorting-view';
import { render } from '../render.js';

export default class EventsPresenter {
  constructor(tripContainer) {
    this.tripContainer = tripContainer;
  }
  #eventsList = new EventsView();
  init(routePointsModel) {
    this.routePointsModel = routePointsModel;
    this.boardRoutePoints = [...this.routePointsModel.RoutePoints];

    render(new SortingView(), this.tripContainer);
    render(this.#eventsList, this.tripContainer);

    for (let i = 0; i < this.boardRoutePoints.length; i++){
      this.#renderPoint(this.boardRoutePoints[i]);
    }
  };
  #renderPoint = (point) => {
    const pointComponent = new PointView(point);
    const editPointComponent = new EditFormView(point);
    render(pointComponent, this.#eventsList.Element);

    const replacePointToEdit = () => {
      this.#eventsList.Element.replaceChild(editPointComponent.Element, pointComponent.Element);
    };

    const replaceEditToPoint = () => {
      this.#eventsList.Element.replaceChild(pointComponent.Element, editPointComponent.Element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === "Esc") {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    
    pointComponent.Element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEdit();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editPointComponent.Element.querySelector('.event__save-btn').addEventListener('submit', (event) => {
      event.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

  }
}
