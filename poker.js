const isflush = function(cardString){
  const cards = getCards(cardString)
  const firstSuit = getSuit(cards[0]);
  return cards.every(card => getSuit(card) === firstSuit)
}

exports.compare = function(handA, handB){
  const isFlushA = isflush(handA);
  const isFlushB = isflush(handB);
  if(isFlushA && !isFlushB) {
    return "win";
  } else if ( isFlushB && !isFlushA) {
    return "lost";
  } else {
    return "draw";
  }
}
const getCards = function(cards){
  return cards.split(" ")
}

const getSuit = function(card){
  return card[1]
}

exports.getCards = getCards
exports.getSuit = getSuit
exports.isflush = isflush;
