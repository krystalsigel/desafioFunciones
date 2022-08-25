
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
   document.getElementById('one').style.backgroundColor='#D8A7EC'
    } else if (event.key === 's') {
       document.getElementById('one').style.backgroundColor='#B6EEF9'
    } else if (event.key === 'd') {
       document.getElementById('one').style.backgroundColor='#777BFA'
    }
    });
    
    let myVar = '';

    let onClick = function() {
        myVar = this.id
    }
    document.getElementById('one').onclick = onClick;
    document.getElementById('two').onclick = onClick;
    document.getElementById('three').onclick = onClick;
    document.getElementById('four').onclick = onClick;
    document.addEventListener('keydown',function (event){
        if(myVar != ''){
            if(event.key ==='a'){
                document.getElementById(myVar).style.backgroundColor = "#D8A7EC";
            }else if(event.key ==='s'){
                document.getElementById(myVar).style.backgroundColor = "#B6EEF9";
            }else if(event.key ==='d'){
                document.getElementById(myVar).style.backgroundColor = "#777BFA";
            }
        }
    }
    );