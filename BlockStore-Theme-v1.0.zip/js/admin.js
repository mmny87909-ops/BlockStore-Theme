/* ============================================
   BlockStore — Admin Panel Logic
   ============================================ */

const ADMIN_PASSWORD = "admin123";
const STORAGE_KEY = "blockstore-data";

const defaultRanks = [
    { id: "rank1", name: "Starter", price: "$4.99", perks: ["Colored chat", "/fly in lobby", "2 homes"] },
    { id: "rank2", name: "Elite", price: "$9.99", perks: ["Everything in Starter", "/fly everywhere", "5 homes", "Custom prefix"] },
    { id: "rank3", name: "Legend", price: "$19.99", perks: ["Everything in Elite", "/nick command", "10 homes", "Exclusive cosmetics", "Priority support"] }
];

const loginScreen = document.getElementById("adminLogin");
const adminPanel = document.getElementById("adminPanel");
const loginBtn = document.getElementById("loginBtn");
const adminPass = document.getElementById("adminPass");
const loginError = document.getElementById("loginError");

function tryLogin() {
    if (adminPass.value === ADMIN_PASSWORD) {
        loginScreen.style.display = "none";
        adminPanel.style.display = "block";
        renderEditor();
    } else {
        loginError.textContent = "❌ Wrong password. Try again.";
        adminPass.value = "";
    }
}

if (loginBtn) loginBtn.addEventListener("click", tryLogin);
if (adminPass) {
    adminPass.addEventListener("keydown", (e) => {
        if (e.key === "Enter") tryLogin();
    });
}

function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { return JSON.parse(saved); } catch (e) { return JSON.parse(JSON.stringify(defaultRanks)); }
    }
    return JSON.parse(JSON.stringify(defaultRanks));
}

function renderEditor() {
    const editor = document.getElementById("ranksEditor");
    if (!editor) return;
    const ranks = loadData();
    editor.innerHTML = "";

    ranks.forEach((rank, index) => {
        const card = document.createElement("div");
        card.className = "admin-card";
        card.innerHTML = `
            <div class="admin-card-header">
                <h2>Rank ${index + 1}</h2>
                <button class="btn-delete" data-delete-id="${rank.id}" type="button">🗑️ Delete</button>
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" data-id="${rank.id}" data-field="name" value="${escapeHtml(rank.name)}">
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="text" data-id="${rank.id}" data-field="price" value="${escapeHtml(rank.price)}">
            </div>
            <div class="form-group">
                <label>Perks (one per line)</label>
                <textarea data-id="${rank.id}" data-field="perks" rows="5">${rank.perks.map(escapeHtml).join("\n")}</textarea>
            </div>
        `;
        editor.appendChild(card);
    });

    editor.querySelectorAll("[data-delete-id]").forEach((btn) => {
        btn.addEventListener("click", () => deleteRank(btn.getAttribute("data-delete-id")));
    });
}

function addNewRank() {
    const ranks = loadData();
    ranks.push({ id: "rank_" + Date.now(), name: "New Rank", price: "$0.00", perks: ["Perk 1", "Perk 2"] });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ranks));
    renderEditor();
    showToast();
}

function deleteRank(id) {
    if (!confirm("Delete this rank? This cannot be undone.")) return;
    let ranks = loadData();
    ranks = ranks.filter((r) => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ranks));
    renderEditor();
    showToast();
}

function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function saveChanges() {
    const ranks = loadData();
    document.querySelectorAll("#ranksEditor [data-id]").forEach((el) => {
        const id = el.getAttribute("data-id");
        const field = el.getAttribute("data-field");
        const rank = ranks.find((r) => r.id === id);
        if (!rank) return;
        if (field === "perks") {
            rank.perks = el.value.split("\n").map((s) => s.trim()).filter(Boolean);
        } else {
            rank[field] = el.value.trim();
        }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ranks));
    showToast();
}

function resetData() {
    if (!confirm("Reset all changes to default? This cannot be undone.")) return;
    localStorage.removeItem(STORAGE_KEY);
    renderEditor();
    showToast();
}

function showToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const addRankBtn = document.getElementById("addRankBtn");

if (saveBtn) saveBtn.addEventListener("click", saveChanges);
if (resetBtn) resetBtn.addEventListener("click", resetData);
if (addRankBtn) addRankBtn.addEventListener("click", addNewRank);