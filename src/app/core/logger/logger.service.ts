import { Injectable } from '@angular/core';
import { Logger } from './logger.model';

/**
 * A generic logger service.
 */
@Injectable()
export class LoggerService implements Logger {

  /**
   * property to log info value
   */
  info: any;
  /**
   * property to log warning value
   */
  warn: any;
  /**
   * property to log error value
   */
  error: any;

  /**
   * A generic call method to log
   * @param type type of log
   * @param args options of log
   */
  invokeConsoleMethod(type: string, args?: any): void { }
}
