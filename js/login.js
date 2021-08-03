var x = document.getElementById("emaila");
var p = document.getElementById("passworda");

document.getElementById("formA").addEventListener("submit", (ee) => {
    ee.preventDefault();
    if (x.value=="admin@gmail.com" && p.value=="ngochai") {
        swal.fire({
            title: 'Welcom',
            html: 'Access granted',
            icon: 'success'
        });
        setTimeout(() => {
            loadPage();
        }, 3000);
    }else {
        swal.fire({
            title: 'ERROR',
            html: 'Access denied',
            icon: 'error'
        });
    }
    function loadPage() {
        window.location.href="./admin/admin.html";
    }
});