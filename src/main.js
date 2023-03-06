import FilterView from './view/filter-view';
import EventsPresenter from './presenter/events-presenter';
import { render } from './render.js';

const siteHeader = document.querySelector('.trip-main');
const siteMain = document.querySelector('.page-main');
const tripPresenter = new EventsPresenter();

render(new FilterView(), siteHeader.querySelector('.trip-controls__filters'));

tripPresenter.init(siteMain.querySelector('.trip-events'));
