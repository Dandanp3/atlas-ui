"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return(
        <Button
        variant='outline'
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative overflow-hidden cursor-pointer">
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180: 0}}
                transition={{ duration: 0.3, ease: "easeInOut"}}
            >
                <Sun/>
                <Moon/>
            </motion.div>
            <span>Alterar Tema</span>
        </Button>
    )

}