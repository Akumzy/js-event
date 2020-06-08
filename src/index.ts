export default class JSEvent {
  #listeners: Map<string, Function[]> = new Map()
  dispatchEvent = (event: string, payload: any) => {
    let handlers = this.#listeners.get(event)
    if (Array.isArray(handlers)) {
      handlers.forEach((h) => h(payload))
    }
    return this
  }
  addEventListeners = (event: string, cb: Function) => {
    let handlers = this.#listeners.get(event)
    handlers = Array.isArray(handlers) ? [...handlers, cb] : [cb]
    this.#listeners.set(event, handlers)
    return this
  }
  removeEventListeners = (event: string, cb: Function) => {
    let handlers = this.#listeners.get(event)
    if (Array.isArray(handlers)) {
      handlers = handlers.filter((h) => h !== cb)
      this.#listeners.set(event, handlers)
    }
    return this
  }
}
