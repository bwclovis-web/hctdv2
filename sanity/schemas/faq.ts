//File name: faq.ts
//File location: schemas/documents

import { TfiViewListAlt } from "react-icons/tfi"

const faqs =  {
  name: 'faq',
  type: 'object',
  title: 'Frequently asked question',
  icon: TfiViewListAlt,
  fields: [{
    name: 'question',
    type: 'string',
    title: 'Question'
  },
  {
    name: 'answer',
    type: 'array',
    title: 'Answer',
    of: [{
      type: 'block'
    }]
  }]
}
  
export default faqs
  
