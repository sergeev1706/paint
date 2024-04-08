document.addEventListener('keydown', e => {
  // console.log(e.code);

  if (e.code === 'Enter') {

    leftDistance.classList.add('disable')
    rightDistance.classList.add('disable')
    topDistance.classList.add('disable')
    bottomDistance.classList.add('disable')

    walls.push({
      xStart: X,
      xFinish: X + WIDTH,
      yStart: Y,
      yFinish: Y + HEIGHT,
      thickness: Math.min(WIDTH, HEIGHT),
      length: Math.max(WIDTH, HEIGHT),
      width: WIDTH,
      height: HEIGHT,
      isHorizon: horizon,
      name: wallsNames[walls.length],
      type: 'partition'
    })
    clear()
    paintWalls(walls)
  }
})