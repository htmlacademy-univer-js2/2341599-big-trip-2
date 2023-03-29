const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - Math.random()));
};

const getRandomValue = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const getRandomBoolean = () => {
  const randomNumber = Math.random() >= 0.5;
  return randomNumber;
};

const isEscape = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomInteger, getRandomValue, getRandomBoolean, isEscape}