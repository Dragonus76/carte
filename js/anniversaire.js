function blink(ob) 
{ 
if (ob.style.visibility == "visible" ) 
{ 
ob.style.visibility = "hidden"; 
} 
else 
{ 
ob.style.visibility = "visible"; 
} 
} 
setInterval("blink(bl)",500); 

var prenom=prompt("Entre ton prénom )")
$(document).ready(function(){


	$('#boutonDemarrage').click(function(){
		$('#boutonSecond').css('visibility','visible');
		$('#fondDroite').css('visibility','visible');
		$('#boutonDemarrage').css('visibility','hidden');
		$('h1').css('font-size','3em');
		$('h1').text('je léve un verre à cette superbe journée !🥂').css('color',' 	fuchsia ');
		$('#son1')[0].play();
	});

$('#boutonSecond').click(function(){
	$('#boutonTrois').css('visibility','visible');
	$('#fondDroite').css('visibility','hidden');
	$('#fondGauche').css('visibility','visible');
	$('#boutonSecond').css('visibility','hidden');
	$('h1').css('font-size','4em').css('color','lime');
	$('h1').text('c\' est le top class 🍸 !');
	$('#son3')[0].play();

});

$('#boutonTrois').click(function(){
	$('h1').text('ce n\'est pas ton anniversaire !😭 ');
	$('h1').css('font-size','3em').css('color','red')


$('#fondDroite').css('visibility','visible');
		$('#fondGauche').css('visibility','visible');
		$('#fond').css('justify-content','center');
		
	//bouton central, avec désactivation du click
		$('#boutonDemarrage').css('visibility','visible').css('background','orange','border-right','#CC5500','border-bottom','#CC5500').off('click');			
		$('#prenom').text('Mais on t\'aime quand même '+prenom+', passe une bonne journée').css('font-size','3em').css('color','blue');
		
	//bouton gauche, avec désactivation du click
		$('#boutonSecond').css('visibility','visible').css('background','PURPLE','border-right','#9400D3','border-bottom','#9400D3').off('click');			
		$('#prenomGauche').text('Joyeux non-Anniversaire !').css('font-size','2em').css('color','yellow');
		
	//bouton gauche, avec désactivation du click
		$('#boutonTrois').css('background','green','border-right','#6B8E23','border-bottom','#6B8E23');			
		$('#prenomDroit').text('ENCORE PLUS DE BRUIT !').css('font-size','2em').css('color','red');
	
	
		
		$('#son01')[0].play();
		$('#son05')[0].play();
		$('#son04')[0].play();
    });
	
}); 