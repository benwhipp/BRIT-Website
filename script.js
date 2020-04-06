const clientSectors = document.getElementById('client-sectors');
const services = document.getElementById('services');
const setsApart = document.getElementById('sets-apart');
const contact = document.getElementById('contact')
const navOffset = 75;
const clientSectorsPosition = clientSectors.getBoundingClientRect().top + navOffset;
const servicesPosition = services.getBoundingClientRect().top + navOffset;
const setsApartPosition = setsApart.getBoundingClientRect().top + navOffset;
const contactPosition = contact.getBoundingClientRect().top + navOffset;

console.log(`clientSectors postion: ${clientSectorsPosition}`);
console.log(`services postion: ${servicesPosition}`);
console.log(`setsApart postion: ${setsApartPosition}`);
console.log(`contact postion: ${contactPosition}`);

document.getElementById('client-sectors-button').onclick = () => {
 window.scrollTo({
     top: clientSectorsPosition,
     behavior: 'smooth'
 })  
};

document.getElementById('services-button').onclick = () => {
 window.scrollTo({
     top: servicesPosition,
     behavior: 'smooth'
 })  
};

document.getElementById('about-us-button').onclick = () => {
 window.scrollTo({
     top: setsApartPosition,
     behavior: 'smooth'
 })  
};

document.getElementById('contact-button').onclick = () => {
 window.scrollTo({
     top: contactPosition,
     behavior: 'smooth'
 })  
};

/*
document.getElementById('services-button').onclick = () => {
 document.getElementById('services').scrollIntoView({behavior: 'smooth', block: 'center'});   
}

document.getElementById('about-us-button').onclick = () => {
 document.getElementById('sets-apart').scrollIntoView({behavior: 'smooth', block: 'center'});   
}

document.getElementById('contact-button').onclick = () => {
 document.getElementById('contact').scrollIntoView({behavior: 'smooth'});   
}*/

document.getElementById('footer-date').innerHTML = new Date().getFullYear();