$('#refresh').click(async function () {
    location.reload(true);
});

$('#togglebottom').click(async function () {
    $('#btmdiv').toggle();
    $('#mainimg').css({ display: "block" });
    $('#first').css({ display: "none" });
    $('#second').css({ display: "none" });
    $('#third').css({ display: "none" });
    $('#fourth').css({ display: "none" });
    //$('#fifth').css({ display: "none" });
});

$("#one1").click(async function () {
    if ($('#mainimg').css('display') === "block" && $('#first').css('display') === "block") {
        $('#mainimg').css({ display: "block" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#first').css('display') === "block") {
        $('#mainimg').toggle();
        $('#first').toggle();
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#first').css('display') === "none") {
        $('#mainimg').css({ display: "none" });
        $('#first').css({ display: "block" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "block" && $('#first').css('display') === "none") {
        $('#mainimg').toggle();
        $('#first').toggle();
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
       // $('#fifth').css({ display: "none" });
    }


});

$("#two2").click(async function () {
    if ($('#mainimg').css('display') === "block" && $('#second').css('display') === "block") {
        $('#mainimg').css({ display: "block" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#second').css('display') === "block") {
        $('#mainimg').toggle();
        $('#second').toggle();
        $('#first').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#second').css('display') === "none") {
        $('#mainimg').css({ display: "none" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "block" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "block" && $('#second').css('display') === "none") {
        $('#mainimg').toggle();
        $('#second').toggle();
        $('#first').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }


});

$("#three3").click(async function () {
    if ($('#mainimg').css('display') === "block" && $('#third').css('display') === "block") {
        $('#mainimg').css({ display: "block" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        ///$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#third').css('display') === "block") {
        $('#mainimg').toggle();
        $('#third').toggle();
        $('#second').css({ display: "none" });
        $('#first').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#third').css('display') === "none") {
        $('#mainimg').css({ display: "none" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "block" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "block" && $('#third').css('display') === "none") {
        $('#mainimg').toggle();
        $('#third').toggle();
        $('#second').css({ display: "none" });
        $('#first').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }


});

$("#four4").click(async function () {
    if ($('#mainimg').css('display') === "block" && $('#fourth').css('display') === "block") {
        $('#mainimg').css({ display: "block" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#fourth').css('display') === "block") {
        $('#mainimg').toggle();
        $('#fourth').toggle();
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#first').css({ display: "none" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#fourth').css('display') === "none") {
        $('#mainimg').css({ display: "none" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "block" });
        //$('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "block" && $('#fourth').css('display') === "none") {
        $('#mainimg').toggle();
        $('#fourth').toggle();
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#first').css({ display: "none" });
       //$('#fifth').css({ display: "none" });
    }


});

document.querySelectorAll(".post").forEach(post => {
    const postId = post.dataset.postId;
    const ratings = post.querySelectorAll(".post-rating");
    const likeRating = ratings[0];

    ratings.forEach(rating => {
        const button = rating.querySelector(".post-rating-button");
        const count = rating.querySelector(".post-rating-count");

        button.addEventListener("click", async () => {

            rating.classList.add("post-rating-selected");

            ratings.forEach(rating => {
                if (rating.classList.contains("post-rating-selected")) {
                    const count = rating.querySelector(".post-rating-count");

                    count.textContent = Math.max(0, Number(count.textContent) + 1);
                    rating.classList.remove("post-rating-selected");
                }
            });


            const likeOrDislike = likeRating === rating ? "like" : "dislike";
        });
    });
});

/*
$("#five5").click(async function () {
    if ($('#mainimg').css('display') === "block" && $('#fifth').css('display') === "block") {
        $('#mainimg').css({ display: "block" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        $('#fifth').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#fifth').css('display') === "block") {
        $('#mainimg').toggle();
        $('#fifth').toggle();
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        $('#first').css({ display: "none" });
    }
    else if ($('#mainimg').css('display') === "none" && $('#fifth').css('display') === "none") {
        $('#mainimg').css({ display: "none" });
        $('#first').css({ display: "none" });
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        $('#fifth').css({ display: "block" });
    }
    else if ($('#mainimg').css('display') === "block" && $('#fifth').css('display') === "none") {
        $('#mainimg').toggle();
        $('#fifth').toggle();
        $('#second').css({ display: "none" });
        $('#third').css({ display: "none" });
        $('#fourth').css({ display: "none" });
        $('#first').css({ display: "none" });
    }


});
*/



/*
function one() {
    $(document).ready(function () {
        if ($('#mainimg').css('display') === "block" && $('#first').css('display') === "block") {
            $('#mainimg').css({ display: "block" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#first').css('display') === "block") {
            $('#mainimg').toggle();
            $('#first').toggle();
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#first').css('display') === "none") {
            $('#mainimg').css({ display: "none" });
            $('#first').css({ display: "block" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "block" && $('#first').css('display') === "none") {
            $('#mainimg').toggle();
            $('#first').toggle();
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
    });

}
function two() {
    $(document).ready(function () {
        if ($('#mainimg').css('display') === "block" && $('#second').css('display') === "block") {
            $('#mainimg').css({ display: "block" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#second').css('display') === "block") {
            $('#mainimg').toggle();
            $('#second').toggle();
            $('#first').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#second').css('display') === "none") {
            $('#mainimg').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "block" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "block" && $('#second').css('display') === "none") {
            $('#mainimg').toggle();
            $('#second').toggle();
            $('#first').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
    });
}
function three() {
    $(document).ready(function () {
        if ($('#mainimg').css('display') === "block" && $('#third').css('display') === "block") {
            $('#mainimg').css({ display: "block" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#third').css('display') === "block") {
            $('#mainimg').toggle();
            $('#third').toggle();
            $('#second').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#third').css('display') === "none") {
            $('#mainimg').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "block" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "block" && $('#third').css('display') === "none") {
            $('#mainimg').toggle();
            $('#third').toggle();
            $('#second').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
    });
}
function four() {
    $(document).ready(function () {
        if ($('#mainimg').css('display') === "block" && $('#fourth').css('display') === "block") {
            $('#mainimg').css({ display: "block" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#fourth').css('display') === "block") {
            $('#mainimg').toggle();
            $('#fourth').toggle();
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#fourth').css('display') === "none") {
            $('#mainimg').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "block" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "block" && $('#fourth').css('display') === "none") {
            $('#mainimg').toggle();
            $('#fourth').toggle();
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
    });
}
function five() {
    $(document).ready(function () {
        if ($('#mainimg').css('display') === "block" && $('#fifth').css('display') === "block") {
            $('#mainimg').css({ display: "block" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#fifth').css('display') === "block") {
            $('#mainimg').toggle();
            $('#fifth').toggle();
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#first').css({ display: "none" });
        }
        else if ($('#mainimg').css('display') === "none" && $('#fifth').css('display') === "none") {
            $('#mainimg').css({ display: "none" });
            $('#first').css({ display: "none" });
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#fifth').css({ display: "block" });
        }
        else if ($('#mainimg').css('display') === "block" && $('#fifth').css('display') === "none") {
            $('#mainimg').toggle();
            $('#fifth').toggle();
            $('#second').css({ display: "none" });
            $('#third').css({ display: "none" });
            $('#fourth').css({ display: "none" });
            $('#first').css({ display: "none" });
        }
    });
}
*/