let image = document.getElementById('me');

/*I think there must be a way to sort through the files in the images directory without explicitly listing their names here.
However, I played around a LOT with a node.js solution that, surprise surprise, does not work in browsers.
It is late and I just want a proof of concept to fix the inevitable CSS mess.*/
const imgArray = [
    'Op1.jpg',
    'Op2.jpg',
    'Op3.jpg',
    'Op4.jpg',
    'Sarah_HS_def.jpg'
]

image.addEventListener('click', () => {
    let newImg = imgArray[Math.floor(Math.random() * imgArray.length)];
    image.src="resources/images/" + newImg;
})