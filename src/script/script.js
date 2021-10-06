// Loadmore Button
$(document).ready(function () {
    $(".storeCard").slice(0, 6).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".storeCard:hidden").slice(0, 2).slideDown();
        if ($(".storeCard:hidden").length == 0) {
            $("#loadMore").text("End of Content").addClass("noContent");
        }
    });
})