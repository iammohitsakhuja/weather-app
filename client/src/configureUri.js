const uriConfig = process.env.NODE_ENV === 'production' ? {
  weatherUri: '/weather-app/api/weather',
  autocompleteUri: '/weather-app/api/autocomplete'
} : {
    weatherUri: '/api/weather',
    autocompleteUri: '/api/autocomplete'
  }

export default uriConfig
