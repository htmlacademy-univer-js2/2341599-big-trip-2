const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - Math.random()));
};

const getRandomElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const getRandomBoolean = () => {
  const randomNumber = Math.random() >= 0.5;
  return randomNumber;
};

const isEscape = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const capitalizeValue = (value) => {
  if (value === false) {
    return '';
  }
  const capFirstValue = value[0].toUpperCase();
  const restOfValue = value.slice(1);
  return capFirstValue + restOfValue;
};

export {getRandomInteger, getRandomElement, isEscape, getRandomBoolean, capitalizeValue};
