function salvarDatos() {
   nombre= document.getElementById("nombre");
   nam=[];
   nam=nombre.value.split(" ");
   nombre1=nam[0];
   nombre2=nam[1];
   nombre3 = nam[2];


    if (nombre1.charCodeAt(0) >= 97 && nombre1.charCodeAt(0) <= 122 || nombre2.charCodeAt(0) >= 97 && nombre2.charCodeAt(0) <= 122 || nombre3.charCodeAt(0) >= 97 && nombre3.charCodeAt(0) <= 122) {

        alert("Debe comenzar con mayuscula");
        return false;
    }

  
return true;
}
