var mongoose = require('mongoose'),
    AccountSchema = mongoose.Schema ;

var accountModel = new AccountSchema({
    email: String,
    password: String,
    reserveEmail: String,
    phone: String,
    ipAddress: String,
    country: String,
    cityId: String,
    cityName: String,
    votingDate: Date,
    gender: String,
    firstName: String,
    lastName: String,
    topFive: [String]
});

module.exports = mongoose.model('Account', accountModel);