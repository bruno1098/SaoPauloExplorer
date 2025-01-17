export async function getHistoricalData(locationId: string, type: 'climate' | 'population') {
  // Simulated historical data
  const baseYear = 1970;
  const years = Array.from({ length: 50 }, (_, i) => baseYear + i);
  
  switch (type) {
    case 'climate':
      return years.map(year => ({
        year,
        value: 20 + Math.sin((year - baseYear) / 10) * 2 + Math.random() * 0.5
      }));
    case 'population':
      return years.map(year => ({
        year,
        value: Math.floor(1000000 * Math.pow(1.02, year - baseYear))
      }));
    default:
      return [];
  }
}