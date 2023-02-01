const stripe = require('stripe')

module.exports = function payus(config = {}) {
  const api = stripe(config.secret_key)
  return { api }
}
