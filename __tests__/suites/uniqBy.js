const uniqBy = require('../../uniqBy');

describe('uniqBy', () => {
  it('should deduplicate objects inside an array using the provided key', () => {
    expect(
      uniqBy('id', [
        { id: 2, name: 'Anakin', age: 10 },
        {
          id: 0,
          name: 'Obi-Wan',
          side: 'light',
          age: 25,
        },
        { id: 2, name: 'Darth Vader', side: 'dark' },
      ]),
    ).toEqual([
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
    ]);
  });

  it('should work with multiple duplicated objects', () => {
    expect(
      uniqBy('id', [
        { id: 2, name: 'Anakin', age: 10 },
        {
          id: 0,
          name: 'Dark Maul',
        },
        { id: 2, name: 'Darth Vader', side: 'dark' },
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
      ]),
    ).toEqual([
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Dark Maul',
      },
      {
        id: 1,
        name: 'R2-D2',
      },
    ]);
  });

  it('should work with a different key', () => {
    expect(
      uniqBy('uniqueKey', [
        { uniqueKey: 2, name: 'Anakin', age: 10 },
        {
          uniqueKey: 0,
          name: 'Obi-Wan',
          side: 'light',
          age: 25,
        },
        { uniqueKey: 2, name: 'Darth Vader', side: 'dark' },
      ]),
    ).toEqual([
      { uniqueKey: 2, name: 'Anakin', age: 10 },
      {
        uniqueKey: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
    ]);
  });

  it('should not mutate the array input', () => {
    const arrayInput = [
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      { id: 2, name: 'Darth Vader', side: 'dark' },
    ];

    uniqBy('id', arrayInput);

    expect(arrayInput).toEqual([
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      { id: 2, name: 'Darth Vader', side: 'dark' },
    ]);
  });
});
