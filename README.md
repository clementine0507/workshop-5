# workshop-5
CSV table
## URL
https://clementine0507.github.io/workshop-5/
### Notes
![5b1e86a7934ecb6beeaf4b99f035272](https://github.com/user-attachments/assets/fbc2e3fb-b85a-4317-a836-7b45ab6321d5)

![6d696b6991dd9940c49548f33ec0617](https://github.com/user-attachments/assets/92c8d52b-60e5-44b8-ae6b-d5aad890336e)

Load the image, set the image coordinates and size.

![f82f93f311a87e646137c2f8dac7523](https://github.com/user-attachments/assets/7ed7693c-c006-4238-a14a-091433be0148)

![1cdf743adcd82315613dfe0a8e16493](https://github.com/user-attachments/assets/13886cbb-d57a-4790-81e0-9a2745b2c09e)

![5a273950412dd55826c6482d5bee807](https://github.com/user-attachments/assets/c9f97501-b464-4c39-bfe6-6591f8b46de4)

If want to add more images，fistly load photos from other folders, then remove `weekLabels` and its related variables.

![68f53332cbfa179c1442eb06a914d86](https://github.com/user-attachments/assets/506ddc65-1794-457e-ac96-711874d4a498)

![5f610cef31da8c0201ff2aab813623d](https://github.com/user-attachments/assets/11d38572-beb7-4553-9bb2-9931ec683521)

![21c96f38c3c03a26834e18fdb1a2f2d](https://github.com/user-attachments/assets/06264694-436d-420a-92a6-fd9f365d12cf)

To replace the data in the CSV file with the corresponding images, we need to copy the "apple" section and modify it to create the "banana" section.

![36309ac3e0dcf677d996544f04d5334](https://github.com/user-attachments/assets/86173378-5739-4260-a74a-d226bcf1bf99)

Make the image on a separate line, no larger than the canvas.

#### Processing

1. CVS:the number of times I play different games each week
2. download images in the social media
   
![image](https://github.com/user-attachments/assets/7a63a70d-4ce2-4ae8-8e1a-af1ea24d5da5)

I wrote the first version of the code based on the workshop5.

let table;
let va;
let lol;
let mc;
let pg;

function preload() {
  table = loadTable("workshop5.csv", "csv", "header");
  va = loadImage("image/va.jpg");
  lol = loadImage("image/lol.jpg");
  mc = loadImage("image/mc.jpg");
  pg = loadImage("image/pg.jpg");
}

function setup() {
  createCanvas(400, 400);
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
  }
}

function draw() {
  background(220);
  allMyImages();
}
