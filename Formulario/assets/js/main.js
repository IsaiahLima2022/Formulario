class Formuloria {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.event();
  }
  event() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
     const validField = this.FieldAreValid(); // campo são valido // campo valido
     const validPassword = this.validArePassword();


    if(validField && validPassword) {
      alert("formulário enviado");
      this.form.submit();
    } 

  }
  alidArePassword() {
    let valid = true;

    const password = this.form.querySelector(".senha");
    const repeatPassword = this.form.querySelector(".repetir-senha");

    if(password.value !== repeatPassword.value) {
      valid = false;
      this.createErro(password, "Campos senha e repetir senha precisar ser iguais");
      this.createErro(repeatPassword, "Campos senha e repetir senha precisar ser iguais");
    }
    if(password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createErro(password, "Senha precisar estar entre 6 ou 12 caracteres");
    }
    return valid;
  }

  fieldAreValid() {
    let valid = true;
    
    for(let errorText of this.form.document.querySelectorAll(".error-text")){
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".validar")) {
      const label = field.previousElementSibling.innerHTML;
      if (!field.value) {
        this.createErro(field, `Campo ${label} não pode estar em banco`);
        valid = false;
      }
      if(field.classList.contains("cpf")) {
        if(!this.ValidaCPF(field)) valid = false;
      }
      if(field.classList.contains("usuario")) {
        if(!this.ValidaCPF(field)) valid = false;
      }
    }

  }
  validUsuario() {
   const usuario = field.value;
   let valid = true;
   if(usuario.length < 3 || usuario.length > 5 ) {
     this.createErro(field, "Usuário precisa ter entre 3 e 12 caracteres.");
      valid = false;
   }

   if(usuario.match(/^[a-zA-ZO-9]+$/g)) {
    this.createErro(field, "Nome de usuário precisar conter apenas letras e números.");
     valid = false;
  }
   return valid;
  }
  ValidaCPF(field) {
    const cpf = new ValidaCPF(field.value);

    if(!cpf.valid()) {
      this.createErro(field, "CPF inválido.");
      return false;
    }
  }

  createErro(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const f = new Formuloria();
// console.log(f);
