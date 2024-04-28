import { type SchemaTypeDefinition } from 'sanity'
import page from './schemas/page'
import navigationSchema from './schemas/navigation/navigation'
import navItemSchema from './schemas/navigation/navItem'
import linkSchema from './schemas/link'
import siteConfigSchema from './schemas/siteConfig'
import heroSchema from './schemas/hero'
import blockContent from './schemas/blockContent'
import featuredArtist from './schemas/featuredArtist'
import artistEntry from './schemas/artistEntry'
import socialMediaLinks from './schemas/socialMedia'
import socialMediaTypes from './schemas/socialMediaTypes'
import configuredLink from './schemas/configuredLink'
import dyeSchema from './schemas/dyeSchema'
import faqSchema from './schemas/faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ siteConfigSchema, 
    page, 
    navigationSchema, 
    navItemSchema, 
    linkSchema, 
    heroSchema, 
    blockContent,
    featuredArtist,
    artistEntry,
    socialMediaLinks,
    socialMediaTypes,
    configuredLink,
    dyeSchema,
    faqSchema],
}
