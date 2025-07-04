
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


document.addEventListener("DOMContentLoaded", function () {
    const verses = [
        "?? Psalm 119:105 – Your word is a lamp to my feet.",
        "?? John 3:16 – For God so loved the world...",
        "?? Proverbs 3:5 – Trust in the Lord with all your heart.",
        "?? Isaiah 41:10 – Do not fear, for I am with you.",
        "?? Joshua 1:9 – Be strong and courageous.",
        "?? Romans 8:28 – All things work together for good.",
        "?? Matthew 6:33 – Seek first the kingdom of God.",
        "?? Philippians 4:13 – I can do all things through Christ.",
    ];

    const treasureIcon = "Treasure!";
    const grid = document.getElementById("treasure-grid");

    function createGrid() {
        grid.innerHTML = "";
        const treasureIndex = Math.floor(Math.random() * 16);

        for (let i = 0; i < 16; i++) {
            const cell = document.createElement("div");
            cell.classList.add("treasure-cell");

            cell.addEventListener("click", function handleClick() {
                if (cell.classList.contains("cleared")) return;

                if (i === treasureIndex) {
                    alert("You found the treasure!\n\n" + treasureIcon);
                    createGrid(); // Reset grid
                } else {
                    const verse = verses[Math.floor(Math.random() * verses.length)];
                    alert(verse);
                    cell.classList.add("cleared");
                    cell.textContent = "-";
                    cell.removeEventListener("click", handleClick);
                }
            });

            grid.appendChild(cell);
        }
    }

    createGrid();
});
