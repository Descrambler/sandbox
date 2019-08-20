import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Logger } from './logger.model';
import { DatePipe } from '@angular/common';

/**
 * used to say if console Logger service is enable or not
 */
export let isDebugMode = environment.isDebugMode;

/**
 * Don't know
 */
const noop = (): any => undefined;

/**
 * A console logger service for inspector.
 */
@Injectable()
export class ConsoleLoggerService implements Logger {

  /**
   * Used to print a info log.
   * Print date of log with log with a specific style paramaters
   */
  get info() {
    if (isDebugMode) {

      const pipe = new DatePipe('en-US');

      const s1 = `color:DarkBlue;font-weight:bold;padding-right:0.5%`;

      const s2 = `color:#071A72;`;

      return console.info.bind(console, `%c[${pipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')}]%c%s`, s1, s2);
    } else {
      return noop;
    }
  }

  /**
   * Used to print a warning log.
   * Print date of log with log with a specific style paramaters
   */
  get warn() {
    if (isDebugMode) {
      const pipe = new DatePipe('en-US');

      const s1 = `border-left:1px solid orange;
      border-top:1px solid orange;
      border-bottom:1px solid orange;
      color:#A57317;
      font-size:12px;
      font-weight:bold;
      padding-top:0.5%;
      padding-bottom:0.5%;
      padding-left:0.5%;
      `;

      const s2 = `border-right:1px solid orange;
      border-top:1px solid orange;
      border-bottom:1px solid orange;
      color:orange;
      font-size:12px;
      font-weight:bold;
      padding-top:0.5%;
      padding-bottom:0.5%;
      padding-right:0.5%;
      padding-left:0.25%`;
      return console.warn.bind(console, `%c[${pipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')}]%c%s`, s1, s2);
    } else {
      return noop;
    }
  }

  /**
   * Used to print a error log.
   * Print date of log with log with a specific style paramaters
   */
  get error() {
    if (isDebugMode) {
      const pipe = new DatePipe('en-US');

      const s1 = `border-left:2px solid #f88;
      border-top:2px solid #f88;
      border-bottom:2px solid #f88;
      background:Red;
      color:White;
      font-size:12px;
      font-weight:bold;
      padding-top:0.5%;
      padding-bottom:0.5%;
      padding-left:0.5%;
      ;;;padding:1%';
      `;

      const s2 = `border-right:2px solid #f88;
      border-top:2px solid #f88;
      border-bottom:2px solid #f88;
      color:White;
      background:Red;
      font-size:12px;
      font-weight:bold;
      padding-top:0.5%;
      padding-bottom:0.5%;
      padding-right:0.5%;
      padding-left:0.25%`;
      return console.error.bind(console, `%c[${pipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')}]%c%s`, s1, s2);
    } else {
      return noop;
    }
  }

  /**
   * Used to print a generic log.
   * Not realy used for the moment.
   */
  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: () => void = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
}
