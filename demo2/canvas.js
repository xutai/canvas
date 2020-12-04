
// test

// const canvas = document.getElementById('myCanvas')
// const ctx = canvas.getContext('2d')

// ctx.rect(0, 0, 100, 100);
// ctx.fill();

// // const myImageData = ctx.createImageData(100, 100)
// const myImageData = ctx.getImageData(0, 0, 100, 100)
// console.log("myImageData", myImageData)
// ctx.putImageData(myImageData, 0, 0)

// const imgUrl = canvas.toDataURL('image/png')
// console.log("imgUrl", imgUrl)



// let img = document.createElement('img')
// img.width = 100
// img.height = 100
// img.src = imgUrl
// document.body.appendChild(img)





function draw() {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')

    
    ctx.fillStyle =  'grey'
    ctx.fillRect(0, 0, 200, 200)

}

draw()




