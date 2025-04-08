let imagen

function preload() {
  // put preload code here
  imagen = loadImage("./images/diamond.jpg")
}

function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  cubo3D(0, 0, 0, 150)
}

function cubo3D (x, y, z, t){
  //Textura
  textureMode(NORMAL)
  texture(imagen)

  push()
  translate(x, y, z)
  
  //Carra abajo
  beginShape()
  vertex(-t, -t, -t,0, 0)
  vertex(t, -t, -t, 1, 0)
  vertex(t, t, -t, 1, 1)
  vertex(-t, t, -t, 0, 1)
  vertex(-t, -t, -t,0, 0)
  endShape()

  //Carra arriba
  beginShape()
  vertex(-t, -t, t, 0, 0)
  vertex(-t, t, t, 0, 1)
  vertex(t, t, t, 1, 1)
  vertex(t, -t, t, 1, 0)
  vertex(-t, -t, t, 0, 0)
  endShape()

  //Carra derecha
  beginShape()
  vertex(t, -t, -t, 0, 0)
  vertex(t, -t, t, 0, 1)
  vertex(t, t, t, 1, 1)
  vertex(t, t, -t, 1, 0)
  vertex(t, -t, -t, 0, 0)
  endShape()

  //Carra izquierda
  beginShape()
  vertex(-t, -t, -t, 0, 0)
  vertex(-t, t, -t, 0, 1)
  vertex(-t, t, t, 1, 1)
  vertex(-t, -t, t, 1, 0)
  vertex(-t, -t, -t, 0, 0)
  endShape()

  // Cara delante
  beginShape()
  vertex(-t, -t, t, 0, 0) // Esquina inferior izquierda
  vertex(t, -t, t, 1, 0)  // Esquina inferior derecha
  vertex(t, t, t, 1, 1)   // Esquina superior derecha
  vertex(-t, t, t, 0, 1)  // Esquina superior izquierda
  endShape()

  //Carra detras
  beginShape()
  vertex(-t, -t, -t, 0, 0)
  vertex(-t, -t, t, 0, 1)
  vertex(t, -t, t, 1, 1)
  vertex(t, -t, -t, 1, 0)
  vertex(-t, -t, -t, 0, 0)
  endShape()


  pop()
}
