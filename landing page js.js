const navigation=document.getElementById('navbar__list');
const sections=document.querySelectorAll('section');
let nav='';
const navbuilder=()=>{
	sections.forEach(section=>{
		const sectionID=section.id;
		const sectiondata=section.dataset.nav;
		nav+=`<li><a class="list" href="#${sectionID}">${sectiondata} </a></li>`;
		
	});
	navigation.innerHTML=nav;
	
};
navbuilder();
const sectionPosition=(section)=>{
	return Math.floor(section.getBoundingClientRect().top);
	
};
const removeActive=(section)=>{
	section.classList.remove('your-active-class');
};
 const addActive=(condition,section)=>{
	 if(condition){
		 section.classList.add('your-active-class');
	 };
	 
 };
 const activeSection=()=>{
	 sections.forEach(section=>{
		  const mysection=sectionPosition(section);
		  active=()=>mysection>0&&mysection<=200;
		  removeActive(section);
		    addActive(active(),section);
		 
	 });
	 
	
 };
 window.addEventListener('scroll', activeSection); 
 
 
 
 
 
 
 
 
 
 
 