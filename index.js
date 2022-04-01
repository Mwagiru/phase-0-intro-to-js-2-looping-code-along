const arr = ["Ada", "Brendan","Ali"];
function writeCards(namesArray, event="birthday") {
    let cards = []
    for (let i = 0; i < arr.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}