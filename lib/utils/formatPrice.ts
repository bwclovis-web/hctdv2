export const formatPrice = (value: number | bigint, currency: any) => new Intl.NumberFormat('en-US', {
  currency,
  minimumFractionDigits: 2,
  style: 'currency',
}).format(value)

export const getPriceByVariantId = (variants: any[], id: any) => {
  const price = variants?.find(item => item.node.id === id)

  return formatPrice(price?.node?.priceV2?.amount, 'USD')
}
  
