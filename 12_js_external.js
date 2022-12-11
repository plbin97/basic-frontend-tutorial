const element = document.getElementById('abc')
element.innerText = 'Hello World'
for (let i = 0; i < 10; i ++) {
    element.innerText = element.innerText + ' ' + i
}
