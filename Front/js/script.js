document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("enviarButton")
    .addEventListener("click", function () {
      validarRegistro();
    });
});

function validarRegistro() {
  // Obtener valores de los campos
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const aceptarTerminos = document.getElementById("aceptarTerminos").checked;

  // Expresión regular para validar el formato del correo electrónico
  const correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar la contraseña
  const passwordRegExp =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  // Validar el formato del correo electrónico
  if (!correoRegExp.test(correo)) {
    alert("Formato de correo incorrecto");
  }

  if (!passwordRegExp.test(password)) {
    alert(
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial."
    );
  }

  if (!aceptarTerminos) {
    alert("Debes aceptar los términos y condiciones para registrarte");
    
  }

  if (
    correoRegExp.test(correo) &&
    passwordRegExp.test(password) &&
    aceptarTerminos
  ) {
    alert("Registro Exitoso\nUsuario: "+correo+"\nPassword: "+password);
  }
}
