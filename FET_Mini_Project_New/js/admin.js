"use strict";

$(document).ready(() => {
    if (localStorage.getItem("template1")) {
        $(".temp1").remove();
    }
    if (localStorage.getItem("template2")) {
        $(".temp2").remove();
    }
    if (localStorage.getItem("template3")) {
        $(".temp3").remove();
    }
    if (localStorage.getItem("template4")) {
        $(".temp4").remove();
    }
    if (localStorage.getItem("template5")) {
        $(".temp5").remove();
    }

    $("#btnOne").click(() => {
        $(".temp1").remove();
        localStorage.setItem("template1", "temp1");
    });

    $("#btnTwo").click(() => {
        $(".temp2").remove();
        localStorage.setItem("template2", "temp2");
    });

    $("#btnThree").click(() => {
        $(".temp3").remove();
        localStorage.setItem("template3", "temp3");
    });

    $("#btnFour").click(() => {
        $(".temp4").remove();
        localStorage.setItem("template4", "temp4");
    });

    $("#btnFive").click(() => {
        $(".temp5").remove();
        localStorage.setItem("template5", "temp5");
    });
});

const btnsOpenNext = document.querySelectorAll(".btn--Next");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--2");
const nav = document.querySelector(".nav");

const openNext = function(e) {
    e.preventDefault(); // prevents the page jumping up

    window.location.href = "index.html";
};

// Two buttons :: 2 ways to open modal : Open Account/Open your free account today!(@ bottom)
btnsOpenNext.forEach(function(btn) {
    btn.addEventListener("click", openNext);
});

// 1 :: Smooth-Scroll to Features

// <button class="btn--scroll-to"> [ Learn More ↓ ]

btnScrollTo.addEventListener("click", function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////// 2 :: Navbar scrolling ///////////////////////////////////

document.querySelector(".nav__links").addEventListener("click", function(e) {
    console.log(e.target); // shows the element(link) which is clicked
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        console.log(id); // shows the link which is clicked
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

/////////////////////////////////////////// 4 :: Menu fade animation [ Templates  Report ] ///////////////////////////////////

const handleHover = function(e, opacity) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link"); // All 4 elements with 'nav__link' class

        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach(function(el) {
            if (el !== link) el.style.opacity = opacity;
        });
        logo.style.opacity = opacity;
    }
};

nav.addEventListener("mouseover", function(e) {
    handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function(e) {
    handleHover(e, 1);
});

/////////////////////////////////////////// 5 :: Sticky Navigation ///////////////////////////////////

//////////////////////////////  :::::::: New way
// make nav sticky the moment header moves completely out of the view
// after header Templates sections starts

const header = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight); // 90

const stickyNav = function(entries) {
    const [entry] = entries; // de-structuring
    console.log(entry);

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};

const headObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headObserver.observe(header);

/////////////////////////////////////////// 6 :: Reveal elements on scroll  ///////////////////////////////////
// reveal [ section1/section2/section3 ] on scroll

// 1) 'section--hidden' :: it was only present in css, but not applied to sections
// 2) section--hidden :: class applied to all sections to hide them
// 3) remove the class as each section is approached

const allSections = document.querySelectorAll(".section"); // All 4 sections

const revealSection = function(entries, observer) {
    const [entry] = entries; // de-structuring
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target); // stops displaying in console
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
});

/////////////////////////////////////////// 7 :: Lazy Loading Images  ///////////////////////////////////

const imgTargets = document.querySelectorAll("img[data-src]"); // only the ones to be lazy-loaded
console.log(imgTargets); // list the 3 images

const loadImg = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function() {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "+200px",
});

imgTargets.forEach(function(img) {
    imgObserver.observe(img);
});

/////////////////////////////////////////// 8 ::Delete a template ///////////////////////////////////

function callSignout() {
    window.location.href = "http://127.0.0.1:5501/html/adminLogin.html";
}


function getDownloads1() {
    let x;
    console.log("Inside admin js")
    $(document).ready(
        () => {
            $.ajax({
                url: "http://localhost:3000/Template1",
                method: "GET",
                dataType: "json",
                async: false,
                success: function(data) {
                    console.log("fetched successfully" + data);
                    x = data.count;
                    document.getElementById("total1").innerHTML = `Total downloads of Template1<br>${x}`;
                    console.log(x)
                },
                error: function() {
                    console.log("Error fetching downloads");
                }
            });
        }
    );

}

getDownloads1();

function getDownloads2() {
    let y;
    console.log("Inside admin js")
    $(document).ready(
        () => {
            $.ajax({
                url: "http://localhost:3000/Template2",
                method: "GET",
                dataType: "json",
                async: false,
                success: function(data) {
                    console.log("fetched successfully" + data);
                    y = data.count;
                    document.getElementById("total2").innerHTML = `Total downloads of template2<br>${y}`;
                    console.log(y)
                },
                error: function() {
                    console.log("Error fetching downloads");
                }
            });
        }
    );

}

getDownloads2();




function getDownloads3() {
    let z;
    console.log("Inside admin js")
    $(document).ready(
        () => {
            $.ajax({
                url: "http://localhost:3000/Template3",
                method: "GET",
                dataType: "json",
                async: false,
                success: function(data) {
                    console.log("fetched successfully" + data);
                    z = data.count;
                    document.getElementById("total3").innerHTML = `Total downloads of Template3<br>${z}`;
                    console.log(z)
                },
                error: function() {
                    console.log("Error fetching downloads");
                }
            });
        }
    );

}

getDownloads3();