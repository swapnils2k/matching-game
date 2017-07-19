numberOfFaces=5;
var theLeftSide = document.getElementById("leftSide");
function generateFaces() {
	var theLeftSide = document.getElementById("leftSide");
	for(i=1;i<=numberOfFaces;i++){
	var top_position=0;
	var left_position=0;
	image=document.createElement("img");
	image.src="http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
	top_position=random(0,400);
	left_position=random(0,400);
	image.style.position="absolute";
	theLeftSide.appendChild(image);
	image.style.top=top_position+"px";
	image.style.left=left_position+"px";
	}
	var theRightSide = document.getElementById("rightSide");
	leftSideImages = document.getElementById("leftSide").cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);

	theLeftSide.lastChild.onclick=function nextLevel(event){
		event.stopPropagation();
		numberOfFaces+=5;
		while(theLeftSide.firstChild){
			theLeftSide.removeChild(theLeftSide.firstChild);
		}
		while(theRightSide.firstChild){
			theRightSide.removeChild(theRightSide.firstChild);
		}
		if(numberOfFaces==50){
			alert("YOU WON!!!!!");
		}
		else generateFaces();
	};

	var theBody = document.getElementsByTagName("body")[0];
		theBody.onclick = function gameOver() {
		alert("Game Over!");
		var theLeftSide = document.getElementById("leftSide");
		theBody.onclick=null;
		theLeftSide.lastChild.onclick=null;
	};
}


function random(min,max) {
	a=Math.floor(Math.random() * (max - min) + min);
	return a;
}
