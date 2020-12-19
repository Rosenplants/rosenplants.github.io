import fs from 'fs';

const image = document.getElementById('me');

let imgArray = [];

const dir = await fs.promises.opendir('../images')

for await (const dirent of dir) {
    imgArray.push(dirent.name);
}

image.addEventListener('click', () => {
    let newImage = imgArray[Math.floor(Math.random()*imgArray.length)]
    target.src=`resources/images/${newImage}`;
})