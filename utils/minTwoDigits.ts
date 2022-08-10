function addZeroAhead(number: number) {
  if (Math.sign(number) === -1) return `-0${Math.abs(number)}`
  return `0${number}`
}

function minTwoDigits(number: number) {
  if (number < 10 && number > -10) return addZeroAhead(number)
  return number
}

export { addZeroAhead, minTwoDigits }
