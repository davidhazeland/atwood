const base = {
  dateDisplay: 'MMMM D, YYYY',
  dateFormat: 'YYYY-MM-DD',
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
  lang: 'en'
}

const env = {
  development: {
    apiBaseURL: 'http://localhost:4000'
  },
  test: {

  },
  production: {
    apiBaseURL: 'https://jumparena.herokuapp.com/api'
  }
}

module.exports = {
  ...base,
  ...env[process.env.NODE_ENV]
}
