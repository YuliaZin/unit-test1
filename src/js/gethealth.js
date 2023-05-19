export default function getHealthStatus(hero) {
  const healthStatus = hero.health;

  if (healthStatus > 50) {
    return 'healthy';
  }
  if (healthStatus < 15) {
    return 'critycal';
  }
  return 'wounded';
}
