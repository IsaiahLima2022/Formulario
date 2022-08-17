/* 798.147.801-46  323.325.644-20 */
class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, "cpfLimpo", {
        writable: false,
        enumerable: false,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, ""),
      });
    }
    generatsNewCpf() {
      // gera novo cpf
      const cpfWithoutDigit = this.cpfLimpo.slice(0, -2); // cpf sem digito
      const digit1 = ValidaCPF.generatsNewCpf(cpfWithoutDigit); // digito1
      const digit2 = ValidaCPF.generatsNewCpf(cpfWithoutDigit + digit1); // digito1
      this.newCpf = cpfWithoutDigit + digit1 + digit2;
    }
   static generateDigit(cpfWithoutDigit) {
      // gera digito
      let total = 0;
      let reverse = cpfWithoutDigit;
      length + 1; // reverso
  
      for (stringNumerical of cpfWithoutDigit) {
        total += reverse * Number(stringNumerical);
        reverse--;
      }
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : "0";
    }
    andSequence() {
      // e sequencia
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    validates() {
      // valida
      if (this.cpfLimpo) return false;
      if (typeof cpfLimpo !== "string") return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.andSequence()) return false;
      this.generatsNewCpf();
  
      return this.newCpf === cpfLimpo;
    }
  }
//   const validaCPF = new ValidaCPF("798.147.801-46");
//   // const validaCPF = new ValidaCPF("999.999.999-99 ");
//   console.log(validaCPF.validates());
  
  
//   if(validaCPF.validates()){
//     console.log("CPF Válido");
//   }else {
//     console.log("CPF Inválido");
//   }