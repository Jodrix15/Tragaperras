function restart(){
    if(parseInt(document.getElementById("acumulado").innerHTML) >1){
        document.getElementById("acumulado").innerHTML = parseInt(document.getElementById("acumulado").innerHTML - 2)

        var intervalo = setInterval(() => cambiarImagen(document.getElementById("img1")), 200);
        var intervalo2 = setInterval(() => cambiarImagen(document.getElementById("img2")), 200);
        var intervalo3 = setInterval(() => cambiarImagen(document.getElementById("img3")), 200);
        var img1;
        var img2;
        var img3;

        setTimeout(() => {
            clearInterval(intervalo)

            setTimeout(() => {
                clearInterval(intervalo2)
                setTimeout(() => {
                    clearInterval(intervalo3)
                    img1 = document.getElementById("img1").getAttribute("src")
                    img2 = document.getElementById("img2").getAttribute("src")
                    img3 = document.getElementById("img3").getAttribute("src")
                    
                    win(img1, img2, img3)
    
                }, 800);

            }, 400);
            
            
        }, 2000)
        
        

    }else{
        alert("No tienes suficiente dinero")
    }
    
}

function win(img1, img2, img3){
    var contador = 0
    alert("entro win")
    if(img1 == img2 && img2 == img3){
        alert("FELCIDADES HAS GANADO EL GRAN PREMIO")
        var cantidad = parseInt(document.getElementById("acumulado").innerHTML)
        var intervalo = setInterval(()=>{
            cantidad += 20
            contador += 1
            document.getElementById("acumulado").innerHTML = cantidad
            if(contador == 10){
                clearInterval(intervalo)
            }
        },2000)
    }   
}

function suerte(id){
    var img1 = document.getElementById("img1").getAttribute("src")
    var img2 = document.getElementById("img2").getAttribute("src")
    var img3 = document.getElementById("img3").getAttribute("src")
    var newImg;

    if(img1 == img2 && img2 != img3){
        
        win(img1, img2, probarSuerte(id, "suerte_3", document.getElementById("img3")))

    }else if(img1 == img3 && img2 != img3){
        
        win(img1,probarSuerte(id, "suerte_2", document.getElementById("img2")), img3)
    } 
    else if(img2 == img3 && img1 != img2){
        
        win(probarSuerte(id ,"suerte_1", document.getElementById("img1")), img2, img3)
    
    }else{
        alert("Solo se puede usar si tienes dos imágenes iguales")
    }

}

function probarSuerte(id, boton, img){
    var nameImg = img.getAttribute("src")
    if(id == boton){
        if(parseInt(document.getElementById("acumulado").innerHTML) >1){
            document.getElementById("acumulado").innerHTML = parseInt(document.getElementById("acumulado").innerHTML - 2)

        }else{
            alert("No tienes suficiente dinero")
        }

        var intervalo = setInterval(()=>{cambiarImagen(img)}, 200)
        setTimeout(() =>{
            clearInterval(intervalo)
            nameImg = document.getElementById(id).getAttribute("src")
            alert(nameImg)
            return nameImg
        }, 2000)
        
    }else{
        alert("OJO que esta imagen te coincide con otra")
    }

    return nameImg
}

function cambiarImagen(img){
    var random = Math.floor(Math.random() * 9) + 1
    img.setAttribute("src", "/imagenes/"+random+".png")

}

function acumulado(){
    var acu = document.getElementById("acumulado").innerHTML
    var cantidad = document.getElementById("cantidad_monedas").value

    var intAcu = parseInt(acu)
    var nuevoAcumulado = intAcu + parseInt(cantidad)

    document.getElementById("acumulado").innerHTML = nuevoAcumulado

}