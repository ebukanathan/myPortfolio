/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* ====validate if constant exist=======*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*======close menu on mobile========*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}

navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader=()=>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50vh add the class 'blur-header'

    this.scrollY >= 50 ? header.classList.add('blur__header')
                       : header.classList.remove('blur__header')
}

window.addEventListener('scroll',blurHeader)


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')


const sendEmail = (e)=>{
    e.preventDefault()
// serviceID - templateID - #form - publicKey
emailjs.send('service_14g8xs9','template_4wffmza','contact-form','UkvV7AucFO4YFcvIL')
.then(()=>{
    //show sent message
    contactMessage.textContent='message sent successfully ✔'
},()=>{
    //show error
    contactMessage.textContent='error sending message '

})
}

contactForm.addEventListener('submit',sendEmail)



/*=============== SHOW SCROLL UP ===============*/ 

const scrollup =()=>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >=350 ? scrollUp.classList.add('show__scrollup'):scrollUp.classList.remove('show__scrollup')
                        
} ;

window.addEventListener('scroll',scrollup)




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
