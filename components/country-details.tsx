"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Country } from "@/types/country"
import { Button } from "./ui/button"

interface CountryDetailsProps {
    country: Country
    borderCountries: Country[]
}

export function CountryDetails({
    country,
    borderCountries,
} CountryDetailsProps) {
    const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]?.common
    : country.name.common

    return (
        <motion.div>

        </motion.div>
    )
}