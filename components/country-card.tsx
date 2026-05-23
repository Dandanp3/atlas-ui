"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Country } from "@/types/country"

interface CountryCardProps {
    country: Country
    index: number
}