export default class JSEvent {
  #listener: Map<string, Function[]> = new Map()
  
  dispatchEvent = (event: string, payload: any) => {
    let handlers = this.#listener.get(event)
    if (Array.isArray(handlers)) {
      handlers.forEach((h) => h(payload))
    }
    return this
  }
  addEventListener = (event: string, cb: Function) => {
    let handlers = this.#listener.get(event)
    handlers = Array.isArray(handlers) ? [...handlers, cb] : [cb]
    this.#listener.set(event, handlers)
    return this
  }
  removeEventListener = (event: string, cb: Function) => {
    let handlers = this.#listener.get(event)
    if (Array.isArray(handlers)) {
      handlers = handlers.filter((h) => h !== cb)
      this.#listener.set(event, handlers)
    }
    return this
  }
}
