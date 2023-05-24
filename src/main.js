import FilterPresenter from './presenter/filter-presenter.js';
import SiteMenuView from './view/site-menu-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonView from './view/new-point-button-view.js';
import { render } from './framework/render.js';
import RoutePointsModel from './model/point-model';
import { getPoints, getDestinations, getOffersByType } from './mock/point.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');

const points = getPoints();
const offersByType = getOffersByType();
const destinations = getDestinations();

const routePointsModel = new RoutePointsModel(points);
routePointsModel.init(points, destinations, offersByType);

const filterModel = new FilterModel();
const filterPresenter = new FilterPresenter(siteHeaderElement.querySelector('.trip-controls__filters'), filterModel, routePointsModel);
filterPresenter.init();

const boardPresenter = new BoardPresenter(siteMainElement.querySelector('.trip-events'), routePointsModel, filterModel);
boardPresenter.init();

const newPointButtonComponent = new NewPointButtonView();

const handleNewPointFormClose = () => {
  newPointButtonComponent.element.disabled = false;
};

const handleNewPointButtonClick = () => {
  boardPresenter.createPoint(handleNewPointFormClose);
  newPointButtonComponent.element.disabled = true;
};

render(newPointButtonComponent, siteHeaderElement);
newPointButtonComponent.setClickHandler(handleNewPointButtonClick);

render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));


