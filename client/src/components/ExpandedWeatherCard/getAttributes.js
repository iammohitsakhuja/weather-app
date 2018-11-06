import {
  Humidity,
  NewMoon,
  WaxingCrescent,
  WaxingGibbous,
  FullMoon,
  WaningGibbous,
  WaningCrescent,
  Rain,
  TemperatureCold,
  TemperatureHot,
  Wind,
} from '../../icons'
import { getTemperature, getHumidity, getWindSpeed } from '../../utils'

const getTemperatureAttributes = (apparentTemperatureLow, apparentTemperatureHigh) => {
  const temperatureAttributes = {
    attributeValue: `${getTemperature(apparentTemperatureLow)}-${getTemperature(apparentTemperatureHigh)}°`,
  }

  const meanTemperature = (apparentTemperatureLow + apparentTemperatureHigh) / 2
  if (meanTemperature >= 20) temperatureAttributes.icon = TemperatureHot
  else temperatureAttributes.icon = TemperatureCold

  return temperatureAttributes
}

const getMoonPhaseAttributes = moonPhase => {
  if (moonPhase === 0 || moonPhase === 1) return { icon: NewMoon, attributeValue: 'New Moon' }
  if (moonPhase < 0.25) return { icon: WaxingCrescent, attributeValue: 'Waxing Crescent' }
  if (moonPhase < 0.5) return { icon: WaxingGibbous, attributeValue: 'Waxing Gibbous' }
  if (moonPhase === 0.5) return { icon: FullMoon, attributeValue: 'Full Moon' }
  if (moonPhase < 0.75) return { icon: WaningGibbous, attributeValue: 'Waning Gibbous' }
  return { icon: WaningCrescent, attributeValue: 'Waning Crescent' }
}

const getAttributes = (attributeType, attributePayload) => {
  switch (attributeType) {
    case 'PRECIPITATION': {
      const { precipProbability } = attributePayload
      return {
        icon: Rain,
        imgAlt: 'Precipitation',
        attributeName: 'Precipitation',
        attributeValue: `${precipProbability}%`,
      }
    }
    case 'TEMPERATURE': {
      const { apparentTemperatureLow, apparentTemperatureHigh } = attributePayload
      const { icon, attributeValue } = getTemperatureAttributes(apparentTemperatureLow, apparentTemperatureHigh)

      return {
        icon,
        imgAlt: 'Temperature',
        attributeName: 'Temperature',
        attributeValue,
      }
    }
    case 'HUMIDITY': {
      const { humidity } = attributePayload
      return {
        icon: Humidity,
        imgAlt: 'Humidity',
        attributeName: 'Humidity',
        attributeValue: `${getHumidity(humidity)}%`,
      }
    }
    case 'WIND_SPEED': {
      const { windSpeed } = attributePayload
      return {
        icon: Wind,
        imgAlt: 'Wind Speed',
        attributeName: 'Wind Speed',
        attributeValue: `${getWindSpeed(windSpeed)}km/h`,
      }
    }
    case 'MOON_PHASE': {
      const { moonPhase } = attributePayload
      const { icon, attributeValue } = getMoonPhaseAttributes(moonPhase)

      return {
        icon,
        imgAlt: 'Moon Phase',
        attributeName: 'Moon Phase',
        attributeValue,
      }
    }
    default:
      return {}
  }
}

export default getAttributes
