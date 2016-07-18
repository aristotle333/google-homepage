$(document).ready(function() {
    createGrid(16);
    regularHover();
});

// Creates a square grid of size
function createGrid(size) {
    for (i = 0; i < size * size; i++) {
        var row = '<div class="square">'+'</div>';
        $('#wrapper').append(row);
    }
    // Calculate dimensions of the square
    var squareSize = $('#wrapper').width() / size;    
    $('.square').css("height", squareSize + "px");
    $('.square').css("width", squareSize + "px");
}

// Regular hover style (Hovering over just gives the squares a darker color)
function regularHover() {
    $('#wrapper > div').hover(function() {
        $(this).css("background-color", "#62000E");
    });
}