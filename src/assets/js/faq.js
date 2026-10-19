// FAQ accordion (faq-993 and any other stitch using .cs-faq-item / .cs-button).
// Load with <script defer src="/assets/js/faq.js"></script> on pages that have an FAQ.
document.querySelectorAll("[id^='faq-'] .cs-faq-item").forEach((item) => {
	const button = item.querySelector(".cs-button");
	if (!button) return;
	button.addEventListener("click", () => {
		const isOpen = item.classList.toggle("active");
		button.setAttribute("aria-expanded", isOpen ? "true" : "false");
	});
});
