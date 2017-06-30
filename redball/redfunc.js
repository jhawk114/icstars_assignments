var rbW = 100;
var rbH = 112;

function moveUDLR( dir, dist ){
	dist /= 5;
	switch(dir){
		case 'L'://Directions	
			for(i=0;i < 10;i++){				
				if(redball.left - dist < 0){
					redball.left = 0;
					for(i=0;i < 5;i++){
						redball.left += dist;
					}
					break;
				} else {
					redball.left -= dist;
				}
			}			
			break;
		case 'U':
			for(i=0;i < 10;i++){				
				if(redball.top - dist < 50){
					redball.top = 50;
					for(i=0;i < 5;i++){
						redball.top += dist;
					}
					break;
				} else {
					redball.top -= dist;
				}
			}			
			break;
		case 'D':
			for(i=0;i < 10;i++){				
				if(redball.top + dist > window.innerHeight - rbH){
					redball.top = window.innerHeight - rbH;
					for(i=0;i < 5;i++){
						redball.top -= dist;
					}
					break;
				} else {
					redball.top += dist;
				}
			}			
			break;
		case 'R':
			for(i=0;i < 10;i++){				
				if(redball.left + dist > window.innerWidth - rbW){
					redball.left = window.innerWidth - rbW;
					for(i=0;i < 5;i++){
						redball.left -= dist;
					}
					break;
				} else {
					redball.left += dist;
				}
			}			
			break;//Directions END
		case 'UL'://Diagonals
			for(i=0;i < 10;i++){				
				if(redball.left - dist < 0){
					redball.left = 0;
					for(i=0;i < 5;i++){
						redball.left += dist;
					}
					break;
				} else if(redball.top - dist < 50){
					redball.top = 50;
					for(i=0;i < 5;i++){
						redball.top += dist;
					}
					break;
				} else {
					redball.left -= dist / Math.sqrt(2);
					redball.top -= dist / Math.sqrt(2);
				}
			}			
			break;
		case 'UR':
			for(i=0;i < 10;i++){				
				if(redball.left + dist > window.innerWidth - rbW){
					redball.left = window.innerWidth - rbW;
					for(i=0;i < 5;i++){
						redball.left -= dist;
					}
					break;
				} else if(redball.top - dist < 50){
					redball.top = 50;
					for(i=0;i < 5;i++){
						redball.top += dist;
					}
					break;
				} else {
					redball.left += dist / Math.sqrt(2);
					redball.top -= dist / Math.sqrt(2);
				}
			}			
			break;
		case 'DL':
			for(i=0;i < 10;i++){				
				if(redball.left - dist < 0){
					redball.left = 0;
					for(i=0;i < 5;i++){
						redball.left += dist;
					}
					break;
				} else if(redball.top + dist > window.innerHeight - rbH){
					redball.top = window.innerHeight - rbH;
					for(i=0;i < 5;i++){
						redball.top -= dist;
					}
					break;
				} else {
					redball.left -= dist / Math.sqrt(2);
					redball.top += dist / Math.sqrt(2);
				}
			}
			break;				
		case 'DR':
			for(i=0;i < 10;i++){				
				if(redball.left + dist > window.innerWidth - rbW){
					redball.left = window.innerWidth - rbW;
					for(i=0;i < 5;i++){
						redball.left -= dist;
					}
					break;
				} else if(redball.top + dist > window.innerHeight - rbH){
					redball.top = window.innerHeight - rbH;
					for(i=0;i < 5;i++){
						redball.top -= dist;
					}
					break;
				} else {
					redball.left += dist / Math.sqrt(2);
					redball.top += dist / Math.sqrt(2);
				}
			}
			break;//Diagonals END
	}
}

function moveSQ( d ){
	moveUDLR('R', d);
	moveUDLR('D', d);
	moveUDLR('L', d);
	moveUDLR('U', d);
}

function moveTRI( d ){
	moveUDLR('R', d);
	moveUDLR('U', d);
	moveUDLR('DL', d * Math.sqrt(2));
}

function moveOCT( d ){
	moveUDLR('R', d);
	moveUDLR('DR', d * Math.sqrt(2));
	moveUDLR('D', d);
	moveUDLR('DL', d * Math.sqrt(2));
	moveUDLR('L', d);
	moveUDLR('UL', d * Math.sqrt(2));
	moveUDLR('U', d);
	moveUDLR('UR', d * Math.sqrt(2));
}

