"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _listener;
Object.defineProperty(exports, "__esModule", { value: true });
class JSEvent {
    constructor() {
        _listener.set(this, new Map());
        this.dispatchEvent = (event, payload) => {
            let handlers = __classPrivateFieldGet(this, _listener).get(event);
            if (Array.isArray(handlers)) {
                handlers.forEach((h) => h(payload));
            }
            return this;
        };
        this.addEventListener = (event, cb) => {
            let handlers = __classPrivateFieldGet(this, _listener).get(event);
            handlers = Array.isArray(handlers) ? [...handlers, cb] : [cb];
            __classPrivateFieldGet(this, _listener).set(event, handlers);
            return this;
        };
        this.removeEventListener = (event, cb) => {
            let handlers = __classPrivateFieldGet(this, _listener).get(event);
            if (Array.isArray(handlers)) {
                handlers = handlers.filter((h) => h !== cb);
                __classPrivateFieldGet(this, _listener).set(event, handlers);
            }
            return this;
        };
    }
}
exports.default = JSEvent;
_listener = new WeakMap();
//# sourceMappingURL=index.js.map