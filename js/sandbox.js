
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


document.addEventListener("DOMContentLoaded", () => {

    /* ---- data ---- */
    const verses = [
        "Psalm 119:105 – Your word is a lamp to my feet.",
        "John 3:16 – For God so loved the world…",
        "Proverbs 3:5 – Trust in the Lord with all your heart.",
        "Isaiah 41:10 – Do not fear, for I am with you.",
        "Joshua 1:9 – Be strong and courageous.",
        "Romans 8:28 – All things work together for good.",
        "Matthew 6:33 – Seek first the kingdom of God.",
        "Philippians 4:13 – I can do all things through Christ."
    ];

    /* ---- elements ---- */
    const grid = document.getElementById("treasure-grid");
    const restart = document.getElementById("restart-btn");
    const modal = document.getElementById("th-modal");
    const mTitle = document.getElementById("th-title");
    const mBody = document.getElementById("th-body");
    const mClose = document.getElementById("th-close");
    const mOk = document.getElementById("th-ok"); // New OK button

    /* ---- helpers ---- */
    const showModal = (title, body, onClose) => {
        mTitle.textContent = title;
        mBody.innerHTML = body;
        modal.style.display = "block";

        // Bind OK button
        mOk.onclick = () => {
            modal.style.display = "none";
            if (typeof onClose === "function") onClose();
        };

        // Also bind the close X
        mClose.onclick = () => {
            modal.style.display = "none";
            if (typeof onClose === "function") onClose();
        };
    };

    const hideModal = () => { modal.style.display = "none"; };

    /* ---- main ---- */
    function buildGrid() {
        grid.innerHTML = "";
        const treasureIdx = Math.floor(Math.random() * 16);

        for (let i = 0; i < 16; i++) {
            const cell = document.createElement("div");
            cell.className = "treasure-cell";
            cell.textContent = "-";

            cell.addEventListener("click", function handler() {
                if (cell.classList.contains("cleared")) return;

                if (i === treasureIdx) {
                    showModal(
                        "Treasure Found!",
                        "Congratulations!<br>You found the hidden treasure.",
                        () => buildGrid()
                    );
                } else {
                    const verse = verses[Math.floor(Math.random() * verses.length)];
                    showModal(
                        "Bible Verse",
                        verse,
                        () => {
                            cell.classList.add("cleared");
                            cell.textContent = "X";
                        }
                    );
                }
            });

            grid.appendChild(cell);
        }
    }

    /* ---- event wiring ---- */
    restart.addEventListener("click", buildGrid);
    window.addEventListener("click", e => {
        if (e.target === modal) hideModal();
    });

    /* ---- init ---- */
    buildGrid();
});


/* ---------- QUESTION BANK ---------- */
const questions = [
  { q:"Who built the ark?", a:["Moses","Noah","Abraham","David"], ans:"Noah" },
  { q:"How many disciples did Jesus have?", a:["10","11","12","13"], ans:"12" },
  { q:"Where was Jesus born?", a:["Nazareth","Bethlehem","Jerusalem","Galilee"], ans:"Bethlehem" },
  // …add as many as you like
];

/* ---------- CONFIG ---------- */
const ROUND_LEN = Math.min(10, questions.length); // 10?question round
const TIME_PER_Q = 15;                            // seconds

/* ---------- STATE ---------- */
let roundOrder = [];      // shuffled index list
let qPtr = 0;             // pointer inside roundOrder
let score = 0;
let timerId = null;
let timeLeft = TIME_PER_Q;

/* ---------- DOM ---------- */
const qBox = document.getElementById("trivia-question");
const optBox = document.getElementById("trivia-options");
const nextBtn = document.getElementById("next-question");
const resultBox = document.getElementById("trivia-result");
const scoreBox  = document.getElementById("trivia-score");
const timerBox  = document.getElementById("trivia-timer");

/* ---------- HELPERS ---------- */
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

function startRound() {
  roundOrder = shuffle([...Array(questions.length).keys()]).slice(0, ROUND_LEN);
  qPtr = 0;  score = 0;
  updateScore();
  loadQuestion();
}

function updateScore() {
  scoreBox.textContent = `Score ${score} / ${qPtr}`;
}

function startTimer() {
  timeLeft = TIME_PER_Q;
  timerBox.textContent = `${timeLeft} s`;
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft--;
    timerBox.textContent = `${timeLeft} s`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      checkAnswer(null);               // treat as wrong / timeout
    }
  }, 1000);
}

/* ---------- UI ---------- */
function loadQuestion() {
  if (qPtr >= roundOrder.length) {   // round finished
    endRound();
    return;
  }

  const qObj = questions[roundOrder[qPtr]];
  qBox.textContent = qObj.q;
  optBox.innerHTML = "";
  resultBox.textContent = "";
  nextBtn.disabled = true;

  qObj.a.forEach(opt => {
    const b = document.createElement("button");
    b.textContent = opt;
    b.onclick = () => checkAnswer(opt);
    optBox.appendChild(b);
  });

  startTimer();
}

function checkAnswer(selected) {
  clearInterval(timerId);
  const correct = questions[roundOrder[qPtr]].ans;
  const isCorrect = selected === correct;

  if (isCorrect) {
    resultBox.textContent = "? Correct!";
    resultBox.style.color = "green";
    score++;
  } else {
    resultBox.textContent = `? Incorrect.  Correct: ${correct}`;
    resultBox.style.color = "red";
  }

  qPtr++;
  updateScore();
  nextBtn.disabled = false;

  /* disable all option buttons */
  [...optBox.children].forEach(b => b.disabled = true);
}

function endRound() {
  const msg = `Round finished!\nYour score: ${score} / ${ROUND_LEN}`;
  alert(msg);

  /* store history */
  const history = JSON.parse(localStorage.getItem("triviaHistory") || "[]");
  history.push({ date: new Date().toLocaleString(), score, outOf: ROUND_LEN });
  localStorage.setItem("triviaHistory", JSON.stringify(history));

  nextBtn.disabled = false;
  nextBtn.textContent = "Play Again";
}

nextBtn.addEventListener("click", () => {
  if (qPtr >= roundOrder.length) {
    nextBtn.textContent = "Next Question";
    startRound();
  } else {
    loadQuestion();
  }
});

/* ---------- INITIAL ---------- */
window.addEventListener("DOMContentLoaded", startRound);


