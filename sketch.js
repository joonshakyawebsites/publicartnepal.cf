let youtubeData;
let countries;
let oneView = (twoView = threeView = fourView = false);
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
  youtube = loadImage("youtube.png");
  poster = loadImage("poster.jpg");
  art1 = loadImage("3.png");
  art2 = loadImage("4.png");
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
  two = trainMap.latLngToPixel(28.2, 84);
  three = trainMap.latLngToPixel(28, 83);
  four = trainMap.latLngToPixel(29.4, 81.2);

  zoom = trainMap.zoom();
  scl = 36; // * sin(frameCount * 0.1);
  // scl = pow(2, zoom) * 0.36; // * sin(frameCount * 0.1);
  image(pointerMap, one.x, one.y, scl, scl);
  image(pointerMap, two.x, two.y, scl, scl);
  image(pointerMap, three.x, three.y, scl, scl);
  image(pointerMap, four.x, four.y, scl, scl);
  if (oneView) {
    rect(one.x, one.y - 150, 360, 240);
    image(poster, one.x, one.y - 150, 340, 220);
  }
  if (twoView) {
    rect(two.x, two.y - 150, 360, 240);
    image(youtube, two.x, two.y - 150, 340, 220);
  }
  if (threeView) {
    rect(three.x, three.y - 150, 360, 240);
    image(art1, three.x, three.y - 150, 340, 220);
  }
  if (fourView) {
    rect(four.x, four.y - 150, 360, 240);
    image(art2, four.x, four.y - 150, 340, 220);
  }
  // ellipse( .2 * scl);
}

function mousePressed() {
  if (
    oneView &&
    mouseX > one.x - 360 / 2 &&
    mouseX < one.x + 360 / 2 &&
    mouseY > one.y - 240 / 2 - 150 &&
    mouseY < one.y + 240 / 2 - 150
  ) {
    window.open('./poster.jpg', '_blank').focus();
    return;
  }
  if (
    twoView &&
    mouseX > two.x - 360 / 2 &&
    mouseX < two.x + 360 / 2 &&
    mouseY > two.y - 240 / 2 - 150 &&
    mouseY < two.y + 240 / 2 - 150
  ) {
    window.open('https://youtu.be/9BcD4INYlxc', '_blank').focus();
    return;
  }
  if (
    mouseX > one.x - scl / 2 &&
    mouseX < one.x + scl / 2 &&
    mouseY > one.y - scl / 2 &&
    mouseY < one.y + scl / 2
  ) {
    oneView = !oneView;
  }
  if (
    mouseX > two.x - scl / 2 &&
    mouseX < two.x + scl / 2 &&
    mouseY > two.y - scl / 2 &&
    mouseY < two.y + scl / 2
  ) {
    twoView = !twoView;
  } else {
    twoView = false;
  }
  if (
    mouseX > three.x - scl / 2 &&
    mouseX < three.x + scl / 2 &&
    mouseY > three.y - scl / 2 &&
    mouseY < three.y + scl / 2
  ) {
    threeView = !threeView;
  } else {
    threeView = false;
  }
  if (
    mouseX > four.x - scl / 2 &&
    mouseX < four.x + scl / 2 &&
    mouseY > four.y - scl / 2 &&
    mouseY < four.y + scl / 2
  ) {
    fourView = !fourView;
  } else {
    fourView = false;
  }
}
