const navigation=document.getElementById('navbar__list');
const sections=document.querySelectorAll('section');
let nav='';
//build the nav bar menu
const navbuilder=()=>{
	sections.forEach(section=>{
		const sectionID=section.id;
		const sectiondata=section.dataset.nav;
		nav+=`<li><a class="list" href="#${sectionID}">${sectiondata} </a></li>`;
		
	});
	navigation.innerHTML=nav;
	
};
navbuilder();
//get the position of the given section
const sectionPosition=(section)=>{
	return Math.floor(section.getBoundingClientRect().top);
	
};
//remove active class
const removeActive=(section)=>{
	section.classList.remove('your-active-class');
};
//add active class to the current active section
 const addActive=(condition,section)=>{
	 if(condition){
		 section.classList.add('your-active-class');
	 };
	 
 };
 //check which section is active
 const activeSection=()=>{
	 sections.forEach(section=>{
		  const mysection=sectionPosition(section);
		  active=()=>mysection>0&&mysection<=200;
		  removeActive(section);
		    addActive(active(),section);
		 
	 });
	 
	
 };
 window.addEventListener('scroll', activeSection);

 
 
 
 
 
 
