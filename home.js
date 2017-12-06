var load;

function loading(){
	load=setTimeout(show,1000);
}


function newhome(){
		document.body.style.backgroundImage = "url('nhomebg.jpg')";
		document.getElementById('mypic').style.display='none';
		document.getElementById('navbar').style.display='none';
		
		
		document.getElementById('clktext').innerHTML= 'Hi... I am SAUMYA'

		document.getElementById('clktext').style.fontSize="8vh";
		document.getElementById('clktext').style.width="40%";
		document.getElementById('clktext').style.marginTop="20%";
		document.getElementById('clktext').style.color="#000000";
		document.getElementById('clktext').style.marginLeft="40%";
		document.getElementById('clktext').style.marginRight="22%";
		document.getElementById('clktext').style.marginTop="20%";
		document.getElementById('clktext').style.marginBottom="25%";
 	    setTimeout(function(){
   	    window.location.href = 'about.html';
   	 }, 1500);
}



function show(){
	document.getElementById('loader').style.display='none';
	document.getElementById('homepage').style.display='block';
}