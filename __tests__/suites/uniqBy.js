const uniqBy = require('../../uniqBy');

describe('uniqBy', () => {
  it('should deduplicate objects inside an array using the provided key', () => {
    expect(
      uniqBy('id', [
        { id: 1, name: 'Anakin', age: 10 },
        { id: 1, name: 'Darth Vader', side: 'dark' },
      ]),
    ).toEqual([{ id: 1, name: 'Anakin', age: 10 }]);
  });
  it('should deduplicate objects inside an array keeping the first one and preserving the sort order', () => {
    expect(
      uniqBy('id', [
        { id: 1, name: 'Anakin', age: 10 },
        {
          id: 3,
          name: 'Luke',
          side: 'light',
          age: 50,
        },
        {
          id: 2,
          name: 'Obi-Wan',
          side: 'light',
          age: 25,
        },
        { id: 1, name: 'Darth Vader', side: 'dark' },
        {
          id: 4,
          name: 'Yoda',
          side: 'light',
          age: 1000,
        },
      ]),
    ).toEqual([
      { id: 1, name: 'Anakin', age: 10 },
      {
        id: 3,
        name: 'Luke',
        side: 'light',
        age: 50,
      },
      {
        id: 2,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      {
        id: 4,
        name: 'Yoda',
        side: 'light',
        age: 1000,
      },
    ]);
  });
});
