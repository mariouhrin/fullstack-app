CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE customers
(
  index SERIAL PRIMARY KEY,
  random uuid DEFAULT uuid_generate_v4(),
  isactive TEXT,
  balance TEXT,
  age integer,
  name TEXT,
  gender TEXT,
  company TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  registered TEXT
);


COPY customers FROM '/data/data.csv' delimiter ',' csv header;
