# js-event

`js-event` is a simple JavaScript event emitter primarily created for a React project that needed an event bus.

## Installation

```sh
# With yarn
yarn add @akumzy/js-event

# With npm
npm install @akumzy/js-event
```

## Usage

```tsx
// utils.ts
import JSEvent from '@akumzy/js-event'
export const eventBus = new JSEvent()
```

```tsx
// components/Modal.tsx
import { useEffect, useState } from 'React'
import { eventBus } from './utils'

export default function Counter(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const onCount = () => {
      setCount((value) => (value += 1))
    }
    eventBus.addEventListener('oncount', onCount)
    return () => {
      eventBus.removeEventListener('oncount', onCount)
    }
  }, [])

  return <div>Count: {count}</div>
}
```

```tsx
// index.tsx
import { eventBus } from '../utils'

export default function App() {
  const onClick = () => {
    eventBus.dispatch('oncount')
    // eventBus.dispatch('oncount', 10000)
  }

  return (
    <div>
      <h1>React App</h1>
      <button onClick={onClick}>Counter</button>
    </div>
  )
}
```

*For Node.js apps please use Node standard event package*
