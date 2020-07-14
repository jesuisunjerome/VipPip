$("document").ready(function () {
    mostrarBarra();
});


function mostrarBarra() {
    $("#btnSearch").click(function () {
        $(".buscadorPrincipal").toggleClass("d-none");
        $("#baChache .navbar-nav").toggleClass("d-none");
    });

    $("#btnCloseBaChache").click(function () {
        $(".buscadorPrincipal").toggleClass("d-none");
        $("#baChache .navbar-nav").toggleClass("d-none");
    });

    $("#lbtnFollowers").click(function () {
        $("#rightSidebar").toggleClass("showMobile");
    });
}
