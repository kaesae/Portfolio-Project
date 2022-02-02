$(() => {


// const toggleBar = document.querySelector('#navbar');
// const $aboutMeDiv = document.querySelector('.about-me');
// const $projectsDiv = document.querySelector('.projects');
// const $contactMeDiv = document.querySelector('.contact-me');


// only displays projects when click on About Me
// toggleButton.addEventListener('click', () => {
//     if($aboutMeDiv.style.display === 'block') {
//         $($projectsDiv).css("display", "none")
//         $($contactMeDiv).css("display", "none")
//     } else if ($projectsDiv.style.display = 'block') {
//         $($aboutMeDiv).css("display", "none")
//         $($contactMeDiv).css("display", "none")
//     } else if ($contactMeDiv.style.display === 'block') {
//         $($projectsDiv).css("display", "none")
//         $($aboutMeDiv).css("display", "none")
//     } else {
//         $($aboutMeDiv).css("display", "none")
//         $($projectsDiv).css("display", "none")
//         $($contactMeDiv).css("display", "none")
//     }
// })

const toggleAboutMe = document.querySelector('.navbar1');
const toggleProjects = document.querySelector('.navbar2');
const toggleContactMe = document.querySelector('.navbar3');
const $aboutMeDiv = document.querySelector('.about-me');
const $projectsDiv = document.querySelector('.projects');
const $contactMeDiv = document.querySelector('.contact-me');


toggleAboutMe.addEventListener('click', () => {
    if($aboutMeDiv.style.display === 'block') {
        $($projectsDiv).css("display", "none")
        $($contactMeDiv).css("display", "none")
    } else {
        $($aboutMeDiv).css("display", "block")
        $($projectsDiv).css("display", "none")
        $($contactMeDiv).css("display", "none")
    }
})

toggleProjects.addEventListener('click', () => {
    if($projectsDiv.style.display === 'block') {
        $($aboutMeDiv).css("display", "none")
        $($contactMeDiv).css("display", "none")
    } else {
        $($aboutMeDiv).css("display", "none")
        $($projectsDiv).css("display", "block")
        $($contactMeDiv).css("display", "none")
    }
})

toggleContactMe.addEventListener('click', () => {
    if($contactMeDiv.style.display === 'block') {
        $($projectsDiv).css("display", "none")
        $($aboutMeDiv).css("display", "none")
    } else {
        $($aboutMeDiv).css("display", "none")
        $($projectsDiv).css("display", "none")
        $($contactMeDiv).css("display", "block")
    }
})



    // .onclick function()
    // window.open email
});
