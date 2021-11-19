"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
class Deferred {
    constructor() {
        this.__promise = new Promise((resolve, reject) => {
            this.__resolve = resolve;
            this.__reject = reject;
        });
    }
    get promise() {
        return this.__promise;
    }
    get resolve() {
        return this.__resolve;
    }
    get reject() {
        return this.__reject;
    }
}
exports.default = Deferred;
//# sourceMappingURL=deferred.js.map