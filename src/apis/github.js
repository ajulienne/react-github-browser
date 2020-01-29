import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 minutes cache
  exclude: { query: false } // Cache query params too
});

export default axios.create({
  baseURL: 'https://api.github.com',
  adapter: cache.adapter
});
