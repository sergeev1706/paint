document.addEventListener('keydown', e => {

  if (e.code === 'KeyZ') {
    walls.pop()
    clear()
    paintWalls(walls)
  }

})