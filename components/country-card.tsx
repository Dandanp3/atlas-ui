"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Country } from "@/types/country"
import Link from "next/link"
import { p } from "framer-motion/client"

interface CountryCardProps {
    country: Country
    index: number
}

export function CountryCard({ country, index}: CountryCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
                duration: 0.3,
                delay: index * 0.05,
                layout: { duration: 0.3 }
            }}
        >
            <Link href={`/country/${country.cca3}`}>
                <motion.article
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="group overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-shadow duration-300 border cursor-pointer"
                >
                    <div className="relative h-40 w-full overflow-hidden"> 
                        <Image src={country.flags.svg}
                        alt={country.flags.alt || `Bandeira de ${country.name.common}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"/>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg font-bold mb-3 line-clamp-1 text-balance">
                            {country.name.common}
                        </h2>
                        <div className="space-y-1 text-sm">
                            <p>
                                <span className="font-semibold text-muted-foreground">
                                    população:{" "}
                                </span>
                                <span>{country.population.toLocaleString("pt-BR")}</span>
                            </p>
                            <p>
                                <span className="font-semibold text-muted-foreground">
                                    Região:{" "}
                                </span>
                                <span>{country.region}</span>
                            </p>
                            {country.capital && country.capital[0] && (
                                <p>
                                    <span className="font-semibold text-muted-foreground">
                                        Capital:{" "}
                                    </span>
                                    <span>{country.capital[0]}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </motion.article>
            </Link>
        </motion.div>
    )
}