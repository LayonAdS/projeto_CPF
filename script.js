function validarCPF(){
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.length !== 11 || /^(\d)\1+$/.teste(cpf)){
        return false;
    }
    
}