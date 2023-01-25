// Add spaces to totals numbers e.g. 12 000
export function totalFormat(total) {
  const formatEngValue = new Intl.NumberFormat('fr', {
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  })
  return formatEngValue.format(total)
}

// Return RegExp for strings to futher assert
export function valueRegExp(value) {
  return new RegExp(value.replaceAll(/\s/g, '\\s'))
}

// Remove white spaces from string like in 123 000 000
export function removeWhiteSpaces(value: string) {
  return value.replace(/\s/g, '')
}

export function removeWhiteSpacesReplaceAll(value: string) {
  return value.replaceAll(/\s{2,}/g, ' ').trim()
}

// Select random element from an array
export function selectRandom(options: any[]) {
  const selected = options[Math.floor(Math.random() * options.length)]
  return selected
}

export function parseFormatedNumber(value: string) {
  return parseFloat(removeWhiteSpaces(value))
}

// For assertions of big int number that may have rounding error
export function isCloseTo(value, target, epsilon = 2) {
  return Math.abs(value - target) <= epsilon
}

// Nov 14, 2022
export function currentDateFormat() {
  const locale = 'en-us'
  const d = new Date()
  const day = d.getDate()
  const month = d.toLocaleString(locale, { month: 'short' })
  const year = d.getFullYear()
  return `${month} ${day}, ${year}`
}

export function roundNearest10(num) {
  return Math.round(num * 10) / 10
}
