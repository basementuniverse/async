**@basementuniverse/async**

***

# Async

Async versions of common list functions.

## Installation

```
npm install @basementuniverse/async
```

## Usage

See [docs](docs/modules.md) for more information.

### asyncForEach

```typescript
import { asyncForEach } from '@basementuniverse/async';

await asyncForEach<string>(
  [
    'one',
    'two',
    'three',
  ],
  async (value: string) => {
    await fetch(`localhost:8080/${value}`);
  }
);
```

---

### asyncMap

```typescript
import { asyncMap } from '@basementuniverse/async';

const results = await asyncMap<string, number>(
  [
    '123',
    '456',
    '789',
  ],
  async (value: string) => {
    // asynchronous stuff here...
    return Number(value);
  }
);

/*
results: [123, 456, 789]

Note that the order of results might be different.
*/

```

---

### asyncFilter

```typescript
import { asyncFilter } from '@basementuniverse/async';

const results = await asyncFilter<string>(
  [
    'allowed1',
    'notAllowed2',
    'allowed3',
    'notAllowed4',
  ],
  async (value: string) => {
    // asynchronous stuff here...
    return value.startsWith('allowed');
  }
);

/*
results: ['allowed1', 'allowed2']

Note that the order of results might be different.
*/
```

---

### asyncReduce

```typescript
import { asyncReduce } from '@basementuniverse/async';

const result = await asyncReduce<string, number>(
  [
    '1',
    '2',
    '3',
  ],
  async (previous: number, current: string) => {
    // asynchronous stuff here...
    return previous + Number(current);
  },
  0
);

/*
result: 6
*/
```

---

### asyncFind

```typescript
import { asyncFind } from '@basementuniverse/async';

const result = await asyncFind<string>(
  [
    'one',
    'two',
    'three',
  ],
  async (value: string) => {
    // asynchronous stuff here...
    return value === 'two';
  }
);

/*
result: 'two'
*/
```

---

### asyncFindIndex

```typescript
import { asyncFindIndex } from '@basementuniverse/async';

const result = await asyncFindIndex<string>(
  [
    'one',
    'two',
    'three',
  ],
  async (value: string) => {
    // asynchronous stuff here...
    return value === 'two';
  }
);

/*
result: 1
*/
```
