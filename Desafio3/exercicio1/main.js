function checaidade (idade){
    return new Promise (function (resolve, reject){
        
        if (idade > 18){
            setTimeout(2000);
            resolve( 'Maior de 18');
        }else{
            reject('menor de 18');
        }
    });
}

checaidade(20)
.then(function (response) {
    console.log(response)
})
.catch(function(erro){
    console.warn(erro);
});