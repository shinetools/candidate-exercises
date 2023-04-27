const mergeBy = require('../../mergeBy');

describe('mergeBy', () => {
  it('should merge two arrays of objects using a specified key', () => {
    expect(
      mergeBy(
        'id',
        [
          { id: 2, name: 'Anakin', age: 10 },
          {
            id: 0,
            name: 'Obi-Wan',
            side: 'light',
            age: 25,
          },
        ],
        [
          {
            id: 1,
            name: 'Luke',
            side: 'light',
            age: 50,
          },
          { id: 2, name: 'Darth Vader', side: 'dark' },
          {
            id: 7,
            name: 'Yoda',
            side: 'light',
            age: 1000,
          },
        ],
      ),
    ).toEqual([
      {
        id: 2,
        name: 'Darth Vader',
        age: 10,
        side: 'dark',
      },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      {
        id: 1,
        name: 'Luke',
        side: 'light',
        age: 50,
      },
      {
        id: 7,
        name: 'Yoda',
        side: 'light',
        age: 1000,
      },
    ]);
  });

  it('should work with multiple duplicated objects', () => {
    expect(
      mergeBy(
        'id',
        [
          { id: 2, name: 'Anakin', age: 10 },
          {
            id: 0,
            name: 'Dark Maul',
          },
          { id: 2, name: 'Darth Vader', side: 'dark' },
        ],
        [
          {
            id: 0,
            name: 'Obi-Wan',
            side: 'light',
            age: 25,
          },
          {
            id: 1,
            name: 'R2-D2',
          },
          {
            id: 2,
            name: 'Yoda',
          },
        ],
      ),
    ).toEqual([
      {
        id: 2,
        name: 'Yoda',
        age: 10,
        side: 'dark',
      },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      {
        id: 1,
        name: 'R2-D2',
      },
    ]);
  });

  it('should work with a different key', () => {
    expect(
      mergeBy(
        'uniqueKey',
        [
          { uniqueKey: 2, name: 'Anakin', age: 10 },
          {
            uniqueKey: 0,
            name: 'Obi-Wan',
            side: 'light',
            age: 25,
          },
        ],
        [
          {
            uniqueKey: 1,
            name: 'Luke',
            side: 'light',
            age: 50,
          },
          { uniqueKey: 2, name: 'Darth Vader', side: 'dark' },
          {
            uniqueKey: 7,
            name: 'Yoda',
            side: 'light',
            age: 1000,
          },
        ],
      ),
    ).toEqual([
      {
        uniqueKey: 2,
        name: 'Darth Vader',
        age: 10,
        side: 'dark',
      },
      {
        uniqueKey: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      {
        uniqueKey: 1,
        name: 'Luke',
        side: 'light',
        age: 50,
      },
      {
        uniqueKey: 7,
        name: 'Yoda',
        side: 'light',
        age: 1000,
      },
    ]);
  });

  it('should not mutate the array inputs', () => {
    const arrayInput1 = [
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
    ];
    const arrayInput2 = [
      {
        id: 1,
        name: 'Luke',
        side: 'light',
        age: 50,
      },
      { id: 2, name: 'Darth Vader', side: 'dark' },
      {
        id: 7,
        name: 'Yoda',
        side: 'light',
        age: 1000,
      },
    ];

    mergeBy('id', arrayInput1, arrayInput2);

    expect(arrayInput1).toEqual([
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
    ]);
    expect(arrayInput2).toEqual([
      {
        id: 1,
        name: 'Luke',
        side: 'light',
        age: 50,
      },
      { id: 2, name: 'Darth Vader', side: 'dark' },
      {
        id: 7,
        name: 'Yoda',
        side: 'light',
        age: 1000,
      },
    ]);
  });
});
