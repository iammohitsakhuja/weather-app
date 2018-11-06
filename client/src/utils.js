import moment from 'moment'

// Weather functions.
const getTemperature = temperature => Math.round(temperature) // 18.49 -> 18, 18.50 -> 19.
const getPrecipProbability = precipProbability => Math.round(precipProbability * 100) // 0.5323 -> 53.
const getHumidity = humidity => Math.round(humidity * 100) // 0.7561 -> 76.
const getWindSpeed = windSpeed => Math.round(windSpeed) // 10.23 -> 10.

// Gets the icon name for Skycons.
const getIconName = iconName => iconName.toUpperCase().replace(/-/g, '_') // partly-cloudy-day -> PARTLY_CLOUDY_DAY.

// Time functions.
const getFormattedTimeWithModifier = time => moment.unix(time).format('ha') // Formats time like: `7am` or `11pm`.
const getFormattedTime = time => moment.unix(time).format('hh:mm') // Formats time like: `08:23` using 12-hour system.
const getFormattedModifier = time => moment.unix(time).format('A') // Returns meridian in caps: `AM`, `PM`.
const getFormattedDate = time => moment.unix(time).format('MMMM Do, YYYY') // Formats date like: `November 6th, 2018`.

// Day functions.
const isToday = time => moment.unix(time).isSame(Date.now(), 'day') // Returns `true` or `false`.
const isTomorrow = time => moment.unix(time).isSame(moment().add(1, 'days'), 'day') // Returns `true` or `false`.
const getWeekDay = time => moment.unix(time).format('dddd') // Formats day like: `Monday`, `Tuesday`.

// Returns `Today` if the `time` represents the same day, `Tomorrow` if it represents the next day, week-day otherwise.
const getDayOfWeek = time => {
  if (isToday(time)) return 'Today'
  if (isTomorrow(time)) return 'Tomorrow'
  return getWeekDay(time)
}

export {
  getTemperature,
  getPrecipProbability,
  getHumidity,
  getWindSpeed,
  getIconName,
  getFormattedTimeWithModifier,
  getFormattedTime,
  getFormattedModifier,
  getFormattedDate,
  isToday,
  isTomorrow,
  getWeekDay,
  getDayOfWeek,
}
