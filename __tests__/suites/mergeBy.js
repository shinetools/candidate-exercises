const mergeBy = require('../../mergeBy');

describe('mergeBy', () => {
  it('should merge an array of objects using the provided key', () => {
    expect(
      mergeBy(
        'id',
        [{ id: 1, name: 'Anakin', age: 10 }],
        [{ id: 1, name: 'Darth Vader', side: 'dark' }],
      ),
    ).toEqual([
      {
        id: 1,
        name: 'Darth Vader',
        age: 10,
        side: 'dark',
      },
    ]);
  });
  it('should merge an array of objects using the provided key merging duplicates in the first occurence and keeping the sort order', () => {
    expect(
      mergeBy(
        'id',
        [
          { id: 1, name: 'Anakin', age: 10 },
          {
            id: 2,
            name: 'Obi-Wan',
            side: 'light',
            age: 25,
          },
        ],
        [
          {
            id: 3,
            name: 'Luke',
            side: 'light',
            age: 50,
          },
          { id: 1, name: 'Darth Vader', side: 'dark' },
          {
            id: 4,
            name: 'Yoda',
            side: 'light',
            age: 1000,
          },
        ],
      ),
    ).toEqual([
      {
        id: 1,
        name: 'Darth Vader',
        age: 10,
        side: 'dark',
      },
      {
        id: 2,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      {
        id: 3,
        name: 'Luke',
        side: 'light',
        age: 50,
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
