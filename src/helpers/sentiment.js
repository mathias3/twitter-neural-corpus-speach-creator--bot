const unirest = require('unirest')



var sentiment = {}

sentiment.init = function () {
  return unirest.post('https://community-sentiment.p.mashape.com/text/')
  .header('X-Mashape-Key', process.env.SENTIMENT_KEY)
  .header('Content-Type', 'application/x-www-form-urlencoded')
  .header('Accept', 'application/json')
}

module.exports = sentiment
