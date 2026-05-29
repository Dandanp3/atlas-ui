"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Country } from "@/types/country"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"


interface CountryDetailsProps {
  country: Country
  borderCountries: Country[]
}

export function CountryDetails({
  country,
  borderCountries,
}: CountryDetailsProps) {
  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]?.common
    : country.name.common

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A"

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A"

    return (
        <motion.div>
            <motion.div>
                <Link href="/">
                    <Button>
                        <ArrowLeft className="h-4 w-4"/>
                        Voltar
                    </Button>
                </Link>
            </motion.div>

            <div>
                <motion.div>
                    <Image
                    src={country.flags.svg}
                    alt={country.flags.alt || `Bandeira de ${country.name.common}`}
                    />    
                </motion.div>

                <motion.div>
                    <h1>{country.name.common}</h1>
                </motion.div>
            </div>

        </motion.div>

        
    )
}