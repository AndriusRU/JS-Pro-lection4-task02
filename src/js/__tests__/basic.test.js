import getSortHeroes from '../basic';

const dataListHeroes = [
  {
    name: 'мечник', health: 10,
  },
  {
    name: 'маг', health: 100,
  },
  {
    name: 'лучник', health: 80,
  },
  {
    name: 'гном', health: 10,
  },

];

const dataListCorrect = [
  {
    name: 'маг', health: 100,
  },
  {
    name: 'лучник', health: 80,
  },
  {
    name: 'мечник', health: 10,
  },
  {
    name: 'гном', health: 10,
  },
];

test('test list', () => {
  const result = getSortHeroes(dataListHeroes);
  expect(result).toEqual(dataListCorrect);
});
