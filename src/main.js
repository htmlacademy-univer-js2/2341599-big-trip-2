import FilterView from './view/filter-view';
import SiteMenuView from './view/site-menu-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { render } from './framework/render.js';
import RoutePointsModel from './model/point-model';
import { getPoints, getDestinations, getOffersByType } from './mock/point.js';
import { generateFilter } from './mock/filter';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');

const points = getPoints();
const offersByType = getOffersByType();
const destinations = getDestinations();

const routePointsModel = new RoutePointsModel(points);
routePointsModel.init(points, destinations, offersByType);

const boardPresenter = new BoardPresenter(siteMainElement.querySelector('.trip-events'), routePointsModel);
boardPresenter.init();

const filters = generateFilter(routePointsModel.RoutePoints);

render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));
render(new FilterView(filters), siteHeaderElement.querySelector('.trip-controls__filters'));

