const image_input = document.querySelector('#fileTag');
    var uploaded_image = "";

    image_input.addEventListener("change",function(){
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
           uploaded_image = reader.result
           console.log(uploaded_image)
           document.querySelector('#previewImg').style.backgroundImage = `url(${uploaded_image})`
           document.querySelector('#previewImg2').style.backgroundImage = `url(${uploaded_image})`
           document.querySelector('#previewImg3').style.backgroundImage = `url(${uploaded_image})`

        })
        reader.readAsDataURL(image_input.files[0])
    })