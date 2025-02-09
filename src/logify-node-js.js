import * as fs from "fs";
import chalk from "chalk";

class Logger {
  constructor(logFile = "logs.txt") {
    this.logFile = logFile;
  }

  formatMessage(level, message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  writeToFile(message) {
    fs.appendFileSync(this.logFile, message + "\n");
  }

  log(level, message) {
    const formattedMessage = this.formatMessage(level, message);

    // Log to file
    this.writeToFile(formattedMessage);

    // Log to console with color
    switch (level) {
      case "info":
        console.log(chalk.blue(formattedMessage));
        break;
      case "warn":
        console.log(chalk.yellow(formattedMessage));
        break;
      case "error":
        console.log(chalk.red(formattedMessage));
        break;
      case "debug":
        console.log(chalk.green(formattedMessage));
        break;
    }
  }
}

// Export instance
export const logger = new Logger();
