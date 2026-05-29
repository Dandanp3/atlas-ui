import { Country } from "@/types/country"

const BASE_URL = "https://restcountries.com/v3.1"

export async function getAllCountries(): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/all?fields=name,cca3,capital,region,subregion,population,flags,languages,currencies,borders`)
  
  if (!response.ok) {
    throw new Error("Failed to fetch countries")
  }
  
  return response.json()
}

export async function getCountryByCode(code: string): Promise<Country> {
  const response = await fetch(`${BASE_URL}/alpha/${code}?fields=name,cca3,capital,region,subregion,population,flags,languages,currencies,borders`)
  
  if (!response.ok) {
    throw new Error("Failed to fetch country")
  }
  
  return response.json()
}

export async function getCountriesByCodes(codes: string[]): Promise<Country[]> {
  if (codes.length === 0) return []
  
  const response = await fetch(`${BASE_URL}/alpha?codes=${codes.join(",")}`)
  
  if (!response.ok) {
    throw new Error("Failed to fetch border countries")
  }
  
  return response.json()
}
