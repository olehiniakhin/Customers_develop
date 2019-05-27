import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  const prefixedLabel = label[0].toLocaleUpperCase() + label.slice(1)

  acc[`max${prefixedLabel}`] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  acc[`min${prefixedLabel}`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export {
  media
}
