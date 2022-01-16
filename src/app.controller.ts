import * as moment from 'moment';
import 'moment-duration-format';
import { Controller, Get } from '@nestjs/common';
import config from './app/config';

@Controller()
export class AppController {
  @Get('health-check')
  healthCheck() {
    return {
      name: config.app.name,
      version: config.app.version,
      environment: config.app.version,
      pid: process.pid,
      uptime: moment
        .duration(process.uptime(), 'seconds')
        .format('h [hrs] : m [min] : s [sec]', { trim: false }),
    };
  }
}
