export const formatPrice = (value: number | bigint, currency: any) => new Intl.NumberFormat('en-US', {
  currency,
  minimumFractionDigits: 2,
  style: 'currency',
}).format(value)
  
