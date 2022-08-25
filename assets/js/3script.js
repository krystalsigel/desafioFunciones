  // function pintar(){
        // ele = document.getElementById("ele1")
        // ele.style.backgroundColor = 'yellow'
        // }
        // ele = document.getElementById("ele1")
        // ele.addEventListener("click", pintar);


        ele = document.getElementById("ele1")
        ele.addEventListener("click", function() {
        ele.style.backgroundColor= "yellow";
        });

        function pintar(ele, color='green'){
          ele.style.backgroundColor= color
          ele.style.color= 'black'
        }
        pintar(ele);
        ele.addEventListener("click", function() {
          pintar(ele, "yellow")
        })