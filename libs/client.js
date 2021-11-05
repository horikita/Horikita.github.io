import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'horikita',  
  apiKey: process.env.API_KEY,
});
