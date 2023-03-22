import EventsView from '../view/events-view';
import PointView from '../view/point-view';
import EditFormView from '../view/edit_form-view';
import SortingView from '../view/sorting-view';
import NoPointView from '../view/no-point-view';
import { render } from '../render.js';

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
      this.#eventsList.Element.replaceChild(editPointComponent.Element, pointComponent.Element);
    };

    const replaceEditToPoint = () => {
      this.#eventsList.Element.replaceChild(pointComponent.Element, editPointComponent.Element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
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
    
    pointComponent.Element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEdit();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editPointComponent.Element.querySelector('form').addEventListener('submit', editFormSubmit);

    editPointComponent.Element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditToPoint();
    });

    render(pointComponent, this.#eventsList.Element);
  }
}
