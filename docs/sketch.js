let font
let size = 100

let permissionGranted = false

preload = () => {
  font = loadFont('./src/assets/MuseoModerno-ExtraLight.ttf')
}

setup = () => {
  createCanvas(windowWidth, 300, WEBGL)
  textFont(font)
  textSize(size)
  textAlign(CENTER, CENTER)

  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        let button = createButton("click to allow access to sensors")
        button.style("font-size", "24px")
        button.center()
        button.mousePressed( requestAccess )
        throw error
      })
      .then(() => {
        permissionGranted = true
      })
  } else {
    permissionGranted = true
  }
}

draw = () => {
  if (!permissionGranted) {
    return
  }

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

requestAccess = () => {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
  .catch(console.error);
  
  this.remove();
}

