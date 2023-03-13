import { getRandomInteger, getRandomValue } from '../utils';

const prices = {
  Min: 100,
  Max: 10000
};
const PictureNumber = {
  Min: 1,
  Max: 50
};

const routePointsCount = 20;

const months = {
  Min: 1,
  Max: 11
};

const ElementsCount = {
  Min: 1,
  Max: 4
};

const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const cities = ['Moscow', 'Ekaterinburg', 'Dubai', 'London', 'Beijing', 'Budapest'];
const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'];
const generatePicture = () => ({
  src: `http://picsum.photos/248/152?r=${getRandomInteger(PictureNumber.Min, PictureNumber.Max)}`,
  description: getRandomValue(descriptions),
});

export{
  types,
  cities,
  descriptions,
  months,
  prices,
  ElementsCount,
  routePointsCount,
  generatePicture
};

