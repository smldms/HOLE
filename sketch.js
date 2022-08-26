////////////////INFO & FEATURES
let myTitle = "H.Ø.L.Ξ";
let present = '<h2>' + myTitle + '</h2><h3>by smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.08"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
    "Format": format.name,
    "Hole Size": holy.name,
    "Frame Color Size": fcol.name,
    "Param 1": offsetAdd.name,
    "Param 2": yoffAdd.name,
    "Param 3": blender.name,
    "Param 4": chooser.val,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
let globalW = window.innerWidth;
let globalH = window.innerHeight;
let globalSize = 2048;
let cnv;
let pD = 1;
let gen;

let x = 0;
let y = 0;
let offset = fxrand();
let yoff = fxrand();
let zone;
let choice;

function setup() {
    randomSeed(seed);
    noiseSeed(seed);
    cnv = createCanvas(globalSize * format.ww, globalSize * format.hh);
    cnv.parent('fullScreen');
    background(10);
    rectMode(CENTER)
    radialGradientFill(width / 2, height / 2, height * 2, width / 2, height / 2, 0, color(25), color(0))
    rect(width / 2, height / 2, width, height)
    zone = height / holy.val
    blendMode(eval(blender.name))
    choice = chooser.val;
}

function draw() {
    let sizer = map(noise(offset), 0, 1, height / 250, height / 25)
    let yY = map(noise(yoff), 0, 1, -zone / 2, zone / 2)
    fill(360)
    if (x < width / 2) {
        for (let y = 0; y < height * 1.1; y += 25) {
            let distance = dist(x, y, width / 2, height / 2)
            if (distance > zone) {
                dropShad(0, 10, 10, 0, fxrandBetween(100, 255))
                switch (choice) {
                    case 0:
                        rect(x, y + yY, sizer);
                        push()
                        translate(width, height)
                        scale(-1)
                        rect(x, y + yY, sizer);
                        pop();
                        break;

                    case 1:
                        ellipse(x, y + yY, sizer);
                        push()
                        translate(width, height)
                        scale(-1)
                        ellipse(x, y + yY, sizer);
                        pop();
                        break;

                    case 2:
                        stroke(255)
                        beginShape(LINES)
                        vertex(x, y + yY)
                        vertex(x, y - yY)
                        endShape()
                        push()
                        translate(width, height)
                        scale(-1)
                        stroke(255)
                        beginShape(LINES)
                        vertex(x, y + yY)
                        vertex(x, y - yY)
                        endShape()
                        pop()
                        break;
                }

            }
        }
        x++;
        offset += offsetAdd.val;
        yoff += yoffAdd.val;
    } else {
        push()
        grainy(15)
        blendMode(BLEND)
        myFrame(width / 2, height / 2, 25, width, height, color(fcol.val))
        pop()
        noLoop()
        fxpreview()
        // saver()
        // timer()
    }
}