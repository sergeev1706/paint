
let x1, x2, y1, y2
let X, Y, WIDTH, HEIGHT // по этим переменным отрисовывается временная перегородка
let direction, horizon // направление движения мыши и вертикаль
let wall

canvas.addEventListener('mousedown', e => {
  x1 = e.clientX, y1 = e.clientY
})

canvas.addEventListener('mouseup', e => {
  x2 = e.clientX, y2 = e.clientY

  Math.abs(x1 - x2) > Math.abs(y1 - y2) ? horizon = true : horizon = false
  horizon ? (x1 < x2 ? direction = true : direction = false) : (y1 < y2 ? direction = true : direction = false)

  if (horizon) {
    X = find_x_start(x1, x2, y1)
    Y = y1
    WIDTH = find_x_finish(x1, x2, y1) - find_x_start(x1, x2, y1)
    HEIGHT = partition
  } else {
    X = x1
    Y = find_y_start(y1, y2, x1)
    WIDTH = partition
    HEIGHT = find_y_finish(y1, y2, x1) - find_y_start(y1, y2, x1)
  }

  paintRedWall(X, Y, WIDTH, HEIGHT)
})
