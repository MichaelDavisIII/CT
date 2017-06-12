/**
* @providesModule myapp/utils/debugger
*/

/* eslint-disable */

const DEVELOPMENT = true;

class Debugger {
    log() {
        if(!DEVELOPMENT) return;
        return Function.apply.call(console.log, console, arguments);
    }

    warn() {
        if(!DEVELOPMENT) return;
        return Function.apply.call(console.warn, console, arguments);
    }

    error() {
        if(!DEVELOPMENT) return;
        return Function.apply.call(console.error, console, arguments);
    }
}

export default new Debugger();
