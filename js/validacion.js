function validarAuth() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contrasena").value;
    let err = document.getElementById("error");

    if ((user == null || /^\s+$/.test(user) || user.length == 0) || (pass == null || /^\s+$/.test(pass) || user.length == 0)) {

        document.getElementById("contrasena").focus();
        err.textContent= "No se permiten campos vacios. Los campos usuario y contraseña son obligatorios.";
        err.style.visibility="visible";
        return false;
    }

    return true;
}