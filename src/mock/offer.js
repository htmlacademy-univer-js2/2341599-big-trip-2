import { prices, ElementsCount, types } from './const';
import { getRandomInteger } from '../utils/common';

const generateOffer = (id, pointType) => ({
  id,
  title: `offer for ${pointType}`,
  price: getRandomInteger(prices.Min, prices.Max)
});

const generateOfferByType = (pointType) => ({
  type: pointType,
  offers: Array.from({length: getRandomInteger(ElementsCount.Min, ElementsCount.Max)}).map((value, index) => generateOffer(index + 1, pointType))
});

const offersByType = Array.from({length: types.length}).map((value, index) => generateOfferByType(types[index]));

export{ offersByType };
