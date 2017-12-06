var map = {
    0: 'DEBUG',
    1: 'INFO',
    2: 'WARN',
    3: 'ERROR',
    4: 'FATAL'
};

class LogLevel {
    getMap() {
        return map;
    }
    
    levelToString(level) {
        return map[level];
    }

    stringToLevel(str) {
        for (let key in map) {
            if (map[key] == str) {
                return key;
            }
        }
        return null;
    }
}

for (var key in map) {
    LogLevel.prototype[map[key]] = key;
}

export default new LogLevel();
