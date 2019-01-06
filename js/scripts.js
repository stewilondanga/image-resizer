var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const url = document.getElementById('url')
const width = document.getElementById('width')
const height = document.getElementById('height')

url.addEventListener('input', calculate)
width.addEventListener('input', calculate)
height.addEventListener('input', calculate)

/*function calculate(e) {
	const id = url.value.split('/').pop()
	const src = `https://source.unsplash.com/${id}/${width.value}x${height.value}`
	document.querySelector('a').textContent = src
	document.querySelector('a').setAttribute('href', src)
	document.querySelector('img').setAttribute('src', src)
}

calculate();
