export function addClass(el, name) {
  if (hasClass(el, name)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(name)
  el.className = newClass.join(' ')
}

export function hasClass(el, name) {
  let reg = new RegExp('(^|\\s)' + name + '(\\s|$)')

  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name

  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
