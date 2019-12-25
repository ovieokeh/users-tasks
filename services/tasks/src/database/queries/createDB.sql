CREATE TABLE IF NOT EXISTS tasks (
  id serial PRIMARY KEY,
  description text NOT NULL,
  state varchar (8) NOT NULL,
  user_id int
)