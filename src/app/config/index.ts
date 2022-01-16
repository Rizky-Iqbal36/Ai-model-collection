import { config as initEnv } from 'dotenv';
import * as pjson from '../../../package.json';
initEnv();

const validNodeEnv = ['development', 'test', 'production'];
const config = {
  app: {
    name: pjson.name,
    version: pjson.version,
    port: parseInt(process.env.PORT) || 3000,
    env: validNodeEnv.includes(process.env.NODE_ENV)
      ? process.env.NODE_ENV
      : 'development',
  },
};

export default config;
