function toggleVisibility(event){
    const board1 = document.querySelector('.board1');
    const board2 = document.querySelector('.board2');
    const id1 = document.getElementById('1');
    const id2 = document.getElementById('2');
    const id3 = document.getElementById('3');
    const id4 = document.getElementById('4');
    
    if(id1==board1){
    id1.classList.remove('board1');
    id1.classList.add('board2');

    id2.classList.remove('board2');
    id2.classList.add('board1');

    id4.classList.remove('board1');
    id4.classList.add('board2');

    id3.classList.remove('board2');
    id3.classList.add('board1');
    }else{
        id1.classList.remove('board2');
        id1.classList.add('board1');
    
        id2.classList.remove('board1');
        id2.classList.add('board2');
    
        id4.classList.remove('board2');
        id4.classList.add('board1');
    
        id3.classList.remove('board1');
        id3.classList.add('board2');
        }
}

const boardToggle = document.querySelector('.board');
boardToggle.addEventListener('click', toggleVisibility);