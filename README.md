# TO DO

Implement & write tests for the following functions

## uniqBy

- [ ] it should deduplicate objects inside an array using the provided key

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
