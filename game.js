class Game {

constructor(){

}

 GS (){
     var GSR = database.ref("gamestate")
     GSR.on ("value",function (data){
        gamestate = data.val();
     } ); 
 }
update(state){
database.ref("/").update({
    gamestate:state
})
}
start (){
    if(gamestate===0){
       player=new Player();
       player.GetCount();
       form = new Form();
       form.display();
    }
}
}