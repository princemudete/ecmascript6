window.onload = function() {
    
    var youSay = "goodbye";

    if (youSay.startsWith("goodbye")) {
        var iSay = "hello";
    }
    console.log('you say ${youSay}, I say ${iSay}');

    var text = "My name is John Doe";
    console.log(text.includes("name"));


    /* NEW STRING METHODS 
    repeat
    startsWith
    endsWith
    includes
    */

    var name = "Charlie";
    var belt = "black";

    var ninja = {
        name, belt,
        chop(x){
            console.log('you chopped the enemy $(x) times');
        }
    };
    console.log(ninja.chop(3));

    var ninja = {
        name: "Ryu",
        chop(x) {
            
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + "chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    }
ninja.chop(5)



var ninjas = ["ryu", "ken", "yoshi", "yoshi", "ryu",
    "ryu"];

    var refinedNinjas = new Set(ninjas);
    console.log(refinedNinjas);

    ninjas = [...refinedNinjas];
    console.log(ninjas);


// generators
function* generator() {

    var tweets = yeild $.getJSON("data/tweets.json");
    console.log(tweets);

    var friends = yield $.getJSON("data/fb-friends.json");
    console.log(friends);

    var ytVids = yield $.getJSON("data/yt-vids.json");
    console.log(ytVids);

};
function genWrapper(generator) {

    //set up generator / iterator
    var muGen = generator();

    //create function to handle the yielded value
    function handle(yielded) {

        if (!yielded.done) {
            yielded.value.then(function(data) {
                return handle(myGen.next(data));
            });
        }
    }//end handle

    //return handle function, passing in myGen.next
    return handle(myGen.next());
    
}//end genWrapper
     

}      