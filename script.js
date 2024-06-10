const openMobileMenu = document.querySelector(".hamb-icon");
const mobileMenu = document.querySelector(".header-mobile-menu");
const closeMobileMenu = document.querySelector(".close-icon");
const headerMobileSections = document.querySelectorAll('.header-mobile-section');

openMobileMenu.addEventListener("click", ()=> {
	mobileMenu.classList.add("show");
	openMobileMenu.classList.add("hide");
	closeMobileMenu.classList.add("show");
});
closeMobileMenu.addEventListener("click", ()=> {
	mobileMenu.classList.remove("show");
	openMobileMenu.classList.remove("hide");
	closeMobileMenu.classList.remove("show");
})
headerMobileSections.forEach(section => {
	const headerItem = section.querySelector(".header-mobile-item");
	const submenu = section.querySelector(".header-mobile-submenu");
	const arrow = section.querySelector(".header-mobile-arrow");
	headerItem.addEventListener("click", ()=> {
		submenu.classList.toggle("show");
		arrow.classList.toggle("show");
	})
})
