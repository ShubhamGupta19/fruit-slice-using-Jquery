var play=false; 
var score;
var lives;
var i;
var step;
var fruits=['pine','grapes','simple-apple','watermelon'];
//click on start reset button
$(function(){ 
    
  $("#startreset").click(function(){
      //we are playoing
      
      if(play==true){
         
        location.reload();
          
          
      }
      else{
          play=true;
          score=0;  
          $("#scorevalue").html(score);
          $("#lives").show();
          lives=3;
          
          addheart();
           $("#startreset").html("Reset");
          startAct();
          $("#gameover").hide();
          
          
      }
      
  });   






         //no
             //change button text to reset game 
             //show trials left box
             //create random fruit
             //move fruit down by one step
                 //fruit too low
                       //yes
                            // check for trials left or not
                              //yes
                                    //remove one heart
                                    //create random fruit
                              //no
                                     //show gameovr and srart->reset 
                        //no -> Move fruit one step down  


//slice fruit
    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        $("#slicesound")[0].play();
       clearInterval(action);
        $("#fruit1").hide("explode",500);
          
 setTimeout(startAct,500);
    });
    
//play sound
//increase score by one

//function
function addheart()
{
     $("#lives").empty();
     for(i=0;i<lives;i++)
              {
                
               
                $("#lives").append('<img src="images/heart.png" height=20px; width=20px; >'," ");
                  
              }
}
function startAct()
{
   /* $("#displaybox").append('<img src="images/pine.png" height=150px; width=100px;>');*/
     $("#fruit1").show();
    choosefruit();
    //random position
    $("#fruit1").css({ 'left': 550*Math.random(), 'top':-20});
   //random step
    step=1+Math.round(Math.random());
    
    action=setInterval(function(){
         $("#fruit1").css('top',step+$("#fruit1").position().top);
        //check if fruit is too low or not
        if($("#fruit1").position().top > $("#displaybox").height()){
            //check if trials left or not
            if(lives>1)
                {
                   $("#fruit1").show();
    choosefruit();
    //random position
    $("#fruit1").css({ 'left': 550*Math.random(), 'top':-20});
   //random step
    step=1+Math.round(Math.random());
                    //reduce life by 1
                    lives--;
                    
                    addheart();
                }
            else{
               play=false;
                $("#gameover").show();
                $("#startreset").html("Start");
                $("#scoregmbox").html(score);
                $("#lives").hide();
                stopact();
            }
        }
        
    },10);
}

function choosefruit(){
    $("#fruit1").attr('src','images/'+fruits[Math.round(Math.random()*3)]+'.png');
}

function stopact()
{
    clearInterval(action);
    $("#fruit1").hide();    
}
    
    
}); 