 $(document).ready(function () {
     mostrarBarra();
     mostrarMenuMobil();

     $('#sidebarCollapse').click(function () {
         $('#sidebar, #content').toggleClass('active');
         $(this).toggleClass('active');
     });
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
     var prevScrollpos = window.pageYOffset;

     window.onscroll = function () {
         var $height = window.pageYOffset;

         if (prevScrollpos > $height) {
             $("#sidebar").addClass("up").removeClass("down");
         } else {
             $("#sidebar").addClass("down").removeClass("up");
         }
         prevScrollpos = $height;
     };
 }
