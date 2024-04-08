

let widthInp = document.querySelector('#width')
let heightInp = document.querySelector('#height')
let baseInp = document.querySelector('#base')
let partitionInp = document.querySelector('#partition')
let startButton = document.querySelector('#start')

let canvas = document.querySelector('#canvas')
canvas.classList.add('disable')
let ctx = canvas.getContext('2d')

const start = 20
let width      // ширина дома
let height     // длина дома
let base       // толщина наружней стены
let partition  // толщина перегородки

let walls = [] // все стены
let wallsNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

document.querySelector('#start').addEventListener('click', () => {

  width = Number(widthInp.value)
  height = Number(heightInp.value)
  base = Number(baseInp.value)
  partition = Number(partitionInp.value)

  if (width > 0 && height > 0) {

    canvas.classList.remove('disable')
    widthInp.classList.add('disable')
    heightInp.classList.add('disable')
    startButton.classList.add('disable')

    baseInp.classList.add('disable')
    partitionInp.classList.add('disable')
  }

  canvas.width = width + start * 2
  canvas.height = height + start * 2
})
