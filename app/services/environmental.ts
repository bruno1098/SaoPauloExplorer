export async function getEnvironmentalData(locationId: string) {
  // Simulated environmental data (CO2 levels, air quality, etc.)
  const baseYear = 2000;
  const years = Array.from({ length: 24 }, (_, i) => baseYear + i);
  
  return years.map(year => ({
    year,
    value: 350 + Math.pow(1.015, year - baseYear) * 10 + Math.random() * 5
  }));
}