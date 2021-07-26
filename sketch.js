let youtubeData;
let countries;
let oneView = false;
const mappa = new Mappa("Leaflet");
let trainMap;
let canvas;
let one, two, three, four, scl;
let data = [];

const options = {
  lat: 27.7090319,
  lng: 85.2911132,
  zoom: 7,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
};

function preload() {
  pointerMap = loadImage("map-pointer.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  trainMap = mappa.tileMap(options);
  trainMap.overlay(canvas);
  imageMode(CENTER);
  rectMode(CENTER);
  fill(255);
  noStroke();
}

function draw() {
  clear();
  one = trainMap.latLngToPixel(27.7090319, 85.2911132);
  two = trainMap.latLngToPixel(27.7090319, 85.2911132);
  three = trainMap.latLngToPixel(27.7090319, 85.2911132);
  four = trainMap.latLngToPixel(27.7090319, 85.2911132);

  zoom = trainMap.zoom();
  scl = pow(2, zoom) * 0.36; // * sin(frameCount * 0.1);
  image(pointerMap, one.x, one.y, scl, scl);
  if (oneView) {
    rect(one.x, one.y - 150, 360, 240);
  }
  // ellipse( .2 * scl);
}

function mousePressed() {
  if (
    mouseX > one.x - scl / 2 &&
    mouseY < one.y + scl / 2 &&
    mouseY > one.y - scl / 2 &&
    mouseY < one.y + scl / 2
  ) {
    oneView = !oneView;
  } else {
    oneView = false;
  }
}
