function validarCPF(){
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.length !== 11 || /^(\d)\1+$/.teste(cpf)){
        return false;
    }

    let soma = 0;
    let resto;

    // Validação do 1º DV

    for(let i=1; i<=9; i++){
        soma += parseInt(cpf.substring(i-1,i)) * (11 - i)
        
    }

    resto=(soma*10) % 11;

    if(resto === 10 || resto === 11){
        resto = 0;
    }
}