"use strict"

function getArea(length, height) {
    if (length > 1000 | length < 0 | height > 1000 | height < 0){
        return NaN
    }

    return length * height;
}

function getPerimeter(length, height) {
    if (length > 1000 | length < 0 | height > 1000 | height < 0) {
        return NaN
    }
    
    return 2 * length + 2 * height;
}

if ('undefined' !== typeof module) {
    exports.getArea = getArea;
    exports.getPerimeter = getPerimeter;
}

"-> symbol konusu sorulacak/araştırılacak"