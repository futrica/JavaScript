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


         
list =  document.getElementById('wrapper');
imgs = list.getElementsByTagName('img');  
//links = list.getElementsByTagName('a')

//imgs[2].style.opacity = 1;
//document.write(links[1].text)

function troca(num) {	
	if (num == 0) {
		imgs[0].style.opacity = 1;
		imgs[1].style.opacity = 0;
		imgs[2].style.opacity = 0;
		imgs[3].style.opacity = 0;
		imgs[4].style.opacity = 0;
			} else  if (num == 1) {
		imgs[0].style.opacity = 0;
		imgs[1].style.opacity = 1;
		imgs[2].style.opacity = 0;
		imgs[3].style.opacity = 0;
		imgs[4].style.opacity = 0;
			} else  if (num == 2) {
		imgs[0].style.opacity = 0;
		imgs[1].style.opacity = 0;
		imgs[2].style.opacity = 1;
		imgs[3].style.opacity = 0;
		imgs[4].style.opacity = 0;
			} else  if (num == 3) {
		imgs[0].style.opacity = 0;
		imgs[1].style.opacity = 0;
		imgs[2].style.opacity = 0;
		imgs[3].style.opacity = 1;
		imgs[4].style.opacity = 0;
			} else  if (num == 4) {
		imgs[0].style.opacity = 0;
		imgs[1].style.opacity = 0;
		imgs[2].style.opacity = 0;
		imgs[3].style.opacity = 0;
		imgs[4].style.opacity = 1;
			}
}








/* --------------------------------------------------
		INATIVO
-----------------------------------------------------


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

*/
