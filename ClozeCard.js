// module.exports = ClozeCard;
// var text = process.argv[2];
// var cloze = process.argv[3];



function ClozeCard(fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
    if (!fullText.includes(cloze)) {
        console.log("'" + fullText + "' does not contain '" + cloze + "'");
    }

    this.partial = function() {

        var newPartial = fullText.replace(cloze, "...");

        console.log(newPartial);
    }

}
var water = new ClozeCard("water is good for you", "water");

console.log(water.fullText);
console.log(water.cloze);
console.log(water.partial());
