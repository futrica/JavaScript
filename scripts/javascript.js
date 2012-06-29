/* __________________________ Treinamento JavaScript __________________________

    acabei de estudar o básico de Javascript e montei 
    esse "lindo" código abaixo para fixar o que aprendi ...

    aprendi: 
        - atribuições
        - vetores 
        - funções
        - manipular HTML - getElement

    proximos passos: 
        - usar looping
        - usar if
        - passar funções com parametros
        - criar novos elemtentos HTML com Javascript
        - etc .
        
__________________________ Treinamento JavaScript __________________________ */
         

img_aparece = new Array();
link_clicado = new Array();

img_aparece[0] = document.getElementById("img_1").style;
img_aparece[1] = document.getElementById("img_2").style;
img_aparece[2] = document.getElementById("img_3").style;
img_aparece[3] = document.getElementById("img_4").style;
img_aparece[4] = document.getElementById("img_5").style;



link_clicado[0] = document.getElementById("link_1").text;
link_clicado[1] = document.getElementById("link_2").text;
link_clicado[2] = document.getElementById("link_3").text;
link_clicado[3] = document.getElementById("link_4").text;
link_clicado[4] = document.getElementById("link_5").text;



function executaOnclick0(){ 
     img_aparece[0].opacity = 1;
     img_aparece[1].opacity = 0;
     img_aparece[2].opacity = 0;
     img_aparece[3].opacity = 0;
     img_aparece[4].opacity = 0;
}

function executaOnclick1(){ 
     img_aparece[0].opacity = 0;
     img_aparece[1].opacity = 1;
     img_aparece[2].opacity = 0;
     img_aparece[3].opacity = 0;
     img_aparece[4].opacity = 0;
}

function executaOnclick2(){ 
     img_aparece[0].opacity = 0;
     img_aparece[1].opacity = 0;
     img_aparece[2].opacity = 1;
     img_aparece[3].opacity = 0;
     img_aparece[4].opacity = 0;
}

function executaOnclick3(){ 
     img_aparece[0].opacity = 0;
     img_aparece[1].opacity = 0;
     img_aparece[2].opacity = 0;
     img_aparece[3].opacity = 1;
     img_aparece[4].opacity = 0;
}

function executaOnclick4(){ 
     img_aparece[0].opacity = 0;
     img_aparece[1].opacity = 0;
     img_aparece[2].opacity = 0;
     img_aparece[3].opacity = 0;
     img_aparece[4].opacity = 1;
}
