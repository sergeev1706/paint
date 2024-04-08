
document.querySelector('#start').addEventListener('click', () => {

  createInitWalls(start, start, width, base, true)
  createInitWalls(start, start + height - base, width, base, true)
  createInitWalls(start, start + base, base, height - base * 2, false)
  createInitWalls(width + start - base, start + base, base, height - base * 2, false)
})

function createInitWalls(x, y, width, height, isHorizon) {
  ctx.strokeStyle = 'black'
  ctx.strokeRect(x, y, width, height)
  walls.push({
    type: 'base',
    xStart: x,
    xFinish: x + width,
    yStart: y,
    yFinish: y + height,
    width: width,
    height: height,
    isHorizon: isHorizon,
    name: wallsNames[walls.length],
  })
}