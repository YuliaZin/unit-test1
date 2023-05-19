import getHealthStatus from '../gethealth.js';

const heroesList = [
  [{ name: 'Mar', health: 90 }, 'healthy'],
  [{ name: 'Bar', health: 45 }, 'wounded'],
  [{ name: 'Gar', health: 10 }, 'critycal'],
];

const handler = test.each(heroesList);

handler('should show health status for %O', (hero, expected) => {
  const response = getHealthStatus(hero);
  expect(response).toBe(expected);
});
