# TO DO

## uniqBy

- [ ] it should deduplicate objects inside an array using the provided key

```js
uniqBy("id", [
  { id: 1, name: "Anakin", age: 10 },
  { id: 1, name: "Darth Vader", side: "dark" }
]); // [{ id: 1, name: "Darth Vader", side: "dark" }]
```

## mergeBy

- [ ] `mergeBy` should merge two arrays of objects using a specified key

```js
mergeBy(
  "id",
  [{ id: 1, name: "Anakin", age: 10 }],
  [{ id: 1, name: "Darth Vader", side: "dark" }]
); // [{ id: 1, name: "Darth Vader", age: 10, side: "dark" }]
```

- [ ] `mergeBy` should accept a function as first parameter (eg. `mergeBy('id', a, b) === mergeBy(obj => obj.id, a, b)`)
- [ ] `mergeBy` should only use the predicate function or key for the first level of depth

```js
mergeBy(
  "id",
  [{ id: 1, name: "Anakin", weapons: [{ id: 1, name: "blaster" }] }],
  [{ id: 1, name: "Darth Vader", weapons: [{ id: 1, name: "lightsaber" }] }]
); // [{id: 1,age: 10,name: 'Darth Vader',side: 'dark',weapons: [{ id: 1, name: 'blaster' }, { id: 1, name: 'lightsaber' }]}]
```

- [ ] `mergeBy` should work on Sets
