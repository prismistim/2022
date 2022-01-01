let font
let size = 100

preload = () => {
  font = loadFont('./src/assets/MuseoModerno-ExtraLight.ttf')
}

setup = () => {
  createCanvas(windowWidth, 300, WEBGL)
  textFont(font)
  textSize(size)
  textAlign(CENTER, CENTER)
}

draw = () => {
  background(255)
  fill(200, 180, 100)
  textSize(size)
  textLeading(size)
  rotateX(pRotationX / 80 + 0.4)
  rotateY(-pRotationY / 80 - 0.2)
  stroke(255);
  strokeWeight(3);
  text('20\n22', 0, -30)
}

deviceShaken = () => {
  size += 2
}

windowResized = () => {
  resizeCanvas(windowWidth, 300)
}
