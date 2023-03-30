import { getRandomBoolean, getRandomInteger, getRandomValue } from '../utils/common';
import dayjs from 'dayjs';
import {routePointsCount, prices} from './const';
import {offersByType} from './offer';
import {destinations} from './destination';

const generatePoint = (id) => {
  const offersByTypePoint = getRandomValue(offersByType);
  const allOfferIdsByTypePoint = offersByTypePoint.offers.map((offer) => offer.id);
  return{
    basePrice: getRandomInteger(prices.Min, prices.Max),
    dateFrom: dayjs().add(getRandomInteger(-3, 0), 'day').add(getRandomInteger(-2, 0), 'hour').add(getRandomInteger(-59, 0), 'minute'),
    dateTo: dayjs().add(getRandomInteger(0, 2), 'hour').add(getRandomInteger(0, 59), 'minute'),
    destination: getRandomValue(destinations).id,
    id,
    isFavorite: getRandomBoolean(),
    offers: Array.from({length: getRandomInteger(0, allOfferIdsByTypePoint.length)}).map(() => allOfferIdsByTypePoint[getRandomInteger(0, allOfferIdsByTypePoint.length - 1)]),
    type: offersByTypePoint.type
  };
};

const routePoints = Array.from({length: routePointsCount}).map((value, index) => generatePoint (index + 1));

export{routePoints};
