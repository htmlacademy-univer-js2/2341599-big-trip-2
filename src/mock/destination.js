import { cities, descriptions, ElementsCount, generatePicture} from './const';
import { getRandomValue, getRandomInteger } from '../utils/common';

const generateDestination = (id) => ({
  id,
  description: getRandomValue(descriptions),
  name: cities[id],
  pictures: Array.from({length: getRandomInteger(ElementsCount.Min, ElementsCount.Max)}, generatePicture)
});

const destinations = Array.from({length: cities.length}).map((value, index) => generateDestination(index));

export{destinations};
