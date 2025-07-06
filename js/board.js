/* ----- SIMPLE LOGIN (sessionStorage) ----- */
const loginOverlay = document.getElementById("login-overlay");
const loginBtn = document.getElementById("login-btn");
const loginMsg = document.getElementById("login-msg");
const boardPassInp = document.getElementById("board-pass");

const BOARD_PW = "churchboard2025"; // <<< change me

function unlock() {
    loginOverlay.style.display = "none";
    sessionStorage.setItem("boardAuth", "true");
}
if (sessionStorage.getItem("boardAuth") === "true") unlock();

loginBtn.addEventListener("click", () => {
    const val = boardPassInp.value.trim();
    if (val === BOARD_PW) {
        unlock();
        boardPassInp.value = "";
    } else {
        loginMsg.textContent = "Incorrect password.";
    }
});

/* ----- LEFT NAV toggle logic ----- */
const links = document.querySelectorAll(".sidebar nav a[data-section]");
const sections = document.querySelectorAll(".content-section");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.dataset.section;
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        sections.forEach(s => {
            s.classList.toggle("hidden", s.id !== target);
        });
    });
});

document.getElementById("logout").onclick = () => {
    sessionStorage.removeItem("boardAuth");
    location.reload();
};

/* ----- Meeting Notes ----- */
const noteForm = document.getElementById("note-form");
const noteTitle = document.getElementById("note-title");
const noteBody = document.getElementById("note-body");
const notesList = document.getElementById("notes-list");
const savedNotes = JSON.parse(localStorage.getItem("boardNotes") || "[]");

function renderNotes() {
    notesList.innerHTML = "";
    savedNotes.forEach((n, idx) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${n.title}</strong><br>${n.body}`;
        li.onclick = () => { if (confirm("Delete note?")) { savedNotes.splice(idx, 1); storeNotes(); } };
        notesList.appendChild(li);
    });
}
function storeNotes() {
    localStorage.setItem("boardNotes", JSON.stringify(savedNotes));
    renderNotes();
}
noteForm.addEventListener("submit", e => {
    e.preventDefault();
    savedNotes.push({ title: noteTitle.value.trim(), body: noteBody.value.trim() });
    noteForm.reset(); storeNotes();
});
renderNotes();

/* ----- Accounting ----- */
const acctForm = document.getElementById("acct-form");
const acctDesc = document.getElementById("acct-desc");
const acctAmt = document.getElementById("acct-amt");
const acctTable = document.querySelector("#acct-table tbody");
const acctTotal = document.getElementById("acct-total");
const acctData = JSON.parse(localStorage.getItem("boardAcct") || "[]");

function renderAcct() {
    acctTable.innerHTML = "";
    let total = 0;
    acctData.forEach((row, idx) => {
        total += row.amt;
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.desc}</td><td>$${row.amt.toFixed(2)}</td>`;
        tr.onclick = () => { if (confirm("Delete entry?")) { acctData.splice(idx, 1); storeAcct(); } };
        acctTable.appendChild(tr);
    });
    acctTotal.textContent = total.toFixed(2);
}
function storeAcct() {
    localStorage.setItem("boardAcct", JSON.stringify(acctData));
    renderAcct();
}
acctForm.addEventListener("submit", e => {
    e.preventDefault();
    acctData.push({ desc: acctDesc.value.trim(), amt: parseFloat(acctAmt.value) });
    acctForm.reset(); storeAcct();
});
renderAcct();
