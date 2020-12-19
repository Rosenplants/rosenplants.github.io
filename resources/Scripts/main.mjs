import * as fs from 'fs';

const image = document.getElementById('me');

let imgArray = [];

async function search(path) {
    const dir = await fs.promises.opendir(path)

    for await (const dirent of dir) {
        imgArray.push(dirent.name);
    }
}

search('../images')

image.addEventListener('click', () => {
    let newImage = imgArray[Math.floor(Math.random()*imgArray.length)]
    target.src=`resources/images/${newImage}`;
})
