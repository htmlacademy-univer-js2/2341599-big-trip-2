import FilterView from './view/filter-view';
import SiteMenuView from './view/site-menu-view.js';
import EventsPresenter from './presenter/events-presenter';
import { render } from './framework/render.js';
import RoutePointsModel from './model/point-model';
import { routePoints } from './mock/point';
import { generateFilter } from './mock/filter';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new EventsPresenter(siteMainElement.querySelector('.trip-events'));
const routePointsModel = new RoutePointsModel(routePoints);
const filters = generateFilter(routePointsModel.RoutePoints);

render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));
render(new FilterView(filters), siteHeaderElement.querySelector('.trip-controls__filters'));


tripPresenter.init(routePointsModel);
