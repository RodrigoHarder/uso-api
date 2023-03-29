async function buscaEndereco(cep){
    var mensagemErro=document.getElementById('erro')
    mensagemErro.innerHTML="";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error ('CEP não existente!')
        }
        
        var cidade=document.getElementById('cidade');
        var logradouro=document.getElementById('endereco');
        var estado=document.getElementById('estado');
        var bairro=document.getElementById('bairro');

        cidade.value=consultaCepConvertida.localidade;
        logradouro.value=consultaCepConvertida.logradouro;
        estado.value=consultaCepConvertida.uf;
        bairro.value=consultaCepConvertida.bairro;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }catch(erro){
        console.log(erro);
        mensagemErro.innerHTML=`<p class="mensagem-erro">CEP inválido. Tente novamente!</p>`
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", ()=>buscaEndereco(cep.value));



//USANDO O THEN:
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('Esse CEP não existe!')
//     }else{
//         console.log(r)
//     }
//     })
// .catch(erro => console.log(erro))
// .finally(() => console.log('Processamento concluído!'));
