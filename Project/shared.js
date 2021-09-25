var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var selectModalButton = document.querySelector(".modal button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

for (var i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener("click", function () {
		// modal.style.display = 'block';
		// backdrop.style.display = 'block';
		// modal.className = 'open'; // this will overwrite
		modal.classList.add("open");
		backdrop.style.display = "block";
		setTimeout(function () {
			backdrop.classList.add("open");
		}, 10);
	});
}
backdrop.addEventListener("click", function () {
	// mobileNav.style.display = 'none';
	mobileNav.classList.remove("open");
	closeModal();
});

if (selectModalButton) {
	selectModalButton.addEventListener("click", closeModal);
}

function closeModal() {
	// backdrop.style.display = 'none';
	// modal.style.display = 'none';
	if (modal) {
		modal.classList.remove("open");
	}

	backdrop.classList.remove("open");
	setTimeout(function () {
		backdrop.style.display = "none";
	}, 200);
}

toggleButton.addEventListener("click", function () {
	mobileNav.classList.add("open");
	backdrop.style.display = "block";
	setTimeout(function () {
		backdrop.classList.add("open");
	}, 10);
});

// ctaButton.addEventListener("animationstart", function (e) {
// 	console.log("Animation start", e);
// });
// ctaButton.addEventListener("animationend", function (e) {
// 	console.log("Animation ended", e);
// });
// ctaButton.addEventListener("animationiteration", function (e) {
// 	console.log("Animation iteration", e);
// });
