import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filter, isChecked) =>{
  const {name, isPoints } = filter;
  return(
    `<div class="trip-filters__filter">
    <input id="filter-${name}" 
    class="trip-filters__filter-input  visually-hidden" 
    type="radio" 
    name="trip-filter" 
    ${isChecked ? 'checked' : ''}
    ${isPoints ? '' : 'disabled'}
    value=${name}>
    <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
  </div>`
  );
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = Array.from(filterItems)
    .map((name, isPoints) => createFilterItemTemplate(name, isPoints))
    .join('');
  return(
    `<form class="trip-filters" action="#" method="get">
       ${filterItemsTemplate}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
};

export default class FilterView extends AbstractView{
  constructor(filters) {
    super();
    this.filters = filters;
  }

  get template() {
    return createFilterTemplate(this.filters);
  }
}
