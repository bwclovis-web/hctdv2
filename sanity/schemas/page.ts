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
    name: 'heading',
    title: 'First Page Heading',
    type: 'string'
  }],
    
  preview: {
    select: {
      title: 'pageTitle',
      author: 'author.name',
      media: 'pageHero.heroImage',
    },
    prepare(selection: { author: any }) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
  
export default page
    
  
