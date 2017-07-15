function BasicCard(front, back) {
    this.front = front;
    this.back = back;

}

var rain = new BasicCard("it rained hard today", "true");
console.log(rain.front);
console.log(rain.back);


module.exports = BasicCard;