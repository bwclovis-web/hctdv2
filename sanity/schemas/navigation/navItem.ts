//File name: navItem.js
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr"

const navItemSchema =  {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: GrNavigate,
  fields: [{
    name: "text",
    type: "string",
    title: "Navigation Text"
  },
  {
    name: "navigationItemUrl",
    type: "link", 
    title: "Navigation Item URL"
  }]
}

export default navItemSchema
