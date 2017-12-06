import logLevel from './loggers/logLevel.js';

class Log {
    constructor() {
        this.loggers = [];
    }

    addLogger(logger) {
        this.loggers.push(logger);
    }


    send(level, tag, text) {
        for (let logger of this.loggers) {
            logger.send(level, tag, text);
        }
    }

    sendObject(level, tag, text, object) {
        for (let logger of this.loggers) {
            logger.sendObject(level, tag, text, object);
        }
    }
}


// Expose log levels on Log
var levelMap = logLevel.getMap();
for (var key in levelMap) {
    Log.prototype[levelMap[key]] = key;
}

export default new Log();
