
///  №1 Function Declaration

function areaRectangle(width, height) {
    return  width * height
}

const result1 = areaRectangle(5, 10); 
console.log("Declaration Area of Rectangle:", result1);

/// №2 Function Expression

const newareaRectangle = function (width, height) {
    return width * height
}

const result2 = newareaRectangle(7, 9); 
console.log("Expression Area of Rectangle:", result2);


/// №3 Arrow Function

const arrowAreaRectangle = (width, height) => width * height;


const result3 = arrowAreaRectangle(12, 3);
console.log("Arrow Area of Rectangle:", result3); 
