# TO DO

Implement & write tests for the following functions

## uniqBy

- [ ] it should deduplicate objects inside an array using the provided key.
  - the input array must not be mutated
  - the order of the elements must be kept (i.e.: you cannot have Obi-Wan before Anakin) 

```js
uniqBy('id', [
  { id: 2, name: 'Anakin', age: 10 },
  { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
  { id: 2, name: 'Darth Vader', side: 'dark' },
]);

[
  { id: 2, name: 'Anakin', age: 10 },
  { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
];
```

## mergeBy

- [ ] `mergeBy` should merge two arrays of objects using a specified key
  - the input arrays must not be mutated
  - the order of the elements must be kept (i.e.: you cannot have Obi-Wan before Anakin/Darth Vader)

```js
mergeBy(
  'id',
  [
    { id: 2, name: 'Anakin', age: 10 },
    { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
  ],
  [
    { id: 1, name: 'Luke', side: 'light', age: 50 },
    { id: 2, name: 'Darth Vader', side: 'dark' },
    { id: 7, name: 'Yoda', side: 'light', age: 1000 },
  ],
);

[
  { id: 2, name: 'Darth Vader', age: 10, side: 'dark' },
  { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
  { id: 1, name: 'Luke', side: 'light', age: 50 },
  { id: 7, name: 'Yoda', side: 'light', age: 1000 },
];
```

- [ ] `mergeBy` should accept a function as first parameter (eg. `mergeBy('id', a, b) === mergeBy(obj => obj.id, a, b)`)
- [ ] `mergeBy` should only use the predicate function or key for the first level of depth (and use a regular concatenation for depth > 1)

```js
mergeBy(
  'id',
  [{ id: 1, name: 'Anakin', age: 10, weapons: [{ id: 1, name: 'blaster' }] }],
  [
    {
      id: 1,
      name: 'Darth Vader',
      side: 'dark',
      weapons: [{ id: 1, name: 'lightsaber' }],
    },
  ],
); // [{id: 1, age: 10, name: 'Darth Vader', side: 'dark', weapons: [{ id: 1, name: 'blaster' }, { id: 1, name: 'lightsaber' }]}]
```

- [ ] _BONUS_ `mergeBy` should work on Sets

## enrichTransactions

- [ ] `enrichTransactions` should enrich the list of transactions with tag information

```js
const tags = [
  { tagId: 'tag-1', name: 'RENT' },
  { tagId: 'tag-2', name: 'TELECOM' },
  { tagId: 'tag-3', name: 'TRANSPORTATION' },
  { tagId: 'tag-4', name: 'FOOD' },
  { tagId: 'tag-5', name: 'BANK' },
  { tagId: 'tag-6', name: 'TAX' },
  { tagId: 'tag-7', name: 'LEGAL' },
];

const transactions = [
  {
    transactionId: 'transaction-1',
    tags: ['tag-1', 'tag-5'],
    currency: 'EUR',
    value: 100,
  },
  { transactionId: 'transaction-2', tags: [], currency: 'EUR', value: 1289 },
  {
    transactionId: 'transaction-3',
    tags: ['tag-7'],
    currency: 'EUR',
    value: 991,
  },
];

enrichTransactions(transactions, tags);

[
  {
    transactionId: 'transaction-1',
    tags: [{ tagId: 'tag-1', name: 'RENT' }, { tagId: 'tag-5', name: 'BANK' }],
    currency: 'EUR',
    value: 100,
  },
  {
    transactionId: 'transaction-2',
    tags: [],
    currency: 'EUR',
    value: 1289,
  },
  {
    transactionId: 'transaction-3',
    tags: [{ tagId: 'tag-7', name: 'LEGAL' }],
    currency: 'EUR',
    value: 991,
  },
];
```
