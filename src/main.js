import FilterView from './view/filter-view';
import SiteMenuView from './view/site-menu-view.js';
import EventsPresenter from './presenter/events-presenter';
import { render } from './render.js';
import RoutePointsModel from './model/point-model';
import { routePoints } from './mock/point';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new EventsPresenter(siteMainElement.querySelector('.trip-events'));
const routePointsModel = new RoutePointsModel(routePoints);

render(new FilterView(), siteHeaderElement.querySelector('.trip-controls__filters'));
render(new SiteMenuView(), siteHeaderElement.querySelector('.trip-controls__navigation'));

tripPresenter.init(routePointsModel);
