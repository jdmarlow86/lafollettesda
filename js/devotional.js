const bibleVerses = [
    { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    { text: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    { text: "For I know the plans I have for you, declares the Lord...", reference: "Jeremiah 29:11" },
    { text: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    { text: "The name of the Lord is a strong tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
    { text: "The Lord your God is with you, the Mighty Warrior who saves.", reference: "Zephaniah 3:17" },
    { text: "Cast all your anxiety on Him because He cares for you.", reference: "1 Peter 5:7" },
    { text: "Even though I walk through the valley of the shadow of death, I will fear no evil.", reference: "Psalm 23:4" },
    { text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", reference: "Isaiah 26:3" },
    { text: "Your word is a lamp to my feet and a light to my path.", reference: "Psalm 119:105" },
    { text: "Do not be conformed to this world, but be transformed by the renewing of your mind.", reference: "Romans 12:2" },
    { text: "Create in me a clean heart, O God, and renew a right spirit within me.", reference: "Psalm 51:10" },
    { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", reference: "Nahum 1:7" },
    { text: "He has shown you, O man, what is good; and what does the Lord require of you but to do justly, love mercy, and walk humbly with your God?", reference: "Micah 6:8" },
    { text: "Blessed are the pure in heart, for they shall see God.", reference: "Matthew 5:8" }
];


const egwQuotes = [
    { text: "Prayer is the key in the hand of faith to unlock Heaven’s storehouse.", reference: "Steps to Christ, p. 94" },
    { text: "Higher than the highest human thought can reach is God's ideal for His children.", reference: "Education, p. 18" },
    { text: "Christ was treated as we deserve, that we might be treated as He deserves.", reference: "Desire of Ages, p. 25" },
    { text: "The last rays of merciful light, the last message of mercy to the world, is a revelation of His character of love.", reference: "Christ's Object Lessons, p. 415" },
    { text: "True education means more than the pursual of a certain course of study.", reference: "Education, p. 13" },
    { text: "In the future life the mysteries that here have annoyed and disappointed us will be made plain.", reference: "Ministry of Healing, p. 474" },
    { text: "He who begins with a little knowledge and in a humble way tells what he knows... may set thousands in motion.", reference: "Testimonies, Vol. 6, p. 443" },
    { text: "The greatest want of the world is the want of men—men who will not be bought or sold.", reference: "Education, p. 57" },
    { text: "The badge of Christianity is not an outward sign, but that which reveals the union of man with God.", reference: "Ministry of Healing, p. 470" },
    { text: "We have nothing to fear for the future, except as we shall forget the way the Lord has led us.", reference: "Life Sketches, p. 196" },
    { text: "The Saviour's life on earth was a life of communion with nature and with God.", reference: "Steps to Christ, p. 85" },
    { text: "Success in any line demands a definite aim. He who would achieve true success must keep steadily in view the aim worthy of his endeavor.", reference: "Education, p. 262" },
    { text: "Satan well knows that all whom he can lead to neglect prayer and the searching of the Scriptures, will be overcome by his attacks.", reference: "Great Controversy, p. 519" },
    { text: "Love must dwell in the heart. A thoroughgoing Christian draws his motives of action from his deep heart-love for his Master.", reference: "Desire of Ages, p. 668" }
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
