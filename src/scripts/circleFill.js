//Fill circles

window.circleFill = function(index) {
debugger;
  const total = (typeof total) === 'undefined' ? index : total;
  if (index > 0) {
    let currentCircleIndex = Math.abs(index - total);
    $('.skill-circle.fill-' + currentCircleIndex).addClass('filled');
    index--;
    let newIndex = index;
    setTimeout(function(newIndex) {
  		circleFill();
		}, 500);
	}
}
