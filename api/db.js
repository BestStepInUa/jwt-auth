import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  password: 'g8tcal1_3G',
  host: 'localhost',
  port: '5433',
  database: 'auth',
});

export default pool;
