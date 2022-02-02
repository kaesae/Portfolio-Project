# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description                             | Complete
|Day 2| Wireframes / Priority Matrix / Timeline         | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.)    | Complete
|Day 4| MVP & Bug Fixes                                 | Complete
|Day 5| Final Touches                                   | Complete
|Day 6| Present                                         | Complete


## Project Description

The purpose of this project is to create a portofolio showcasing my skills in HTML, CSS, and JavaScript/JQuery. HTML will allow me to add and structure content. Colors, background images, fonts, and positioning will be modified using CSS. JavaScript and JQuery will be the metaphorical "bells and whistle" of the website. They'll add transitions and transformations, making my website more dynamic and eye-interactive.

## Wireframes

Include images of wireframe with a description of the specific wireframe.   

- [Mobile/Tablet/Desktop](https://ibb.co/dMhPRmF)


## Time/Priority Matrix 

[Link](https://ibb.co/HDCZgbd)

 - Total Time: `25.5 hours`

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Layout
- Background Image
- About Me and Contents are filled, while Projects has placeholder projects/images.
- Responsive Design with Tablet and PC sizing

#### PostMVP 

- Extra Images
- Image Carousel

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into smaller components.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 

| Layout              | H | 5hr   | 9hr |
| About Me            | H | 1.5hr | 45min |
| Projects            | H | 1.5hr | 10min |  
| Contact             | H | 2hr   | 10min |
| Grid Page           | H | 2hr   | 90min | 
| Grid Projects       | H | 1hr   | 2hr |
| Responsive Tablet   | M | 3hr   | 2hr |
| Responsive PC       | M | 5hr   | 3hr |
| Debugging           | M | 3hr   | 15hr |


| Total | H | 34.5hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 

| Arrows                 | L | 1hr | hr |
| Image Carousel         | L | 3hr | hr |
| Interactive Nav Bar    | M | 2hr | hr |

| Total | H | 6hrs| hrs |

## Additional Libraries
 - JavaScript/JQuery to animate sections moving when clicked on PC resolution.

## Code Snippet
 - Show/Hide Div function that connects divs in a vertical navbar to divs in a body.

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

## Cited 
 - Show/Hide Div
 - Video: https://www.youtube.com/watch?v=R4i6k-yEdH8&t=191s


## Issues and Resolutions
**ERROR**: Media Queries not reading correctly with just mix-wdith or max-width.
**RESOLUTION**: Use both min- and max-width for each media query.

**ERROR**: Double checking codes. Looking for -s's where there should and shouldn't be.
**RESOLUTION**: grid-column-rows and grid-rows to grid-row

