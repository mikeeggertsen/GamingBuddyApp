import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
var updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(relativeTime);

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: 'now',
    s: 'now',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1mth',
    MM: '%dmth',
    y: '1y',
    yy: '%dy',
  },
});

export default dayjs;
