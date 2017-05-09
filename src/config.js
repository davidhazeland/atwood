const base = {
  dateDisplay: 'MMMM D, YYYY',
  dateFormat: 'YYYY-MM-DD',
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
  lang: 'en'
}

const env = {
  development: {
    apiBaseURL: 'https://jumparena.herokuapp.com/api'
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
};
