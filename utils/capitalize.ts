function capitalize(word: string) {
  const [first, ...rest] = word.split('')
  return first.toUpperCase() + rest.join('').toLowerCase()
}

export { capitalize }
