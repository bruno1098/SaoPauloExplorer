import { WeatherData } from '../types/map';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(lat: number, lon: number): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    
    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      icon: data.weather[0].icon
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return {
      temperature: 22,
      condition: 'Clear',
      icon: '01d'
    };
  }
}