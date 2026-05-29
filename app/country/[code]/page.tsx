"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { Country } from "@/types/country"
import { getCountryByCode, getCountriesByCodes } from "@/lib/api"
import { CountryDetails } from "@/components/country-details"
import { CountryDetailsSkeleton } from "@/components/country-details-skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CountryPageProps {
  params: Promise<{ code: string }>
}

export default function CountryPage({ params }: CountryPageProps) {
  const { code } = use(params)
  const router = useRouter()
  const [country, setCountry] = useState<Country | null>(null)
  const [borderCountries, setBorderCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCountry() {
      try {
        setIsLoading(true)
        setError(null)
        
        const countryData = await getCountryByCode(code)
        setCountry(countryData)

        if (countryData.borders && countryData.borders.length > 0) {
          const borders = await getCountriesByCodes(countryData.borders)
          setBorderCountries(borders)
        } else {
          setBorderCountries([])
        }
      } catch (err) {
        setError("País não encontrado ou erro ao carregar dados.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountry()
  }, [code])

  if (isLoading) {
    return <CountryDetailsSkeleton />
  }

  if (error || !country) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <AlertCircle className="h-16 w-16 text-destructive mb-4" />
        <h3 className="text-xl font-semibold mb-2">Erro</h3>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Link href="/">
          <Button>Voltar para a página inicial</Button>
        </Link>
      </motion.div>
    )
  }

  return <CountryDetails country={country} borderCountries={borderCountries} />
}
