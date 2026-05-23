"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { CountryGrid } from "@/components/country-grid"
import { Country } from "@/types/country"
import { getAllCountries } from "@/lib/api"
import { count } from "console"

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")


  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true)
        const data = await getAllCountries()
        setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
        setError(null)
      } catch (err) {
        setError("Não foi possível carregar os países. Tente novamente mais tarde.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchCountries()
  }, [])


  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesRegion = !region || country.region === region
      return matchesSearch && matchesRegion
    })
  }, [countries, search, region])


  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5}}
      >
        <h1>Explore o Mundo</h1>
        <p>Descubra informações sobre {countries.length > 0 ? countries.length : "250+"} países</p>
      </motion.div>

      <CountryGrid
      countries={filteredCountries}
      isLoading={isLoading}
      error={error}/>
    </div>
  )
}
