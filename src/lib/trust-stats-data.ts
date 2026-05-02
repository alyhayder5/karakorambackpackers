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

/** ISO 3166-1 alpha-2 — used for reliable flag images (emoji flags break on many Windows setups). */
export type ClientRegion = { code: string; name: string };

export const CLIENT_REGIONS: readonly ClientRegion[] = [
  { code: "PK", name: "Pakistan" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "AE", name: "UAE" },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "NL", name: "Netherlands" },
  { code: "TR", name: "Turkey" },
  { code: "CH", name: "Switzerland" },
  { code: "NO", name: "Norway" },
  { code: "ZA", name: "South Africa" },
] as const;
