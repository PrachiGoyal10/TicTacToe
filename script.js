//restart game button
var restart = document.querySelector('#b');


//grab all the squared
var squares= document.querySelectorAll('td');


function clearBoard(){
for (var i =0 ;i< squares.length;i++){
    squares[i].textContent = '';
}
}

restart.addEventListener('click',clearBoard);


function ChangeMarker(){
    if(this.textContent == ''){
        this.textContent = 'X';
        }
    else if(this.textContent == 'X'){
        this.textContent = 'O';
        }
    else{
        this.textContent = '';
        }
}

for (var i =0 ;i< squares.length;i++){
    squares[i].addEventListener('click',ChangeMarker);
}
