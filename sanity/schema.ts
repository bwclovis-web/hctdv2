import { type SchemaTypeDefinition } from 'sanity'
import page from './schemas/page'
import navigationSchema from './schemas/navigation/navigation'
import navItemSchema from './schemas/navigation/navItem'
import linkSchema from './schemas/link'
import siteConfigSchema from './schemas/siteConfig'
import heroSchema from './schemas/hero'
import blockContent from './schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ siteConfigSchema, 
    page, 
    navigationSchema, 
    navItemSchema, 
    linkSchema, 
    heroSchema, 
    blockContent ],
}
