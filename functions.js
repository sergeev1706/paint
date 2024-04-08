
// очищение холста
function clear() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, width + start * 2, height + start * 2)
}

// отрисовка стен
function paintWalls(arr) {
  for (const wall of arr) {
    ctx.strokeStyle = 'black'
    ctx.strokeRect(wall.xStart, wall.yStart, wall.width, wall.height)
  }
}

// отрисовка временной линии
function paintRedWall(x, y, w, h) {
  ctx.fillStyle = 'red'
  ctx.fillRect(x, y, w, h)
}

// подвинуть временную линию
function moveLine() {
  clear()
  paintWalls(walls)
  paintRedWall(X, Y, WIDTH, HEIGHT)
}

// определить является ли точка стенкой
function findParent(x, y) {
  return walls
    .filter(wall => wall.xStart < x)
    .filter(wall => wall.xStart + wall.width > x)
    .filter(wall => wall.yStart < y)
    .filter(wall => wall.yStart + wall.height > y)
}

// найти начальную точку
function find_x_start(x1, x2, y) {
  const xMin = Math.min(x1, x2)
  return findParent(xMin, y).length === 0 ? xMin : findParent(xMin, y)[0].xFinish
}

// найти конечную точку
function find_x_finish(x1, x2, y) {
  const xMax = Math.max(x1, x2)
  return findParent(xMax, y).length === 0 ? xMax : findParent(xMax, y)[0].xStart
}

// найти начальную точку
function find_y_start(y1, y2, x) {
  const yMin = Math.min(y1, y2)
  return findParent(x, yMin).length === 0 ? yMin : findParent(x, yMin)[0].yFinish
}

// найти конечную точку
function find_y_finish(y1, y2, x) {
  const yMax = Math.max(y1, y2)
  return findParent(x, yMax).length === 0 ? yMax : findParent(x, yMax)[0].yStart
}

// найти расстояние слева
function findLeftDistance(coords) {
  let res = walls
    .filter(e => e.isHorizon === horizon)
    .filter(e => e.xFinish < coords)
    .sort((a, b) => b.xFinish - a.xFinish) // отсортировать ближайшего
  return coords - res[0].xFinish;
}

// найти расстояние справа
function findRightDistance(coords) {
  let res = walls
    .filter(e => e.isHorizon === horizon)
    .filter(e => e.xStart > coords)
    .sort((a, b) => a.xStart - b.xStart) // отсортировать ближайшего
  return res[0].xStart - coords
}

// найти расстояние сверху
function findTopDistance(coords) {
  let res = walls
    .filter(e => e.isHorizon === horizon)
    .filter(e => e.yFinish < coords)
    .sort((a, b) => b.yFinish - a.yFinish) // отсортировать ближайшего
  return coords - res[0].yFinish;
}

// найти расстояние снизу
function findBottomDistance(coords) {
  let res = walls
    .filter(e => e.isHorizon === horizon)
    .filter(e => e.yStart > coords)
    .sort((a, b) => a.yStart - b.yStart) // отсортировать ближайшего
  return res[0].yStart - coords
}

