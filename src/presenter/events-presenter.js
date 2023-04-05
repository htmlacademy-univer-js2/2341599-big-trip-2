import EventsView from '../view/events-view';
import PointView from '../view/point-view';
import EditFormView from '../view/edit_form-view';
import SortingView from '../view/sorting-view';
import NoPointView from '../view/no-point-view';
import { render, replace } from '../framework/render.js';
import { isEscape } from '../utils/common.js';

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
  }

  #renderPoint(point) {
    const pointComponent = new PointView(point);
    const editPointComponent = new EditFormView(point);

    const replacePointToEdit = () => {
      replace(editPointComponent, pointComponent);
    };

    const replaceEditToPoint = () => {
      replace(pointComponent, editPointComponent);
    };

    const onEscKeyDown = (evt) => {
      if (isEscape(evt)) {
        evt.preventDefault();
        replaceEditToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const editFormClose = () => {
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    };

    pointComponent.setFormOpenEditClickHandler(() => {
      replacePointToEdit();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editPointComponent.setFormSubmitHandler(editFormClose);
    editPointComponent.setFormCloseHandler(editFormClose);

    render(pointComponent, this.#eventsList.element);
  }
}
