minhaPromisse = function (){
    return new Promise (function (resolve, reject){
        var xhs = new XMLHttpRequest();

        xhs.open('GET', 'https://api.github.com/users/lvmp7');
        xhs.send(null);

        xhs.onreadystatechange = function (){
            if(xhs.readyState === 4){
                if(xhs.status === 200){
                    resolve(JSON.parse(xhs.responseText));
                    //console.log(JSON.parse(xhs.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    })
}

minhaPromisse()
.then(function(response){
    console.log(response)
})
.catch(function(erro){
    console.warn(erro);
});
