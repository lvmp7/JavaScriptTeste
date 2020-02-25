
axios.get('https://api.github.com/users/lvmp7')
.then(function(response){
    console.log(response)
})
.catch(function(erro){
    console.warn(erro);
});
