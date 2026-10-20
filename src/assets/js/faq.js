document.querySelectorAll("[id^='faq-'] .cs-faq-item").forEach((item) => {
	const button = item.querySelector(".cs-button");
	if (!button) return;
	button.addEventListener("click", () => {
		const isOpen = item.classList.toggle("active");
		button.setAttribute("aria-expanded", isOpen ? "true" : "false");
	});
});
