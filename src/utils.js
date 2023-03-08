import dayjs from 'dayjs';

const totalDayMinutes = 1440;
const totalHoursMinutes = 60;
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

const formatStringToDateWithTime = (date) =>
  dayjs(date).format('YYYY/MM/DD hh:mm');

const humanizePointDueDate = (date) => dayjs(date).format('DD MMM');

const duration = (dateFrom, dateTo) => {
  const start = dayjs(dateFrom);
  const end = dayjs(dateTo);
  const difference = end.diff(start, 'minute');

  const days = Math.floor(difference / totalDayMinutes);
  const restHours = Math.floor((difference - days * totalDayMinutes) / totalHoursMinutes);
  const restMinutes = difference - (days * totalDayMinutes + restHours * totalHoursMinutes);

  const daysOutput = (days) ? `${days}D` : '';
  const hoursOutput = (restHours) ? `${restHours}H` : '';
  const minutesOutput = (restMinutes) ? `${restMinutes}M` : '';

  return `${daysOutput} ${hoursOutput} ${minutesOutput}`;
};

const getDate = (date) => dayjs(date).format('YYYY-MM-DD');
const getDateTime = (date) => dayjs(date).format('DD/MM/YY hh:mm');
const getTime = (date) => dayjs(date).format('hh:mm');

export{
  getRandomInteger,
  getRandomValue,
  getRandomBoolean,
  formatStringToDateWithTime,
  getDateTime,
  getDate,
  humanizePointDueDate,
  duration,
  getTime
};
