$("#dadosInser").validate({
    debug: true
});
//Apelido cRequired para exigir nome e CPF
$.validator.addMethod("cRequired", $.validator.methods.required,
   "É necessário preencher o campo nome!");
$.validator.addMethod("cpfRequired", $.validator.methods.required,
   "É necessário preencher o campoo CPF!");
//Apelido cMinlength para exigir 14 caracteres no CPF
$.validator.addMethod("cMinlength", $.validator.methods.minlength,
   $.validator.format("O campo CPF deve conter {0} caracteres!"));
//Aplica as regras nos campos que contenham a classe chamada "inserir"
$.validator.addClassRules("inserir", { cRequired: true });
$.validator.addClassRules("inserir2", { cpfRequired: true, cMinlength: 14 });