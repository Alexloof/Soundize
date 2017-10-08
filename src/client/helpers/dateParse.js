import 'moment/locale/sv'
import moment from 'moment'
/*
    Date Parse Options
    - 'simple'          e.g '2017-07-18'
    - 'time'            e.g '2017-07-18 11:25'
    - 'timeOnly'        e.g '11:25'
    - 'full'            e.g 'tisdag 18 juli 2017 kl. 11.25'
    - 'dayAndMonth'     e.g 'torsdag 24e augusti'
    - 'timeSince'       e.g 'för 7 timmar sedan'
    - 'custom'
    Används custom måste även ett "pattern" anges. 
    Se Moment.js docs
    https://momentjs.com/ 
    https://momentjs.com/docs/#/parsing/string-format/
*/

// TODO lös detta bättre

const dateParser = {
  simple(date) {
    moment.locale('sv')
    return moment(date).format('L')
  },

  time(date) {
    moment.locale('sv')
    return moment(date).format('L LT')
  },

  timeOnly(date) {
    moment.locale('sv')
    return moment(date).format('LT')
  },

  full(date) {
    moment.locale('sv')
    return moment(date).format('LLLL')
  },

  timeSince(date) {
    moment.locale('sv')
    return moment(date)
      .startOf('second')
      .fromNow()
  },

  dayAndMonth(date) {
    moment.locale('sv')
    return moment(date).format('dddd Do MMMM')
  },

  dayMonthTime(date) {
    moment.locale('sv')
    return moment(date).format('Do MMMM h:mm')
  },
  custom(date, pattern) {
    moment.locale('sv')
    return moment(date).format(pattern)
  },
  isToday(date) {
    return moment(date).isSame(moment(), 'day')
  }
}

module.exports = dateParser
