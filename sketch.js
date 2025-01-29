let table;
let va, lol, mc, pg;

function preload() {
  table = loadTable("workshop5.csv", "csv", "header");
  va = loadImage("images/va.jpg");
  lol = loadImage("images/lol.jpg");
  mc = loadImage("images/mc.jpg");
  pg = loadImage("images/pg.jpg");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function allMyImages() {
  let xPos = 30;
  let yPos = 50;
  for (let x = 0; x < table.getRowCount(); x++) {
    let row = table.getRow(x);
    let countVa = row.get("va");
    if (countVa > 0) {
      for (let y = 0; y < countVa; y++) {
        image(va, xPos, yPos, 40, 40);
        xPos += 20;
        if (xPos > 370) {
          yPos += 30;
          xPos = 30;
        }
      }
    }
    let countLol = row.get("lol");
    if (countLol > 0) {
      for (let y = 0; y < countLol; y++) {
        image(lol, xPos, yPos, 40, 40);
        xPos += 20;
        if (xPos > 370) {
          yPos += 30;
          xPos = 30;
        }
      }
    }
    let countMc = row.get("mc");
    if (countMc > 0) {
      for (let y = 0; y < countMc; y++) {
        image(mc, xPos, yPos, 40, 40);
        xPos += 20;
        if (xPos > 370) {
          yPos += 30;
          xPos = 30;
        }
      }
    }
    let countPg = row.get("pg");
    if (countPg > 0) {
      for (let y = 0; y < countPg; y++) {
        image(pg, xPos, yPos, 40, 40);
        xPos += 20;
        if (xPos > 370) {
          yPos += 30;
          xPos = 30;
        }
      }
    }
    yPos+=60;
    xPos=30;
  }
}

function draw() {
  background(220);
  allMyImages();
}