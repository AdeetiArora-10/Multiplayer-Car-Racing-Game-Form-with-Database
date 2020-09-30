class Player{
    constructor(){
 
    }
    GetCount(){
        var playerCR = database.ref("PlayerCount")
        playerCR.on("value",function (data){
            player_count = data.val();
        });
    }
updateC (count){

database.ref("/").update({
    player_count:count
})
}
update(name){

    var playerIndex = "Player" + player_count
    database.ref(playerIndex).set({
        name:name
    })

}


}