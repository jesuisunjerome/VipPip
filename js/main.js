$("document").ready(function () {
    mostrarBarra();
    mostrarMenuMobil();

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
        $("#sidebar").toggleClass("down");
    });
}


function mostrarMenuMobil() {
    var prevScrollpos = $("#content").scrollTop();

    $("#content").scroll(function () {
        var $height = $("#content").scrollTop();

        if (prevScrollpos > $height) {
            $("#sidebar").addClass("up").removeClass("down");
        } else {
            $("#sidebar").addClass("down").removeClass("up");
        }
        prevScrollpos = $height;
    });
}
