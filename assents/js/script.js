const textarea = document.querySelector('textarea');
const tweetar = document.getElementById('buttonId');
const feedTest = document.querySelector('.conteudoPrincipal__Tweet');

// Função para capturar texto do usuário no formulário 

function pegarTweet(event){
    event.preventDefault();
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

// -----

// Método para capturar o clique do usuário no botão do formulário 
tweetar.addEventListener('click', pegarTweet);

// -------


//Função para criar o tweet com o conteúdo capturado  na função anterior e também acrescentar outras informações adicionais como a hora exata do tweet.
function criarTweet(tweetTexto){

    let data = new Date();
    let hora = data.getHours();
    let minutes = data.getMinutes();

    //objects.
    const tweet = {
        nome: "Jackson Douglas",
        foto: "../../assents/img/tweet/photoPerfil.svg",
        username: "@jackson...",
        text: tweetTexto,
        temp: `${hora}:${minutes}`,
        pointBootstrap: "../../assents/img/tweet/dot.svg", //dont
        pontinhos_3: "../../assents/img/tweet/three-dots.svg", //three dots
        comentar: "../../assents/img/tweet/comentar_1.png",
        retweetar: "../../assents/img/tweet/retweet.png",
        curtir: "../../assents/img/tweet/like.png",
        visualizacoes: "../../assents/img/tweet/visualizacoes.png",
        compartilhar: "../../assents/img/tweet/compartilhar.png"
    }

    listarTemplateTweet(tweet);

}

// ----- 


// Função para desmembra as informações preparadas pela função anterior e criar o twitter na tela do usuário.
function listarTemplateTweet(tweet){

    const {nome, foto, username, text, temp, pointBootstrap, pontinhos_3, comentar, retweetar, curtir, visualizacoes, compartilhar} = tweet;

    // ConteudoPrincipal__Tweet -- Criando tags.

    let divPaideTodos = document.createElement('div');
    divPaideTodos.classList.add("conteudoPrincipal__Tweet");
    let divPrincipal = document.createElement('div');
    divPrincipal.classList.add("conteudoPrincipal__photoName");
    let divInterna01 = document.createElement('div');
    let imgFotoPerfil = document.createElement('img'); //Foto perfil
    imgFotoPerfil.classList.add("conteudoPrincipal__fotoPerfil");
    let divInterna02 = document.createElement('div');
    divInterna02.classList.add("conteudoPrincipal__name__Idname");
    let h3NomeUsuario = document.createElement('h3'); //Name
    let pUsername = document.createElement('p'); //Username
    let imgIconPointBootstrap = document.createElement('img'); //Dot
    let spanInterno00 = document.createElement('span'); //Tempo
    let spanInterno01 = document.createElement('span');
    spanInterno01.classList.add("conteudoPrincipal__points");
    let img3pontinhos = document.createElement('img'); // 3 Pontinhos
    
    // ----- 

    let divPrincipal02 = document.createElement('div');
    divPrincipal02.classList.add("conteudoPrincipal__tweetConteudo");
    let pTextArea = document.createElement('p');
    let divInteracoes = document.createElement('div');
    divInteracoes.classList.add("conteudoPrincipal__divInteracoes");
    let divComentar = document.createElement('div');
    let imgComentar = document.createElement('img');
    let divRetweet = document.createElement('div');
    let imgRetweet = document.createElement('img');
    let divCurtir = document.createElement('div');
    let imgCurtir = document.createElement('img');
    let divVisualizacoes = document.createElement('div');
    let imgVisualizacoes = document.createElement('img');
    let divCompartilhar = document.createElement('div');
    let imgCompartilhar = document.createElement('img');


    // ConteudoPrincipal__Tweet -- Criando estrutura interna da div principal.
    divPaideTodos.appendChild(divPrincipal);
    divPrincipal.appendChild(divInterna01); // div interna 01
    imgFotoPerfil.src = foto; 
    divInterna01.appendChild(imgFotoPerfil); //Foto de Perfil.

    // -----

    divPrincipal.appendChild(divInterna02); //Div interna 02
    divInterna02.appendChild(h3NomeUsuario);
    h3NomeUsuario.innerText = nome; //Nome do Usuário.
    divInterna02.appendChild(pUsername);
    pUsername.innerText = `${username}`; //Identificador ID do Usuário
    divInterna02.appendChild(imgIconPointBootstrap);
    imgIconPointBootstrap.src = pointBootstrap; //Ponto Separador
    divInterna02.appendChild(spanInterno00);
    spanInterno00.innerText = temp; //Tempo do post
    
    // Span interno 01
    divPrincipal.appendChild(spanInterno01);
    spanInterno01.appendChild(img3pontinhos);
    img3pontinhos.src = pontinhos_3; // 3 Pontinhos

    // ----- 

    // DIV DE INTERAÇÕES E POSTAGEM DO CONTEÚDO 

    divPaideTodos.appendChild(divPrincipal02);


    divPrincipal02.appendChild(pTextArea);
    pTextArea.innerText = text; // Texto capturado do formulário
    divPrincipal02.appendChild(divInteracoes);
    divInteracoes.appendChild(divComentar);
    divComentar.appendChild(imgComentar);
    imgComentar.src = comentar; //Icon de comentar
    divInteracoes.appendChild(divRetweet);
    divRetweet.appendChild(imgRetweet);
    imgRetweet.src = retweetar; //Icon de retweet
    divInteracoes.appendChild(divCurtir);
    divCurtir.appendChild(imgCurtir);
    imgCurtir.src = curtir; //Icon de curtir
    divInteracoes.appendChild(divVisualizacoes);
    divVisualizacoes.appendChild(imgVisualizacoes);
    imgVisualizacoes.src = visualizacoes; //Icon de visualizacoes
    divInteracoes.appendChild(divCompartilhar);
    divCompartilhar.appendChild(imgCompartilhar);
    imgCompartilhar.src = compartilhar; //Icon de compartilhar

    // END ConteudoPrincipal__Tweet -----

    feedTest.appendChild(divPaideTodos);
    textarea.value = "";
    
}