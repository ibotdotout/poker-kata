const isflush = function(cardString){
	const cards = getCards(cardString)
	const firstSuit = getSuit(cards[0]);
	return cards.every(card => getSuit(card) === firstSuit)
}

exports.compare = function(handA, handB){
  if(isflush(handA) && !isflush(handB)) {
		return "win";
	} else if(isflush(handB) && isflush(handA)) {
		return "draw";
	} else {
		return "lost";
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
