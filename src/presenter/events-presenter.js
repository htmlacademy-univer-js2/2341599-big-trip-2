import EventsView from '../view/events-view';
import PointView from '../view/point-view';
import EditFormView from '../view/edit_form-view';
import SortingView from '../view/sorting-view';
import NoPointView from '../view/no-point-view';
import { render } from '../render.js';
import { isEscape } from '../utils.js';

export default class EventsPresenter {
  #eventsList = new EventsView();

  constructor(tripContainer) {
    this.tripContainer = tripContainer;
  }

  init(routePointsModel) {
    this.routePointsModel = routePointsModel;
    this.boardRoutePoints = [...this.routePointsModel.RoutePoints];

    if (this.boardRoutePoints.length === 0) {
      render(new NoPointView(), this.tripContainer);
    }
    else {
      render(new SortingView(), this.tripContainer);
      render(this.#eventsList, this.tripContainer);
      
      for (let i = 0; i < this.boardRoutePoints.length; i++){
        this.#renderPoint(this.boardRoutePoints[i]);
      }
    }
  };

  #renderPoint(point) {
    const pointComponent = new PointView(point);
    const editPointComponent = new EditFormView(point);

    const replacePointToEdit = () => {
      this.#eventsList.element.replaceChild(editPointComponent.element, pointComponent.element);
    };

    const replaceEditToPoint = () => {
      this.#eventsList.element.replaceChild(pointComponent.element, editPointComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (isEscape(evt)) {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const editFormSubmit = (evt) => {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    };
    
    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEdit();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editPointComponent.element.querySelector('form').addEventListener('submit', editFormSubmit);

    editPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditToPoint();
    });

    render(pointComponent, this.#eventsList.element);
  }
}
