const modulo_figuras=(()=>{"use strict";let e=document.getElementById("idResultado"),l=document.getElementById("id_lado_cuadrado"),o=document.getElementById("id_btn_perimetro_cuadrado").onclick=()=>{if(Object.is(l.value,""))alert("El valor ingresado no es valido...");else{let o=4*Number(l.value);e.innerHTML=`El per\xedmetro del cuadrado es: ${o} cm`}};document.getElementById("id_btn_area_cuadrado").onclick=()=>{let o=Number(l.value)**2;Object.is(l.value,"")?alert("El valor ingresado no es valido..."):(l.value,e.innerHTML=`El \xe1rea del cuadrado es: ${o} cm\xb2 `)};let i=document.getElementById("id_lado1_triangulo"),t=document.getElementById("id_lado2_triangulo"),n=document.getElementById("id_lado3_triangulo");document.getElementById("id_btn_perimetro_triangulo").onclick=()=>{if(Object.is(i.value,"")||Object.is(t.value,"")||Object.is(n.value,""))alert("Uno de los lados ingresados no es correcto...");else{let l=Number(i.value)+Number(t.value)+Number(n.value);e.innerHTML=`El per\xedmetro del tri\xe1ngulo es: ${l} cm `}};let a=document.getElementById("id_base_triangulo"),d=document.getElementById("id_altura_triangulo");document.getElementById("id_btn_area_triangulo").onclick=()=>{if(Object.is(a.value,"")||Object.is(d.value,""))alert("Uno de los lados ingresados no es correcto...");else{let l=Number(a.value)*Number(d.value)/2;e.innerHTML=`El \xe1rea del tri\xe1ngulo es: ${l} cm\xb2 `}};let r=document.getElementById("id_radio_circulo");return document.getElementById("id_btn_diametro").onclick=()=>{if(Object.is(r.value,""))alert("Uno de los lados ingresados no es correcto...");else{let l=2*Number(r.value);e.innerHTML=`El di\xe1metro del circulo es: ${l} cm\xb2 `}},document.getElementById("id_btn_perimetro").onclick=()=>{if(Object.is(r.value,""))alert("Uno de los lados ingresados no es correcto...");else{let l=2*Number(r.value)*Math.PI;e.innerHTML=`El per\xedmetro del circulo es: ${l} cm `}},document.getElementById("id_btn_area").addEventListener("click",()=>{if(Object.is(r,""))alert("Uno o mas valores ingresados son incorrectos...");else{let l=Math.PI*Number(r.value)**2;e.innerHTML=`El \xe1rea del circulo es: ${l} cm\xb2 `}}),{cpq:e.innerHTML,bpc:o,mssg:"El resto son valores privados... xd"}})();