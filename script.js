//<<<<<<<<<<<<<<<<<<< code for active links >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
};
//<<<<<<<<<<<<<<<<<<< sticky header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY >100)

// <<<<<<<<<<<<<<<<<toggle menubar >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function showMenu(){
    var x = document.getElementById("header")
    if (x.className==="header"){
        x.classList.add("active")
    }

}


//<<<<<<<<<<<<<<<<<<< Active class >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const navLinkActive=document.querySelectorAll(".nav-link");

navLinkActive.forEach(navLinkActive=>{
    navLinkActive.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('.active');
        navLinkActive.classList.add('active')
    })
})

// for about transition 
