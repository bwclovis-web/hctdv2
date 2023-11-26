const siteConfigSchema = {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  fields: [{
    name: 'title',
    type: 'string',
    title: 'Site title',
  },
  {
    title: 'URL',
    name: 'url',
    type: 'url',
    description: 'The main site url. Used to create canonical url',
  },
  {
    name: 'frontpage',
    type: 'reference',
    description: 'Choose page to be the frontpage',
    to: { type: 'page' },
  },
  {
    title: 'Main Navigation',
    name: 'mainNav',
    description: 'Select pages for the top menu',
    type: 'array',
    of: [{
      type: 'reference',
      to: [{ type: 'page' }],
    },]
  },
  {
    title: 'Social navigation',
    name: 'socialNav',
    description: 'Select menu for social navigation',
    type: 'reference',
    to: { type: 'navigation' },
  },],
}

export default siteConfigSchema
