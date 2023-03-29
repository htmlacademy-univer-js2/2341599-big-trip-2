import dayjs from 'dayjs';

const totalDayMinutes = 1440;
const totalHoursMinutes = 60;

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
  formatStringToDateWithTime,
  getDateTime,
  getDate,
  humanizePointDueDate,
  duration,
  getTime,
};
