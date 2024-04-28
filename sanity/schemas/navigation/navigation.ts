//File name: navigation.ts
//File location: schemas/documents

import { GrNavigate } from "react-icons/gr"

const navigationSchema =  {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  fields: [{
    name: "title",
    type: "string",
    title: "Title"
  },
  {
    name: 'navId',
    type: 'slug',
    title: "Navigation Id"
  }, {
    name: "items",
    type: "array",
    title: "Navigation items",
    of: [{ type: "navigationItem" }]
  }]
}

export default navigationSchema
