import React from 'react'
import tags from 'html-tags'
import tagHOC from 'tag-hoc'
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

const comp = type => props => React.createElement(tagHOC([])(type), css(props))

const Div = comp('div')

const Bass = tags
  .map(tag => comp(tag))
  .reduce((a, b, i) => Object.assign(a, { [tags[i]]: b }), Div)

Bass.css = () => rules.join('')
Bass.component = comp

export default Bass
