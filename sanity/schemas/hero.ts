const heroSchema = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [{
    name: 'eyebrow',
    title: 'Eyebrow Text',
    type: 'string',
  }, 
  {
    name: 'heading',
    title: 'Heading',
    type: 'string',
  },
  {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'image',
    options: {
      hotspot: true,
      metadata: [ 'lqip', 'blurhash' ]
    },
  }]
} 
  
export default heroSchema
