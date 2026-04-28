export const TRUST_STATS = {
  yearsGuiding: 8,
  internationalGuests: 438,
  localGuests: 173,
} as const;

/**
 * 2019–2026. Each row: `trips` = international + local that year.
 * **Σ international = 438**, **Σ local = 173** (matches headline stats). 2020 = COVID.
 */
export const TRIPS_BY_YEAR = [
  { year: 2019, trips: 67, international: 45, local: 22 },
  { year: 2020, trips: 0, international: 0, local: 0 },
  { year: 2021, trips: 56, international: 38, local: 18 },
  { year: 2022, trips: 87, international: 62, local: 25 },
  { year: 2023, trips: 108, international: 78, local: 30 },
  { year: 2024, trips: 117, international: 85, local: 32 },
  { year: 2025, trips: 100, international: 72, local: 28 },
  { year: 2026, trips: 76, international: 58, local: 18 },
] as const;

export type ClientRegion = { code: string; flag: string; name: string };

export const CLIENT_REGIONS: readonly ClientRegion[] = [
  { code: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "US", flag: "🇺🇸", name: "United States" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "FR", flag: "🇫🇷", name: "France" },
  { code: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "CN", flag: "🇨🇳", name: "China" },
  { code: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa" },
] as const;
