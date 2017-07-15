function ClozeCard(fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
    if (!fullText.includes(cloze)) {
        console.log("'" + fullText + "' does not contain '" + cloze + "'");
    }

    this.partial = fullText.replace(cloze, "...");

  
}
var water = new ClozeCard("water is good for you", "water");

console.log(water.fullText);
console.log(water.cloze);
console.log(water.partial);


module.exports = ClozeCard;
