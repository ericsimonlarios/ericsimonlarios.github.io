let options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.10, 1]
};

let callback = (entries) => {
    let nav = document.querySelector('#stickyNav');
    let title = document.querySelector('#typedtext');
    let subtitle = document.querySelector('.subtitle');
    entries.forEach((entry)=>{
        // nav.classList.toggle('fixed-top', !entry.isIntersecting);
        // nav.classList.toggle('nav-bg-transparent', entry.isIntersecting);
        // nav.classList.toggle('nav-bg', !entry.isIntersecting);
        title.classList.toggle('fadeInLeft', entry.isIntersecting);
        subtitle.classList.toggle('fadeInUp', entry.isIntersecting);
        if(entry.isIntersecting){
            nav.style.top = "-500px";
            
        }
        else{
            nav.style.top = "0px";
        }
    })
}

let bioFunc = (entries) => {
    let bioSep = document.querySelector('.separator');
    let bioText1 = document.querySelector('.bio-text1');
    let bioText2 = document.querySelector('.bio-text2');
    entries.forEach((entry)=>{
        bioSep.classList.toggle('fadeInUp', entry.isIntersecting);
        bioText1.classList.toggle('fadeInRight', entry.isIntersecting);
        bioText2.classList.toggle('fadeInLeft', entry.isIntersecting);
    })
}

let skillFunc = (entries) =>{
    let skillSep = document.querySelector('.skillSep');
    entries.forEach((entry)=>{
        skillSep.classList.toggle('fadeInUp', entry.isIntersecting);
    })
}

let eviFunc = (entries) =>{
    let evidenceSep = document.querySelector('.evidenceSep');
    entries.forEach((entry)=>{
        evidenceSep.classList.toggle('fadeInUp', entry.isIntersecting);
    })
}

let leaFunc = (entries) =>{
    let assessmentText = document.querySelector('.assessment-text')
    entries.forEach((entry) =>{
        assessmentText.classList.toggle('fadeInRight', entry.isIntersecting);
    })
}

let theFunc = (entries) =>{
    let assmentText = document.querySelector('.assment-text')
    entries.forEach((entry) =>{
        assmentText.classList.toggle('fadeInRight', entry.isIntersecting);
    })
}

let lastFunc = (entries) => {
    let last = document.querySelector('.last3');
    entries.forEach((entry) => {
        last.classList.toggle('fadeInRight', entry.isIntersecting);
    })
}

let observer = new IntersectionObserver(callback, options);
let BioObserver = new IntersectionObserver(bioFunc, options);
let SkillObserver = new IntersectionObserver(skillFunc, options);
let EviObserver = new IntersectionObserver(eviFunc, options);
let leaObserver = new IntersectionObserver(leaFunc, options);
let theObserver = new IntersectionObserver(theFunc, options);
let lastObserver = new IntersectionObserver(lastFunc, options);

let target = document.querySelector('#home');
let bio = document.querySelector('#bio');
let skill = document.querySelector('#skills');
let evidence = document.querySelector('#evidences');
let learned = document.querySelector('#learned');
let theories = document.querySelector('#theories');
let last = document.querySelector('#last3');

observer.observe(target);
BioObserver.observe(bio);
SkillObserver.observe(skill);
EviObserver.observe(evidence);
leaObserver.observe(learned);
theObserver.observe(theories);
lastObserver.observe(last);




// function callback(){
//     let nav = document.querySelector('#stickyNav');
//     nav.style.top = "0px";
//     console.log("Hello World")
// }