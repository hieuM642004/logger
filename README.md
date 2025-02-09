# logify-log-js

A simple and customizable logging utility for Node.js, allowing you to log messages with different levels (info, warn, error, debug) to both the console and a log file. The log messages are formatted with a timestamp for better readability.

## Installation

To install the package via npm, run the following command:

```bash
npm install logify-log-js
```

## Usage

### 1. Basic Usage (Log to Console and File)

To use the logger in your project, simply import the `logger` instance and use it to log messages.

```javascript
import { logger } from 'logify-log-js';

logger.log('info', 'This is an informational message');
logger.log('warn', 'This is a warning message');
logger.log('error', 'This is an error message');
logger.log('debug', 'This is a debug message');
```

### 2. Log Levels

This logger supports four log levels: `info`, `warn`, `error`, and `debug`. Each log level is displayed with a different color in the console for better distinction.

- `info`: Blue color in console, logged to the file.
- `warn`: Yellow color in console, logged to the file.
- `error`: Red color in console, logged to the file.
- `debug`: Green color in console, logged to the file.

```javascript
logger.log('info', 'Informational message');
logger.log('warn', 'Warning message');
logger.log('error', 'Error message');
logger.log('debug', 'Debug message');
```

### 3. Custom Log File

By default, the logger writes to a file named `logs.txt`. You can specify your own log file name when initializing the `Logger` class.

```javascript
import { logger } from 'logify-log-js';

const customLogger = new Logger('custom-log.txt');
customLogger.log('info', 'This message will be logged to custom-log.txt');
```

### 4. File Log Format

Each log message written to the file will include a timestamp and the log level in the format:

```
[YYYY-MM-DDTHH:mm:ss.sssZ] [LEVEL] Your message here
```

Example:
```
[2025-02-09T12:00:00.000Z] [INFO] This is an info message
[2025-02-09T12:01:00.000Z] [ERROR] This is an error message
```

## Methods

### `log(level: string, message: string)`

Logs a message with a specified log level (`info`, `warn`, `error`, `debug`). The message will be logged both to the console (with color) and to the log file.

### Example usage:

```javascript
logger.log('info', 'Informational message');
logger.log('warn', 'Warning message');
logger.log('error', 'Error message');
logger.log('debug', 'Debug message');
```

### `writeToFile(message: string)`

Writes a message to the log file.

### `formatMessage(level: string, message: string)`

Formats the log message with a timestamp and the log level.

## License

This project is licensed under the MIT License.

## Author

Le Minh Hieu