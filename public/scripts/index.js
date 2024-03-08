$("#personal-info").on("click", () => {
    $("#frame").slideUp(0).load("./public/personal.html", () => {
        $("#frame").slideDown();
    });
});
$("#languages").on("click", () => {
    $("#frame").slideUp(0).load("./public/languages.html", () => {
        $("#frame").slideDown();
    });
});
$("#experience").on("click", () => {
    $("#frame").slideUp(0).load("./public/experience.html", () => {
        $("#frame").slideDown();
    });
});
$("#education").on("click", () => {
    $("#frame").slideUp(0).load("./public/education.html", () => {
        $("#frame").slideDown();
    });
});
$("#courses").on("click", () => {
    $("#frame").slideUp(0).load("./public/courses.html", () => {
        $("#frame").slideDown();
    });
});
$("#skills").on("click", () => {
    $("#frame").slideUp(0).load("./public/skills.html", () => {
        $("#frame").slideDown();
    });
});

$("#personal-info").mouseenter(() => {
    $("#personal-info").addClass("hovered");
});
$("#languages").mouseenter(() => {
    $("#languages").addClass("hovered");
});
$("#experience").mouseenter(() => {
    $("#experience").addClass("hovered");
});
$("#education").mouseenter(() => {
    $("#education").addClass("hovered");
});
$("#courses").mouseenter(() => {
    $("#courses").addClass("hovered");
});
$("#skills").mouseenter(() => {
    $("#skills").addClass("hovered");
});

$("#personal-info").mouseleave(() => {
    $("#personal-info").removeClass("hovered");
});
$("#languages").mouseleave(() => {
    $("#languages").removeClass("hovered");
});
$("#experience").mouseleave(() => {
    $("#experience").removeClass("hovered");
});
$("#education").mouseleave(() => {
    $("#education").removeClass("hovered");
});
$("#courses").mouseleave(() => {
    $("#courses").removeClass("hovered");
});
$("#skills").mouseleave(() => {
    $("#skills").removeClass("hovered");
});

// const date = new Date();
// $("footer").html("<p>Copy rights © " + date.getFullYear() + "</p>");