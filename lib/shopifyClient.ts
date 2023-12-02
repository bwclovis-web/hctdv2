import Client  from 'shopify-buy'

export const shopClient = Client.buildClient({
  domain: "happycattiedye.myshopify.com",
  storefrontAccessToken: "93566804420962bfb63be95b27723094",
  apiVersion: '2023-10'
})
