import double from './functions.js'

console.log(double(10))

const root = document.querySelector('#root')
root.innerHTML = `<p>${double(10)}</p>`