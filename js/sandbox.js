
    const bibleBooks = [
    {name: "Genesis", chapters: 50 },
    {name: "Exodus", chapters: 40 },
    {name: "Leviticus", chapters: 27 },
    {name: "Numbers", chapters: 36 },
    {name: "Deuteronomy", chapters: 34 },
    {name: "Joshua", chapters: 24 },
    {name: "Judges", chapters: 21 },
    {name: "Ruth", chapters: 4 },
    {name: "1 Samuel", chapters: 31 },
    {name: "2 Samuel", chapters: 24 },
    {name: "1 Kings", chapters: 22 },
    {name: "2 Kings", chapters: 25 },
    {name: "1 Chronicles", chapters: 29 },
    {name: "2 Chronicles", chapters: 36 },
    {name: "Ezra", chapters: 10 },
    {name: "Nehemiah", chapters: 13 },
    {name: "Esther", chapters: 10 },
    {name: "Job", chapters: 42 },
    {name: "Psalms", chapters: 150 },
    {name: "Proverbs", chapters: 31 },
    {name: "Ecclesiastes", chapters: 12 },
    {name: "Song of Solomon", chapters: 8 },
    {name: "Isaiah", chapters: 66 },
    {name: "Jeremiah", chapters: 52 },
    {name: "Lamentations", chapters: 5 },
    {name: "Ezekiel", chapters: 48 },
    {name: "Daniel", chapters: 12 },
    {name: "Hosea", chapters: 14 },
    {name: "Joel", chapters: 3 },
    {name: "Amos", chapters: 9 },
    {name: "Obadiah", chapters: 1 },
    {name: "Jonah", chapters: 4 },
    {name: "Micah", chapters: 7 },
    {name: "Nahum", chapters: 3 },
    {name: "Habakkuk", chapters: 3 },
    {name: "Zephaniah", chapters: 3 },
    {name: "Haggai", chapters: 2 },
    {name: "Zechariah", chapters: 14 },
    {name: "Malachi", chapters: 4 },
    {name: "Matthew", chapters: 28 },
    {name: "Mark", chapters: 16 },
    {name: "Luke", chapters: 24 },
    {name: "John", chapters: 21 },
    {name: "Acts", chapters: 28 },
    {name: "Romans", chapters: 16 },
    {name: "1 Corinthians", chapters: 16 },
    {name: "2 Corinthians", chapters: 13 },
    {name: "Galatians", chapters: 6 },
    {name: "Ephesians", chapters: 6 },
    {name: "Philippians", chapters: 4 },
    {name: "Colossians", chapters: 4 },
    {name: "1 Thessalonians", chapters: 5 },
    {name: "2 Thessalonians", chapters: 3 },
    {name: "1 Timothy", chapters: 6 },
    {name: "2 Timothy", chapters: 4 },
    {name: "Titus", chapters: 3 },
    {name: "Philemon", chapters: 1 },
    {name: "Hebrews", chapters: 13 },
    {name: "James", chapters: 5 },
    {name: "1 Peter", chapters: 5 },
    {name: "2 Peter", chapters: 3 },
    {name: "1 John", chapters: 5 },
    {name: "2 John", chapters: 1 },
    {name: "3 John", chapters: 1 },
    {name: "Jude", chapters: 1 },
    {name: "Revelation", chapters: 22 }
    ];

    function pickRandomBook() {
    const book = bibleBooks[Math.floor(Math.random() * bibleBooks.length)];
    const chapter = Math.floor(Math.random() * book.chapters) + 1;
    document.getElementById("result").textContent = `${book.name} ${chapter}`;
  }


/* ==== CONFIG ==== */
const verses = [
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "Trust in the Lord with all your heart…", ref: "Proverbs 3:5" },
    { text: "I can do all things through Christ…", ref: "Philippians 4:13" },
    { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
    { text: "Let all that you do be done in love.", ref: "1 Cor 16:14" },
    { text: "Cast all your anxiety on Him…", ref: "1 Peter 5:7" },
    { text: "For I know the plans I have for you…", ref: "Jer 29:11" },
    { text: "The name of the Lord is a strong tower…", ref: "Prov 18:10" },
];

/* ==== BUILD GRID ==== */
const gridEl = document.getElementById("grid");
const modal = document.getElementById("modal");
const mTitle = document.getElementById("modal?title");
const mBody = document.getElementById("modal?body");
const closeBtn = document.getElementById("modal?close");

let treasureIndex = Math.floor(Math.random() * 16);

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.textContent = "?";
    cell.addEventListener("click", onCellClick);
    gridEl.appendChild(cell);
}

/* ==== HANDLERS ==== */
function onCellClick(e) {
    const cell = e.currentTarget;
    if (cell.classList.contains("verse?picked")) return; // already used

    const idx = parseInt(cell.dataset.index, 10);

    if (idx === treasureIndex) {
        // TREASURE!
        showModal("Treasure Found!", "?? Congratulations! You found the hidden treasure.");
        // clear grid after modal closes
        closeBtn.onclick = () => {
            hideModal();
            gridEl.innerHTML = "";
        };
    } else {
        // Show verse
        const verse = verses[Math.floor(Math.random() * verses.length)];
        showModal("Bible Verse", `"${verse.text}" – <br><strong>${verse.ref}</strong>`);
        // after close, mark cell blue
        closeBtn.onclick = () => {
            hideModal();
            cell.classList.add("verse?picked");
            cell.textContent = "";          // clear symbol
        };
    }
}

function showModal(title, bodyHtml) {
    mTitle.textContent = title;
    mBody.innerHTML = bodyHtml;
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}

