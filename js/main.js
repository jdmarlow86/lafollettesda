document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('js-enabled');
    // ========== ACCOUNTING FUNCTIONALITY ==========
    const form = document.getElementById('accounting-form');
    const table = document.getElementById('accounting-table')?.querySelector('tbody');
    const totalField = document.getElementById('total');
    let total = 0;
    const acctData = JSON.parse(localStorage.getItem('accountingData') || '[]');

    function renderAccounting() {
        if (!table || !totalField) return;
        table.innerHTML = '';
        total = 0;
        acctData.forEach(({ desc, amt }) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${desc}</td><td>$${amt.toFixed(2)}</td>`;
            table.appendChild(row);
            total += amt;
        });
        totalField.textContent = total.toFixed(2);
    }

    if (form && table && totalField) {
        renderAccounting();
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const desc = document.getElementById('desc').value;
            const amt = parseFloat(document.getElementById('amount').value);
            if (desc && !isNaN(amt)) {
                acctData.push({ desc, amt });
                localStorage.setItem('accountingData', JSON.stringify(acctData));
                renderAccounting();
                form.reset();
            }
        });
    }

    window.exportAccounting = function () {
        const data = JSON.parse(localStorage.getItem('accountingData') || '[]');
        if (data.length === 0) {
            alert('No accounting data to export.');
            return;
        }
        let csv = 'Description,Amount\n';
        data.forEach(r => {
            csv += `"${r.desc.replace(/"/g, '""')}",${r.amt.toFixed(2)}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'accounting.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    window.clearAccounting = function () {
        if (confirm('Are you sure you want to delete all accounting data?')) {
            localStorage.removeItem('accountingData');
            acctData.length = 0;
            renderAccounting();
        }
    };

    // ========== CONTACT FORM ==========
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

    // ========== ADMIN PAGE DISPLAY ==========
    const list = document.getElementById("submission-list");
    if (list) {
        const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");

        if (messages.length === 0) {
            list.innerHTML = "<li><em>No submissions yet.</em></li>";
        } else {
            list.innerHTML = "";
            messages.forEach((msg) => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${msg.name}</strong>  ${msg.reason}  "${msg.message}"  <em>${msg.date}</em>`;
                list.appendChild(li);
            });
        }
    }

    window.exportMessages = function () {
        const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
        if (messages.length === 0) {
            alert('No messages to export.');
            return;
        }
        let csv = 'Name,Reason,Message,Date\n';
        messages.forEach(m => {
            const sanitizedMessage = m.message.replace(/"/g, '""');
            csv += `"${m.name.replace(/"/g, '""')}","${m.reason.replace(/"/g, '""')}","${sanitizedMessage}",${m.date}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'messages.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    window.clearMessages = function () {
        if (confirm("Are you sure you want to delete all messages?")) {
            localStorage.removeItem("contactMessages");
            location.reload();
        }
    };

    // ========== HAMBURGER MENU ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        const updateMenuState = (isOpen) => {
            navMenu.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            hamburger.classList.toggle('is-active', isOpen);
            if (!isOpen) {
                navMenu.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
                const dropBtn = navMenu.querySelector('.dropbtn');
                dropBtn?.setAttribute('aria-expanded', 'false');
            }
        };

        hamburger.addEventListener('click', () => {
            const isOpen = !navMenu.classList.contains('open');
            updateMenuState(isOpen);
        });

        // Close menu on any nav link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                updateMenuState(false);
            });
        });

        document.addEventListener('click', (event) => {
            if (!navMenu.classList.contains('open')) return;
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                updateMenuState(false);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                updateMenuState(false);
            }
        });

        window.addEventListener('resize', () => {
            if (!window.matchMedia('(max-width: 768px)').matches) {
                updateMenuState(false);
            }
        });
    }

    // ========== DROPDOWN TOGGLE (mobile) ==========
    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) {
        dropBtn.addEventListener('click', (e) => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                e.preventDefault();
                const dropdown = dropBtn.parentElement;
                const expanded = dropdown.classList.toggle('open');
                dropBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            }
        });
    }
});

