$(document).ready(function() {
	var rbW = 100;
	var rbH = 112;
	var d = "100";
	
	$("#tog").click(function(){
		$("#redball").toggle();
		if($("#redball").is(":visible"))
			$(this).text("Hide");
		else
			$(this).text("Show");
	});
	
	//move( str, str, str )
	var move = function( m, dx, dy ){
		// m = "slope" + or -
		var mx = "", my = "";
		var xinBound = true, yinBound = true;
		//Set mx (x slope)
		if( m.includes("L") ){
			mx = "-";
			xinBound = $("#redball").position().left > 0 + d;
		}
		else if( m.includes("R") ){
			mx = "+";
			xinBound = $("#redball").position().left < window.innerWidth - rbW - d;
		}
		//Set my (y slope)
		if( m.includes("U") ){
			my = "-";
			yinBound = $("#redball").position().top > 0 + d;
		}
		else if( m.includes("D") ){
			my = "+";
			yinBound = $("#redball").position().top < window.innerHeight - rbH - d;
		}
		//Handle bounderies
		if(xinBound && yinBound){
			$("#redball").animate({"left": mx +"="+ dx, "top": my +"="+ dy});
		} else if(xinBound){
			$("#redball").animate({"left": mx +"="+ dx});
		} else if(yinBound){
			$("#redball").animate({"top": my +"="+ dy});
		}
	}
	//UDLR
	$("#L").click(function(){
		move("L", d, "0");
	});
	$("#R").click(function(){
		move("R", d, "0");
	});	
	$("#U").click(function(){
		move("U", "0", d);
	});	
	$("#D").click(function(){
		move("D", "0", d);
	});
	//Diagonals
	$("#UL").click(function(){
		move("UL", d, d);
	});
	$("#UR").click(function(){
		move("UR", d, d);
	});
	$("#DL").click(function(){
		move("DL", d, d);
	});
	$("#DR").click(function(){
		move("DR", d, d);
	});
	//Shapes
	$("#SQ").click(function(){
		move("R", d, "0");
		move("D", "0", d);
		move("L", d, "0");
		move("U", "0", d);
	});
	$("#TRI").click(function(){
		move("UR", d / 2, d / 2 * Math.sqrt(3) );
		move("DR", d / 2, d / 2 * Math.sqrt(3) );
		move("L", d, "0");
	});
	$("#OCT").click(function(){
		move("UR", d / Math.sqrt(2), d / Math.sqrt(2) );
		move("R", d, "0");
		move("DR", d / Math.sqrt(2), d / Math.sqrt(2) );
		move("D", "0", d);
		move("DL", d / Math.sqrt(2), d / Math.sqrt(2) );
		move("L", d, "0");
		move("UL", d / Math.sqrt(2), d / Math.sqrt(2) );
		move("U", "0", d);
	});
});