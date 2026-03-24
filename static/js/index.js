$(document).ready(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".qualitative-tabs li").click(function() {
    var tabId = $(this).data("tab");

    $(".qualitative-tabs li").removeClass("is-active");
    $(this).addClass("is-active");

    $(".qualitative-tab-content").removeClass("is-active");
    $('.qualitative-tab-content[data-content="' + tabId + '"]').addClass("is-active");
  });
});
