import { appendFile, readFileSync, writeFileSync, appendFileSync } from 'node:fs';

Date.prototype.toLocalTime = function() {
    return new Date(this.getTime() - this.getTimezoneOffset()*60*1000);
}

class FileHandler {
    static read(path) {
        return readFileSync(path, 'utf-8');
    }
    static write(path, data) {
        writeFileSync(path, data);
    }
    static append(path, data) {
        appendFileSync(path, data);
    }
    static loadConfig(configPath) {
        const rawData = readFileSync(configPath);
        return JSON.parse(rawData);
    }
}

class Logger {
    constructor(logFile = 'logs/app.log') {
        this.logFile = logFile;
    }

    log(msg) {
        let date = new Date().toLocalTime();
        date = date.toISOString().slice(0,19).replace('T', ' ');
        appendFile(this.logFile, `${date}: ${msg}\n`, (err) => {
            if (!err) console.log(`zapisano log do pliku "${this.logFile}"`);
            else console.log('error:', err)
        })
    }
}

function testLog(msg) {
    new Logger().log(msg);
}

testLog('test log message');
