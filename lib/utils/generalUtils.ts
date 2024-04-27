export const formatFirstName = (name: string | any[]) => {
  const lastLetter = name.slice(-1)
  const pluralName = lastLetter === 's' ? `${name}'` : `${name}'s`
  return pluralName
}
export const slugify = (string: string) => string.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
