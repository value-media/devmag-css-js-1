const fs = require('fs');

class Logger {
  // Specifying the log file
  constructor(logFile = 'app.log') {
    this.logFile = logFile;
  }
  // Method for logging messages with timestamps
  log(message) {
    const date = new Date().toISOString();
    fs.appendFileSync(this.logFile, `${date} - ${message}\n`);
  }
}


class FileHandler {
    // Method for reading files
    static read(path) {
      return fs.readFileSync(path, 'utf-8');
    }
    // Method for writing to files
    static write(path, data) {
      fs.writeFileSync(path, data);
    }
    // Method for appending data to files
    static append(path, data) {
      fs.appendFileSync(path, data);
    }
}

const logger = new Logger();

logger.log('informacja z apki');
