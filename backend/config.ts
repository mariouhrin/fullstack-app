import readConfig from './lib/read-config';
import jwtValidate from './lib/jwt-validate';
import moment from 'moment';
import { types } from 'pg';

const dateTypeOID = 1082;
const parseDateToUTC = (date: string) => {
  return date === null ? null : moment.utc(date).format();
};
types.setTypeParser(dateTypeOID, parseDateToUTC);

// See APL-1000 - setting type parser for SERIAL (int4) to return strings for ids to prevent breaking changes
const int4OID = 23;
/* istanbul ignore next */
types.setTypeParser(int4OID, (num) => num);

readConfig();

export default {
  port: process.env.PORT,
  logLevel: process.env.LOG_LEVEL,
  jwt: {
    key: process.env.JWT_SECRET,
    validate: jwtValidate,
    verifyOptions: {
      algorithms: ['HS256']
    }
  },
  db: {
    client: 'pg',
    version: '9.6',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST_LOCAL,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    },
    debug: process.env.DB_DEBUG === 'true'
  }
};
