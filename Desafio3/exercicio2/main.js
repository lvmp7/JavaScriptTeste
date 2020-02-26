var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul')
var repos = [];

function renderListRepos(){
    listElement.innerHTML = '';

    for(repo of repos){
        var linha = document.createElement('li');
        var textoLinha = document.createTextNode(repo);
        linha.appendChild(textoLinha);
        listElement.appendChild(linha);
    }
}

renderListRepos();

function getRepos(){
    var user = inputElement.value;
    var url = 'https://api.github.com/users/'+user+'/repos'
    repos = [];
    axios.get(url)    
    .then(function(response){
        for(repo of response.data){
            repos.push(repo.name);
        }        
        renderListRepos();
    })
    .catch(function(erro){
        console.warn(erro);
    });
}

buttonElement.onclick = getRepos;
