class Form {
    constructor(){

    }

    display(){
        var title = createElement ("h2")
        title.html("Multiplayer Car Racing Game")
        title.position(130,0);

        var input = createInput("name");
        input.position(130,160);

        var button = createButton("Play")
        button.position(260,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            
            player_count = player_count+1 ;

            player.update(name);
            player.updateC(player_count);

            var greeting = createElement("h3")
            greeting.html("Hello "+ name + "!!!")
            greeting.position(130,160);
        });
    }
}