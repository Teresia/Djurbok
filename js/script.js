$(".animalCard").click(function(){
    document.getElementById("drums").play();
    setTimeout(function(){ 
     $('#myModal').modal('hide');
     }, 17000);
});





$(".modal").click(function(){
    document.getElementById("drums").pause();
    document.getElementById("drums").currentTime = 0;
    $('#myModal').modal('hide');
});

