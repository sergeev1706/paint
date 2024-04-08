let leftDistance = document.querySelector('#leftDistance')
let rightDistance = document.querySelector('#rightDistance')
let topDistance = document.querySelector('#topDistance')
let bottomDistance = document.querySelector('#bottomDistance')

document.addEventListener('keydown', e => {
  // console.log(e.code);

  if (!horizon) { // если стена вертикальная

    if (e.code === 'ArrowRight') {
      bottomDistance.classList.add('disable')
      leftDistance.classList.add('disable')
      topDistance.classList.add('disable')

      rightDistance.classList.remove('disable')
      rightDistance.textContent = `rightDistance: ${findRightDistance(X)} / ${findLeftDistance(X)}`
      X += 1
      moveLine()
    }

    if (e.code === 'ArrowLeft') {
      bottomDistance.classList.add('disable')
      rightDistance.classList.add('disable')
      topDistance.classList.add('disable')

      leftDistance.classList.remove('disable')
      leftDistance.textContent = `leftDistance: ${findLeftDistance(X)} / ${findRightDistance(X)}`
      X -= 1
      moveLine()
    }

  } else { // если стена горизонтальная
    if (e.code === 'ArrowDown') {
      rightDistance.classList.add('disable')
      leftDistance.classList.add('disable')
      topDistance.classList.add('disable')

      bottomDistance.classList.remove('disable')
      bottomDistance.textContent = `bottomDistance: ${findBottomDistance(Y)} / ${findTopDistance(Y)}`
      Y += 1
      moveLine()
    }

    if (e.code === 'ArrowUp') {
      bottomDistance.classList.add('disable')
      rightDistance.classList.add('disable')
      leftDistance.classList.add('disable')

      topDistance.classList.remove('disable')
      topDistance.textContent = `topDistance: ${findTopDistance(Y)} / ${findBottomDistance(Y)}`
      Y -= 1
      moveLine()
    }
  }

  if (e.code === 'KeyW') {
    console.log(walls);
  }

})