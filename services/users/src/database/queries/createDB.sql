CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name varchar (50) UNIQUE NOT NULL
)
