//para proteger nuestro codifgo usamospatron modular... 
//todo lo que va dentro de las llaves de    ( ()=>{aqui} ) es privado, es decir esta protegido

//para utilizar elementos desde fuera se asigna el patron modular a una constante
const modulo_figuras = (
    () => {

        //'use strict' sirve para que obliqgemos al navegador a nio ejecutarse si hay errores, ej: no colocar let antes de variable, no eprmite acceder a funciones desde fuera...
        'use strict'

        //donde ira la respuesta... 
        let respuesta = document.getElementById('idResultado');

        //cuadrado... 
        let lado_cuadrado = document.getElementById('id_lado_cuadrado');

        //perimetro
        let btn_perimetro_cuadrado = document.getElementById('id_btn_perimetro_cuadrado').onclick = () => {
            if (Object.is((lado_cuadrado.value), "")) {
                alert("El valor ingresado no es valido...");
            }
            else {
                let cuadrado_perimetro = Number(lado_cuadrado.value) * 4;
                respuesta.innerHTML = `El perímetro del cuadrado es: ${cuadrado_perimetro} cm`;
            }
        };

        //area
        let btn_area_cuadrado = document.getElementById('id_btn_area_cuadrado').onclick = () => {
            let cuadrado_area = Number(lado_cuadrado.value) ** 2;
            if (Object.is((lado_cuadrado.value), "")) {
                alert("El valor ingresado no es valido...");
            }
            else {
                let cuadrado_perimetro = Number(lado_cuadrado.value) * 4;
                respuesta.innerHTML = `El área del cuadrado es: ${cuadrado_area} cm² `;
            }
        }

        //triangulo...
        let lado1_triangulo = document.getElementById('id_lado1_triangulo');
        let lado2_triangulo = document.getElementById('id_lado2_triangulo');
        let lado3_triangulo = document.getElementById('id_lado3_triangulo');

        //perimetro
        let btn_perimetro_triangulo = document.getElementById('id_btn_perimetro_triangulo').onclick = () => {
            if (Object.is((lado1_triangulo).value, "") || Object.is((lado2_triangulo).value, "") || Object.is((lado3_triangulo).value, "")) {
                alert("Uno de los lados ingresados no es correcto...");
            }
            else {
                let triangulo_perimetro = Number(lado1_triangulo.value) + Number(lado2_triangulo.value) + Number(lado3_triangulo.value)
                respuesta.innerHTML = `El perímetro del triángulo es: ${triangulo_perimetro} cm `
            }
        }

        //area
        let base = document.getElementById('id_base_triangulo');
        let altura = document.getElementById('id_altura_triangulo');

        let btn_area_triangulo = document.getElementById('id_btn_area_triangulo').onclick = () => {
            if (Object.is((base.value), "") || Object.is((altura.value), "")) {
                alert("Uno de los lados ingresados no es correcto...");
            }
            else {
                let triangulo_area = Number(base.value) * Number(altura.value) / 2;

                respuesta.innerHTML = `El área del triángulo es: ${triangulo_area} cm² `
            }
        }


        //circulo
        let radio = document.getElementById('id_radio_circulo');

        //diametro
        let diametro = document.getElementById('id_btn_diametro').onclick = () => {
            if (Object.is((radio.value), "")) {
                alert("Uno de los lados ingresados no es correcto...");
            }
            else {
                let circulo_diametro = 2 * Number(radio.value);

                respuesta.innerHTML = `El diámetro del circulo es: ${circulo_diametro} cm² `
            }
        }
        //perimetro 2 * pi * r (diametro * pi)
        let perimetro = document.getElementById('id_btn_perimetro').onclick = () => {
            if (Object.is((radio.value), "")) {
                alert("Uno de los lados ingresados no es correcto...");
            }
            else {
                let circulo_perimetro = 2 * Number(radio.value) * Math.PI;

                respuesta.innerHTML = `El perímetro del circulo es: ${circulo_perimetro} cm `
            }
        }


        //otra forma de crear eventos es con addEventListener recibe dos aprametros, el primero el evento en este caso click y el segundo la function... 
        //area pi * r **2 
        let area = document.getElementById('id_btn_area').addEventListener("click", () => {
            if(Object.is(radio,"")){
                alert("Uno o mas valores ingresados son incorrectos...");
            }
            else{
                let circulo_area = Math.PI * (Number(radio.value) ** 2);

                respuesta.innerHTML = `El área del circulo es: ${circulo_area} cm² `
            }
        });


        //aca va lo que deseamos compartir fuera del modulo... 
        return {
            //podemos acceder al elemento respuesta con el nombre cpq, bpc btn_perimetro...
            cpq: respuesta.innerHTML,
            bpc: btn_perimetro_cuadrado,
            mssg: "El resto son valores privados... xd"
        }

    }
    
)();




