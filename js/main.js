document.addEventListener("DOMContentLoaded", () => {
    // ========== ACCOUNTING FUNCTIONALITY ==========
    const form = document.getElementById('accounting-form');
    const table = document.getElementById('accounting-table')?.querySelector('tbody');
    const totalField = document.getElementById('total');
    let total = 0;

    if (form && table && totalField) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const desc = document.getElementById('desc').value;
            const amt = parseFloat(document.getElementById('amount').value);
            if (desc && !isNaN(amt)) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${desc}</td><td>$${amt.toFixed(2)}</td>`;
                table.appendChild(row);
                total += amt;
                totalField.textContent = total.toFixed(2);
                form.reset();
            }
        });
    }

    // ========== CONTACT FORM (index.html) ==========
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const reason = document.getElementById("reason").value;
            const message = document.getElementById("message").value.trim();
            const date = new Date().toISOString().split("T")[0];

            const entry = { name, reason, message, date };

            const saved = JSON.parse(localStorage.getItem("contactMessages") || "[]");
            saved.push(entry);
            localStorage.setItem("contactMessages", JSON.stringify(saved));

            alert("Message sent!");
            contactForm.reset();
        });
    }

    // ========== ADMIN PAGE DISPLAY (admin.html) ==========
    const list = document.getElementById("submission-list");
    if (list) {
        const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");

        if (messages.length === 0) {
            list.innerHTML = "<li><em>No submissions yet.</em></li>";
        } else {
            list.innerHTML = "";
            messages.forEach((msg) => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${msg.name}</strong> – ${msg.reason} – "${msg.message}" – <em>${msg.date}</em>`;
                list.appendChild(li);
            });
        }

        // Optional: Clear button
        const clearBtn = document.getElementById("clear-submissions");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                if (confirm("Are you sure you want to delete all messages?")) {
                    localStorage.removeItem("contactMessages");
                    location.reload();
                }
            });
        }
    }
});
