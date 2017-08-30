import React from 'react'
import styles from './styles'

let cache = {}
const rules = []
let insert = rule => rules.push(rule)

const css = props => {
  const next = {}
  const classNames = []

  for (let key in props) {
    if (styles[key]) {
      classNames.push(key)
      if (cache[key]) continue
      cache[key] = styles[key]
      const rule = createRule(key)
      insert(rule)
      continue
    }
    next[key] = props[key]
  }

  if (props.className) {
    classNames.push(props.className)
  }

  next.className = classNames.join(' ')

  return next
}

const createRule = key => `.${key}{${styles[key]}}`

if (typeof document !== 'undefined') {
  const sheet = document.head.appendChild(
    document.createElement('style')
  ).sheet
  insert = rule => {
    rules.push(rule)
    sheet.insertRule(rule, sheet.cssRules.length)
  }
}

const styled = type => props => React.createElement(type, css(props))

styled.css = () => rules.join('')

export default styled