function moveRB( dir ){
	switch(dir){
	case 'CIRC'://EXTRA CRED
		var xOr = redball.left;
		var yOr = redball.top + 50;
		for (t = -90; t <= 270; t+=1) {
			redball.top = yOr + 50 * Math.sin(t * Math.PI / 180);
			redball.left = xOr + 50 * Math.cos(t * Math.PI / 180);
		}				
		break;
	case 'BOU':
		for (i = 0; i <= 82.8; i+=7.2) {
			redball.top += 6 * 3 * Math.sin(i * Math.PI / 180);
			redball.left += 10 * 3 * Math.cos(i * Math.PI / 180);
		}
		for (i = 90; i <= 262.8; i+=10.8) {
			redball.top -= 4.5 * 3 * Math.sin(i * Math.PI / 180);
			redball.left -= 4.5 * 3 * Math.cos(i * Math.PI / 180);
		}
		for (i = 90; i <= 262.8; i+=14.4) {
			redball.top -= 3 * 3 * Math.sin(i * Math.PI / 180);
			redball.left -= 3 * 3 * Math.cos(i * Math.PI / 180);
		}
		for (i = 90; i <= 262.8; i+=18) {
			redball.top -= 1.5 * 3 * Math.sin(i * Math.PI / 180);
			redball.left -= 1.5 * 3 * Math.cos(i * Math.PI / 180);
		}
		break;
	case 'STAR':
		for (i = 0; i <= 25; i++) {
			redball.left += 3;
		}//From 1
		for (i = 0; i <= 25; i++) {
			redball.top += 3 * Math.sin(18);
			redball.left += 3 * Math.sin(72);
		}//To 2
		for (i = 0; i <= 25; i++) {
			redball.top -= 3 * Math.sin(18);
			redball.left += 3 * Math.sin(72);
		}//From 2
		for (i = 0; i <= 25; i++) {
			redball.left += 3;//Right
		}//To 3
		for (i = 0; i <= 25; i++) {
			redball.top += 3 * Math.sin(72);
			redball.left += 3 * Math.sin(18);
		}//From 3
		for (i = 0; i <= 25; i++) {
			redball.top -= 3 * Math.sin(18);
			redball.left += 3 * Math.sin(72);
		}//To 4
		for (i = 0; i <= 25; i++) {
			redball.top -= 3 * Math.sin(72);
			redball.left += 3 * Math.sin(18);
		}//From 4
		for (i = 0; i <= 25; i++) {
			redball.top += 3 * Math.sin(72);
			redball.left += 3 * Math.sin(18);
		}//To 5
		for (i = 0; i <= 25; i++) {
			redball.top += 3 * Math.sin(18);
			redball.left += 3 * Math.sin(72);
		}//From 5
		for (i = 0; i <= 25; i++) {
			redball.top -= 3 * Math.sin(72);
			redball.left += 3 * Math.sin(18);
		}//To 1
		break;//EXTRA CRED END			
	case 'INFIN'://GDOA 
		for (i = -90; i <= 262.8; i+=7.2) {
			redball.top += 4 * Math.sin(i * Math.PI / 180);
			redball.left += 5 * Math.cos(i * Math.PI / 180);
		}
		for (i = -90; i <= 262.8; i+=7.2) {
			redball.top += 4 * Math.sin(i * Math.PI / 180);
			redball.left -= 5 * Math.cos(i * Math.PI / 180);
		}
		break;
	case 'STAR2': 
		for (i = 0; i <= 50; i++) {
			redball.left += 3 + 3 * Math.sin(72);
		}//Line 1
		for (i = 0; i <= 50; i++) {
			redball.top -= Math.sin(36) * (3 + 3 * Math.sin(72));
			redball.left -= Math.sin(64) * (3 + 3 * Math.sin(72))
		}
		for (i = 0; i <= 50; i++) {
			redball.left -= Math.sin(36) * (3 + 3 * Math.sin(72));
			redball.top -= Math.sin(64) * (3 + 3 * Math.sin(72))
		}
		break;//GDOA END			
	default:
		break;	
	}
}