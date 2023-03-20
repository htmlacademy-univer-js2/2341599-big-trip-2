export default class RoutePointsModel {
  #routePoints = null;
  
  constructor(routePoints) {
    this.#routePoints = routePoints;
  }

  get RoutePoints() {
    return this.#routePoints;
  }
}
