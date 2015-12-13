$(document).ready(function() {
  makeGrid();
  $(':button').click(function() {
    $('.row').remove();
    var gridSize = prompt('Enter size of grid', 'Enter size here');
    makeGrid(gridSize, gridSize);
  });
});

function makeDiv(numCols) {
  var div = '';
  for (j = 0; j < numCols; j++) {
    div = div + '<div class="grid"></div>';
  }

  return div;
}

function makeGrid(numRows, numCols) {
  if (numRows === undefined && numCols === undefined) {
    numRows = 16;
    numCols = 16;
  }

  var div1 = '<div class="row">' + makeDiv(numCols) + '</div>';
  for (i = 0; i < numRows; i++) {
    $('.container').append(div1);
    $('.grid').hover(function() {
      $(this).css('background-color', 'black');
    });
  }

  if (numCols > 16) {
    var limit = numCols * $('.grid').width();
    var currentWidth = 30;
    while (limit > 480) {
      currentWidth = $('.grid').width();
      $('.grid').width(currentWidth - 1);
      limit = numCols * $('.grid').width();
      $('.grid').hover(function() {
        $(this).css('background-color', 'black');
      });
    }
  }

  $('.grid').height($('.grid').width());
  $('.row').height($('.grid').height());

  $('.grid').hover(function() {
    $(this).css('background-color', 'black');
  });
}
