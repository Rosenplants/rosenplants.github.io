const fs = require('fs');

const image = document.getElementById('me');

let imgArray = [];

const dir = fs.promises.opendir('../images')

for (const dirent of dir) {
    imgArray.push(dirent.name);
}

image.addEventListener('click', () => {
    let newImage = imgArray[Math.floor(Math.random()*imgArray.length)]
    target.src=`resources/images/${newImage}`;
})
