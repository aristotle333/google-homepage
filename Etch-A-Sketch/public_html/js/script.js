$(document).ready(function() {
    createGrid(16, regularHover);
});

// Creates a square grid of size with hoverStyle highlighting
function createGrid(size, hoverStyle) {
    for (i = 0; i < size * size; i++) {
        var row = '<div class="square">'+'</div>';
        $('#wrapper').append(row);
    }
    // Calculate dimensions of the square
    var squareSize = $('#wrapper').width() / size;    
    $('.square').css("height", squareSize + "px");
    $('.square').css("width", squareSize + "px");
    
    hoverStyle();
}

// Clears the grid so that it is not highlighted in any way
function ClearGrid() {
    $('.square').css("background-color", "white");
}

// Removes the grid so that it doesn't exist anymore
function DeleteGrid() {
    $('.square').remove();
}

// Prompts user to enter the size of their new grid and clears the old one
function newGrid(hoverStyle) {
    var size = prompt("Enter a grid size between 0 to 128:");
    if (size >= 0 && size <= 128) {
        DeleteGrid();
        createGrid(size, hoverStyle);
    }
    else {
        alert("Invalid grid size! Please try again");
        newGrid(hoverStyle);
    }
}

// Regular hover style
function regularHover() {
    $('#wrapper > div').hover(function() {
        $(this).css("background-color", "#62000E");
    });
}

// Random colors every time hovering over a square
function randomHover() {
    $('#wrapper > div').hover(function() {
        $(this).css("background-color", randomColor());
    });
}

// Everytime a square is hovered it's we add 10% black
function darkenHover() {
    $('#wrapper > div').hover(function() {
        var currColor = $(this).css("background-color");
        $(this).css("background-color", darkenColor(currColor));
    });
}

// Hovering will make the square to blink for a while and then return to its normal color
function trailHover() {
    $('#wrapper > div').hover(function() {
        $(this).css("opacity", 0.1);
    }, function() {
        $(this).fadeTo(400, 1);
    });
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

function darkenColor(currColor) {
    var rgbColor = currColor.match(/\d+/g);
    var r = Math.floor((parseInt(rgbColor[0]) * 0.9));
    var g = Math.floor((parseInt(rgbColor[1]) * 0.9));
    var b = Math.floor((parseInt(rgbColor[2]) * 0.9));
    return newColor = "rgb(" + r + "," + g + "," + b + ")";
}