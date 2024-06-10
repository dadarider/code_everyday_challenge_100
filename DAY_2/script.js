
const grow = document.getElementById('grow')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cercles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > cercles.length) {
    currentActive = cercles.length

  }
  console.log(currentActive)
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  cercles.forEach((cercle, idx) => {
    if (idx < currentActive) {
      cercle.classList.add('active')

    } else {
      cercle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')

  grow.style.width = (actives.length - 1) / (cercles.length - 1) * 100 + '%'




  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === cercles.length) {
    next.disabled = true
  }
  else {
    prev.disabled = false
    next.disabled = false
  }
}