let menuVisible = false;
//Mostrar/Ocultar
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }

}
function seleccionar(){
    //Ocultar en selección
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function enviarCorreo(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
    Email.send({
        SecureToken: "tu_secure_token",
        To: "matiasgiron7@gmail.com",
        From: document.getElementById("email").value,
        Subject: "Nuevo mensaje de formulario",
        Body:
        "name: " + document.getElementById("name").value + "<br>" +
        "email: " + document.getElementById("email").value + "<br>" +
        "message: " + document.getElementById("message").value,
    }).then(function (response) {
        if (response === "OK") {
        alert("El mensaje ha sido enviado correctamente.");
        } else {
        alert("Hubo un error al enviar el mensaje.");
    }
    });
}