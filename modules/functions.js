// WAP to find the are of circle
// Formula:
// A = pi*r square

function findAreaOfCircle(radius) {
    let pi = 3.14;

    return pi * (radius * radius)
}


function findAreaOfTriangle(base, height) {
    return 0.5 * (base * height)
}


function findAreaOfRectangle(a, b, c) {
    return (a + b + c) / 2
}

module.exports = { findAreaOfCircle, findAreaOfTriangle, findAreaOfRectangle };