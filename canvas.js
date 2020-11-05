function draw() {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')


    let img = new Image()
    img.addEventListener('load', () => {
        ctx.drawImage(img, 0, 0)
    }, false)
    img.src = "img.jpg"

}