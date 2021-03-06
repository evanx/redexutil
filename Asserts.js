// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

const logger = Loggers.create(__filename, 'info');

const that = {

   assert(value, message) {
      assert(value, message);
   },

   assertNumber(value, message) {
      assert(!isNaN(value), message);
   }
}

module.exports = that;
