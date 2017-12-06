import config from 'config/config.js';
import logLevel from './logLevel.js';

export default class ConsoleLogger {
    constructor() {
        this.level = logLevel.DEBUG;
    }

    setLogLevel(level) {
        this.level = level;
    }

    send(level, tag, text) {
        if (level < this.level) { return; }

        var fn = console.log;
        if ((console.error && level == logLevel.ERROR)
            || (console.error && level == logLevel.FATAL)) {
            fn = console.error;
        }
        if (console.warn && level == logLevel.WARN) {
            fn = console.warn;
        }
        if (console.info && level == logLevel.INFO) {
            fn = console.info;
        }
        if (console.debug && level == logLevel.DEBUG) {
            fn = console.debug;
        }
        // Binding back to console because iOS Safari is weird
        fn.bind(console)(config.logPrefix + logLevel.levelToString(level) + ': ' + '[' + tag + '] ' + text);
    }

    sendObject(level, tag, text, object) {
        if (level < this.level) { return; }

        var fn = console.log;
        if ((console.error && level == logLevel.ERROR)
            || (console.error && level == logLevel.FATAL)) {
            fn = console.error;
        }
        if (console.warn && level == logLevel.WARN) {
            fn = console.warn;
        }
        if (console.info && level == logLevel.INFO) {
            fn = console.info;
        }
        if (console.debug && level == this.DEBUG) {
            fn = console.debug;
        }
        fn.bind(console)(config.logPrefix + logLevel.levelToString(level) + ': ' + '[' + tag + '] ' + text, object);
    }
}
