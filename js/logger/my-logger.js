
export class MyLogger {
    static Levels = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    };

    static CurrentLevel = this.Levels.DEBUG;

    static getCurrentTime() {
        const d = new Date();
        return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).
            toISOString().
            replace(/T|Z|\.\d+/g, ' ').
            trim();
    }

    static #log(level, ...args) {
        if (level >= this.CurrentLevel) {
            const timestamp = this.getCurrentTime();
            const stack = new Error().stack?.
                split('\n')[3].
                trim().
                replace(/^at\s+/g, '');

            console.log(`[${timestamp}] [${Object.keys(this.Levels)[level]}] [${stack}]:`, ...args)
        }
    }

    static debug(...args) { this.#log(this.Levels.DEBUG, ...args); }
    static info(...args) { this.#log(this.Levels.INFO, ...args); }
    static warn(...args) { this.#log(this.Levels.WARN, ...args); }
    static error(...args) { this.#log(this.Levels.ERROR, ...args); }
}

function test1() {
    MyLogger.debug('tyłek', 'dupa')
}

test1();