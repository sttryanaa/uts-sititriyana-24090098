const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("password").value.trim();
        const errorMsg = document.getElementById("errorMsg");

        // Reset error
        errorMsg.textContent = "";

        // VALIDATION
        if (email === "" || pass === "") {
            errorMsg.textContent = "Email dan password tidak boleh kosong!";
            return;
        }

        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    });
}

// DUMMY DATA

const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

if (document.getElementById("totalProducts")) {
    document.getElementById("totalProducts").textContent = summary.totalProducts;
    document.getElementById("totalSales").textContent = summary.totalSales;
    document.getElementById("totalRevenue").textContent =
        "Rp " + summary.totalRevenue.toLocaleString("id-ID");
}


// PRODUCTS

const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
    { id: 3, name: "Matcha", price: 25000, stock: 35 },
    { id: 3, name: "Orange Juice", price: 10000, stock: 40 },
];

// Jika halaman products.html dibuka -> isi tabel
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("productTable");

    if (tableBody) {
        products.forEach((p, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.stock}</td>
                <td class="aksi">
                <span class="edit-btn material-symbols-rounded" style="cursor:pointer;font-size:20px;">edit</span>
                <span class="delete-btn material-symbols-rounded" style="cursor:pointer;font-size:20px;margin-left:8px;">delete</span>
                </td>
            `;

            // === Aksi Edit ===
            row.querySelector(".edit-btn").addEventListener("click", () => {
                alert(`Edit produk: ${p.name}`);
            });
            
            // === Aksi Delete ===
            row.querySelector(".delete-btn").addEventListener("click", () => {
                if (confirm(`Yakin hapus produk ${p.name}?`)) {
                    row.remove();
                }
            });

            tableBody.appendChild(row);
        });
    }
});



    