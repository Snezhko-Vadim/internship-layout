let londonDetailsBtn = document.getElementById('london-details-btn');
let newyorkDetailsBtn = document.getElementById('newyork-details-btn');
let parisDetailsBtn = document.getElementById('paris-details-btn');

londonDetailsBtn.addEventListener('click', (event)=>{
    let londonDetailsTitle = document.getElementById('london-details-title');
    let londonDetailsSubTitle = document.getElementById('london-details-sub-title');
    let londonDetailsDescription = document.getElementById('london-details-description');
    let liTitle = document.getElementById('li-title');
    let liSubTitle = document.getElementById('li-sub-title');
    let liDescription = document.getElementById('li-description');
    let contactInformationLocation = document.getElementById('contact-information-location');
    liTitle.innerText = londonDetailsTitle.innerText;
    liSubTitle.innerText = londonDetailsSubTitle.innerText;
    liDescription.innerText = londonDetailsDescription.innerText;
    contactInformationLocation.innerText = londonDetailsSubTitle.innerText;
    event.target.style.backgroundColor='#00c8c8';
    event.target.style.color='white';
    event.target.style.borderColor='#00c8c8';
    let locationsItems=document.getElementsByClassName('locations__item');
    for(item of locationsItems){
        let btn = item.getElementsByClassName('btn')[0];
        if(btn.id !== event.target.id ){
            btn.style.backgroundColor='white';
            btn.style.color='black';
            btn.style.borderColor='black';
        }
    }
    let map = document.getElementById('map');
    map.children[0].setAttribute('src',"https://www.google.com/maps/d/embed?mid=17bPJAybF_d-hkur5TInJdfrqfj22RVO6&hl=ru");
})
newyorkDetailsBtn.addEventListener('click', (event)=>{
    let newyorkDetailsTitle = document.getElementById('newyork-details-title');
    let newyorkDetailsSubTitle = document.getElementById('newyork-details-sub-title');
    let newyorkDetailsDescription = document.getElementById('newyork-details-description');
    let liTitle = document.getElementById('li-title');
    let liSubTitle = document.getElementById('li-sub-title');
    let liDescription = document.getElementById('li-description');
    let contactInformationLocation = document.getElementById('contact-information-location');
    liTitle.innerText = newyorkDetailsTitle.innerText;
    liSubTitle.innerText = newyorkDetailsSubTitle.innerText;
    liDescription.innerText = newyorkDetailsDescription.innerText;
    contactInformationLocation.innerText = newyorkDetailsSubTitle.innerText;
    event.target.style.backgroundColor='#00c8c8';
    event.target.style.color='white';
    event.target.style.borderColor='#00c8c8';
    let locationsItems=document.getElementsByClassName('locations__item');
    for(item of locationsItems){
        let btn = item.getElementsByClassName('btn')[0];
        if(btn.id !== event.target.id ){
            btn.style.backgroundColor='white';
            btn.style.color='black';
            btn.style.borderColor='black';
        }
    }
    let map = document.getElementById('map');
    map.children[0].setAttribute("src","https://www.google.com/maps/d/embed?mid=1u14vstwcshGLm1t1caF5pdom5ZlZ4L9b")
})
parisDetailsBtn.addEventListener('click', (event)=>{
    let parisDetailsTitle = document.getElementById('paris-details-title');
    let parisDetailsSubTitle = document.getElementById('paris-details-sub-title');
    let parisDetailsDescription = document.getElementById('paris-details-description');
    let liTitle = document.getElementById('li-title');
    let liSubTitle = document.getElementById('li-sub-title');
    let liDescription = document.getElementById('li-description');
    let contactInformationLocation = document.getElementById('contact-information-location');
    liTitle.innerText = parisDetailsTitle.innerText;
    liSubTitle.innerText = parisDetailsSubTitle.innerText;
    liDescription.innerText = parisDetailsDescription.innerText;
    contactInformationLocation.innerText = parisDetailsSubTitle.innerText;
    event.target.style.backgroundColor='#00c8c8';
    event.target.style.color='white';
    event.target.style.borderColor='#00c8c8';
    let locationsItems=document.getElementsByClassName('locations__item');
    for(item of locationsItems){
        let btn = item.getElementsByClassName('btn')[0];
        if(btn.id !== event.target.id ){
            btn.style.backgroundColor='white';
            btn.style.color='black';
            btn.style.borderColor='black';
        }
    }
    let map = document.getElementById('map');
    map.children[0].setAttribute("src","https://www.google.com/maps/d/embed?mid=1UjWZoDrm6FX2-VCCGau1cxhz46C1NZbq")
})

window.onscroll = function() {
    let scrolled = window.pageYOffset;
    let headerHeight = document.getElementsByClassName('header')[0].offsetHeight;
    let navBar = document.getElementsByClassName("nav-bar")[0];
    let navBarHeight = navBar.offsetHeight;
    if(scrolled >= headerHeight-navBarHeight){
        navBar.classList.add("nav-bar_fixed-top");
    }
    else{
        navBar.classList.remove("nav-bar_fixed-top");
    }
}