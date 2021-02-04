const reset1= document.querySelector(".btn");

const cell = document.querySelectorAll(".cell");

let turn = true;

var p1 = 0;
var p2 = 0;
var tie = 0;


function stats(winner){
	if(winner === 'p1'){
		document.getElementById('p1').innerHTML = ++p1;
	}else if(winner === 'p2'){
		document.getElementById('p2').innerHTML = ++p2;
	}else{
		document.getElementById('tie').innerHTML = ++tie;
	}
}


function winner_name(player){

	if( player === 'x'){
		alert('Player 1 won!!');
		stats('p1');
		Reset();
	}else{
		alert('Player 2 won!!');
		stats('p2');
		Reset();
	}
}


function check_draw(){
	for (const i of cell){
		if (i.classList[1]==='x' || i.classList[1]==='o'){
			continue;
		}else{
			return
		}
	}
	alert('Its a Draw!!');
	stats('p3');
	Reset();
}

function checkStatus(){
	var r11 = cell[0].classList[1];
	var r12 = cell[1].classList[1];
	var r13 = cell[2].classList[1];
	var r21 = cell[3].classList[1];
	var r22 = cell[4].classList[1];
	var r23 = cell[5].classList[1];
	var r31 = cell[6].classList[1];
	var r32 = cell[7].classList[1];
	var r33 = cell[8].classList[1];
	//console.log(r11,r12,r13,r21,r22,r23,r31,r32,r33);

	if (r11 && r11 === r12 && r11 === r13){
		winner_name(r11);
	}else if(r21 && r21 === r22 && r21 === r23){
		winner_name(r21);
	}else if(r31 && r31 === r32 && r32 === r33){
		winner_name(r31);
	}else if(r11 && r11 === r21 && r11 === r31){
		winner_name(r11);
	}else if(r12 && r12 === r22 && r12 === r32){
		winner_name(r12);
	}else if(r13 && r13 === r23 && r13 === r33){
		winner_name(r13);
	}else if(r11 && r11 === r22 && r11 === r33){
		winner_name(r11);
	}else if(r13 && r13 === r22 && r13 === r31 ){
		winner_name(r13);
	}else{
		check_draw();
	}
}

const Reset = (e) => {
	turn = true;
	for (const i of cell){
		i.classList.remove('x');
		i.classList.remove('o');
	}
	//console.log(turn);
};

var cellClick = (e) => {
	const cl = e.target.classList;

	var list = cl[0];

	
	if (cl[1] === 'x' || cl[1]==='o'){
		return;
	}
	if(turn){
		cl.add('x');
		turn = !turn;
		checkStatus();
		
		
	}else {
		cl.add('o');
		turn = !turn;
		checkStatus();
		
	}
	//console.log(list,cl,cl[1]);
};

//console.log(reset1);

reset1.addEventListener('click',Reset);

for (const i of cell){
	i.addEventListener('click',cellClick);
}

