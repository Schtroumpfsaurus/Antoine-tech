document.addEventListener("DOMContentLoaded", function() {

    const homeBtn = document.getElementById("homeBtn");
    const skillsBtn = document.getElementById("skillsBtn");
    const experienceBtn = document.getElementById("experienceBtn");
    const educationBtn = document.getElementById("educationBtn");
    const projectsBtn = document.getElementById("projectsBtn");
    const legalnoticeBtn = document.getElementById("legalnoticeBtn");
    const frenchBtn = document.getElementById("frenchBtn");

    function hideAllPages() {
        const pages = document.querySelectorAll(".page-content");
        pages.forEach(page => {
            page.classList.remove("active");
        });
    }

    function showPage(pageId) {
        hideAllPages();
        const page = document.getElementById(pageId);
        page.classList.add("active");
    }

    homeBtn.addEventListener("click", function() {
        showPage("home");
    });

    skillsBtn.addEventListener("click", function() {
        showPage("skills");
    });

    experienceBtn.addEventListener("click", function() {
        showPage("experience");
    });

    educationBtn.addEventListener("click", function() {
        showPage("education");
    })

    projectsBtn.addEventListener("click", function() {
        showPage("projects");
    })

    legalnoticeBtn.addEventListener("click", function() {
	    showPage("legalnotice");
    })

    frenchBtn.addEventListener("click", function() {
        showPage("french");
    })
});

