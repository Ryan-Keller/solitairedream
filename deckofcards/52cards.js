var suits = [ 'H', 'C','D', 'S'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = [];

for(var suitsCounter = 0; suitsCounter < 4; suitsCounter++) {
    for(var ranksCounter = 0; ranksCounter < 13; ranksCounter++){
       // console.log(ranks[ranksCounter] +suits[suitsCounter]);
       deck.push(ranks[ranksCounter] + suits[suitsCounter]);
    }
}

console.log(deck);