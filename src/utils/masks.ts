
/**
 * Returns  the value formatted in the desired currency
 * @param value
 * @param currency
 * @default "BRL"
 */
export function currencyMask(value: number, currency: string = 'BRL'): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(value);
}

/**
 * Returns  the date formatted
 * @param date
 */
export function localeDateFormat(date: string | Date, locale: string = 'pt-BR'): string {
  return new Intl.DateTimeFormat(locale).format(
    typeof date === 'string' ? new Date(date) : date
  );
}