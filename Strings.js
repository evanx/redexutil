// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import Loggers from './Loggers';

const logger = Loggers.create(__filename, 'info');

export function formatNullable(value) {
   if (value) {
      return value;
   } else {
      return '';
   }
}

export function joinColon() {
   return Array.prototype.slice.call(arguments).join(':');
}
