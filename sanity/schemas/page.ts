//File name: page.ts
//File location: schemas/documents

const page =  {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [{
    name: 'pageTitle',
    title: 'Page Title',
    type: 'string'
  },
  {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'pageTitle',
    },
  },
  {
    name: 'pageHero',
    title: 'Page Hero',
    type: 'hero',
  },
  {
    name: 'heading',
    title: 'First Page Heading',
    type: 'string'
  }, 
  {
    name: 'faqs',
    title: 'Frequently Asked Questions',
    type: 'array',
    of: [{ type: 'faq' }]
  }],
    
  preview: {
    select: {
      title: 'pageTitle',
      author: 'bob',
      media: 'pageHero.heroImage',
    },
  },
}
  
export default page
    
  
