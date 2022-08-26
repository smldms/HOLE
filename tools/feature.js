//////////***BASIC FEATURES***//////////
let PHI = 1.61803398875
let format = {
    n: fxrand(),
    ww: 1,
    hh: 1,
    name: ''
}

if (format.n < 0.33) {
    format.ww = PHI
    format.hh = 1
    format.name = "LANDSCAPE"

} else if (format.n < 0.66) {
    format.ww = 1
    format.hh = PHI
    format.name = "PORTRAIT"

} else {
    format.ww = 1
    format.hh = 1
    format.name = "SQUARE"
}

////////////////////////CASES
let chooser = {
    n: fxrand(),
    val: 0
}

if (chooser.n < 0.33) {
    chooser.val = 2
}

else if (chooser.n < 0.33) {
    chooser.val = 1
}
else {
    chooser.val = 0
}

/////////////////////////HOLE SIZE
let holy = {
    n: fxrand(),
    name: ""
}

if (holy.n < 0.2) {
    holy.name = "XS"
    holy.val = fxrandBetween(9, 10)
} else if (holy.n < 0.4) {
    holy.name = "S"
    holy.val = fxrandBetween(6, 8)
} else if (holy.n < 0.6) {
    holy.name = "M"
    holy.val = fxrandBetween(4, 6)
} else if (holy.n < 0.8) {
    holy.name = "L"
    holy.val = fxrandBetween(4, 3)
} else {
    holy.name = "XL"
    holy.val = fxrandBetween(2, 3)
}

//////////////////TILT BABY
// let tilt = {
//     n: fxrand(),
//     name: ""
// }

// if (tilt.n < 0.02) {
//     tilt.name = "YES"
//     tilt.val = -10
// } else if (holy.n < 0.04) {
//     tilt.name = "YES"
//     tilt.val = 10
// } else if (holy.n < 0.06) {
//     tilt.name = "YES"
//     tilt.val = -20
// } else if (holy.n < 0.08) {
//     tilt.name = "YES"
//     tilt.val = 20
// } else {
//     tilt.name = "NO"
//     tilt.val = 0
// }

/////////////////////////OFFSET ADD
let offsetAdd = {
    n: fxrand(),
    name: ""
}

if (offsetAdd.n < 0.25) {
    offsetAdd.name = "A"
    offsetAdd.val = 0.01
} else if (offsetAdd.n < 0.5) {
    offsetAdd.name = "B"
    offsetAdd.val = 0.05
} else if (offsetAdd.n < 0.75) {
    offsetAdd.name = "C"
    offsetAdd.val = 0.1
} else {
    offsetAdd.name = "D"
    offsetAdd.val = 0.25
}


/////////////////////////YOFF ADD
let yoffAdd = {
    n: fxrand(),
    name: ""
}

if (yoffAdd.n < 0.25) {
    yoffAdd.name = "A"
    yoffAdd.val = 0.01
} else if (yoffAdd.n < 0.5) {
    yoffAdd.name = "B"
    yoffAdd.val = 0.05
} else if (yoffAdd.n < 0.75) {
    yoffAdd.name = "C"
    yoffAdd.val = 0.1
} else {
    yoffAdd.name = "D"
    yoffAdd.val = 0.25
}

////////////////////////BLENDMODE
let blender = {
    n: fxrand(),
    name: ""
}

if (blender.n < 0.11) {
    blender.name = "DIFFERENCE"
} else if (blender.n < 0.22) {
    blender.name = "SOFT_LIGHT"

} else if (blender.n < 0.33) {
    blender.name = "HARD_LIGHT"
    blender.val = 0.1
} else {
    blender.name = "BLEND"
}

//////////FRAME COLOR

let fcol = {
    n: fxrand(),
    name: "",
    val: 0
}

if (fcol.n < 0.5) {
    fcol.val = 255
    fcol.name = "WHITE"
}
else {
    fcol.val = 0
    fcol.name = "BLACK"
}