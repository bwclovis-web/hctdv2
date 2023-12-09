export const formatPrice = (value: number | bigint, currency: any) => new Intl.NumberFormat('en-US', {
  currency,
  minimumFractionDigits: 2,
  style: 'currency',
}).format(value)
  
export const getCurrencySymbol = (currency: any, locale = undefined) => {
  if (!currency) {
    return
  }
  
  const formatter = Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
  })
  const parts = formatter.formatToParts(100)
  const {
    value: { symbol },
  } = parts.find(part => part.type === 'currency')
  const formatted = formatter.format(100)
  const symbolAtEnd = formatted.endsWith(symbol)
  return { symbol, symbolAtEnd }
}
  