"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Country } from "@/types/country"

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/">
          <Button variant="outline" className="mb-8 sm:mb-12 shadow-sm gap-2 cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-xl"
        >
          <Image
            src={country.flags.svg}
            alt={country.flags.alt || `Bandeira de ${country.name.common}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-8 text-balance">{country.name.common}</h1>

          <div className="grid gap-8 sm:grid-cols-2 mb-12">
            <div className="space-y-3">
              <DetailItem label="Nome Nativo" value={nativeName} />
              <DetailItem
                label="População"
                value={country.population.toLocaleString("pt-BR")}
              />
              <DetailItem label="Região" value={country.region} />
              <DetailItem
                label="Sub-região"
                value={country.subregion || "N/A"}
              />
              <DetailItem
                label="Capital"
                value={country.capital?.join(", ") || "N/A"}
              />
            </div>
            <div className="space-y-3">
              <DetailItem label="Idiomas" value={languages} />
              <DetailItem label="Moedas" value={currencies} />
            </div>
          </div>

          {borderCountries.length > 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="font-semibold mb-4">Países Fronteiriços:</h2>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((border, index) => (
                  <motion.div
                    key={border.cca3}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                  >
                    <Link href={`/country/${border.cca3}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      >
                        {border.name.common}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm">
      <span className="font-semibold">{label}: </span>
      <span className="text-muted-foreground">{value}</span>
    </p>
  )
}
