
let h1 = document.querySelector('h1')
let h2 = document.querySelectorAll('h2')
let p = document.querySelectorAll('p')
let imgs = document.querySelectorAll('img')
let a = document.querySelectorAll('a')
let size = 100
let dragged = null
let dropped = null

const makeBigger = (event) => {
    event.target.style.fontSize = '6rem'
}

const makeSmaller = (event) => {
    event.target.style.fontSize = '4rem'
}

const funMessage = (event) => {
    if (event.key === "Escape") {
        alert("You don't escape the Fun Bus!")
    }
}

const scaleImg = (event) => {
    event.preventDefault()
    if (event.deltaY < 0)
        if (size < 108)
            event.target.setAttribute("style", `max-width: ${size++}%`)
    if (event.deltaY > 0)
        event.target.setAttribute("style", `max-width: ${size--}%`)
    
}

const hide = (event) => {
    event.target.style.display = 'none'
    setTimeout(() => {
        event.target.style.display = 'unset'}, 700)
}

const changeColor = (event) => {
    let subString = window.getSelection()
    let span = document.createElement('span')
    span.style.color = "green"
    span.textContent = subString.toString()
    let range = subString.getRangeAt(0)
    range.deleteContents()
    range.insertNode(span)
}

const drag = (event) => {
    dragged = event.target.src
}

const dragOver = (event) => {
    event.preventDefault()
    dropped = event.target.src
}

const drop = (event) => {
    event.preventDefault()
    event.target.src = dragged
}

const dragEnd = (event) => {
    event.target.src = dropped
}


h1.addEventListener('mouseover', makeBigger)
h1.addEventListener('mouseleave', makeSmaller)

document.addEventListener('keydown', funMessage)

imgs.forEach(img => img.addEventListener('wheel', scaleImg))

h2.forEach(heading => heading.addEventListener('click', hide))

p.forEach(p => p.addEventListener('dblclick', changeColor))

imgs.forEach(img => img.addEventListener('drag', drag))
imgs.forEach(img => img.addEventListener('dragover', dragOver))
imgs.forEach(img => img.addEventListener('drop', drop))
imgs.forEach(img => img.addEventListener('dragend', dragEnd))

a.forEach(a => a.addEventListener('click', event => event.preventDefault()))
