export default class JSEvent {
    #private;
    dispatchEvent: (event: string, payload: any) => this;
    addEventListener: (event: string, cb: Function) => this;
    removeEventListener: (event: string, cb: Function) => this;
}
