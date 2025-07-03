const bibleVerses = [
    { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    { text: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    { text: "For I know the plans I have for you, declares the Lord...", reference: "Jeremiah 29:11" },
    { text: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    { text: "The name of the Lord is a strong tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" }
];

const egwQuotes = [
    { text: "Prayer is the key in the hand of faith to unlock Heaven’s storehouse.", reference: "Steps to Christ, p. 94" },
    { text: "Higher than the highest human thought can reach is God's ideal for His children.", reference: "Education, p. 18" },
    { text: "Christ was treated as we deserve, that we might be treated as He deserves.", reference: "Desire of Ages, p. 25" },
    { text: "The last rays of merciful light, the last message of mercy to the world, is a revelation of His character of love.", reference: "Christ's Object Lessons, p. 415" },
    { text: "True education means more than the pursual of a certain course of study.", reference: "Education, p. 13" },
    { text: "In the future life the mysteries that here have annoyed and disappointed us will be made plain.", reference: "Ministry of Healing, p. 474" },
    { text: "He who begins with a little knowledge and in a humble way tells what he knows... may set thousands in motion.", reference: "Testimonies, Vol. 6, p. 443" }
];

function rotateDaily(contentArray) {
    const dayIndex = new Date().getDate() % contentArray.length;
    return contentArray[dayIndex];
}

function loadDevotional() {
    const verse = rotateDaily(bibleVerses);
    const quote = rotateDaily(egwQuotes);

    document.getElementById("verse-text").textContent = `"${verse.text}"`;
    document.getElementById("verse-reference").textContent = verse.reference;

    document.getElementById("egw-text").textContent = `"${quote.text}"`;
    document.getElementById("egw-reference").textContent = quote.reference;
}

window.onload = loadDevotional;
