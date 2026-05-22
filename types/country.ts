export interface Country {
    name: {
        common: string
        official: string
        nativeName?: {
            [key: string]: {
                official: string
                common: string
            }
        }
    }
    cca3: string
    capital?: string[]
    region: string
    subregion?: string
    population: number
    flags: {
        svg: string
        png: string
        alt?: string
    }
    language?: {
        [key: string]: string
    }
    currencies?: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    borders?: string[]
}