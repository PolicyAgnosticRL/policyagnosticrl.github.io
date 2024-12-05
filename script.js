// document.addEventListener("DOMContentLoaded", function () {
// 	new fullpage("#fullpage", {
// 		showActiveTooltip: true,
// 		// scrollBar: true,
// 		scrollOverflow: true,
// 		navigation: true,
// 		lazyLoading: true,
// 		lazyLoadThreshold: 0,
// 		anchors: [
// 			"intro",
// 			"motivation_rl",
// 			"motivation_actor_critic",
// 			"method",
// 			"results",
// 		],
// 	});
// });

document.addEventListener("DOMContentLoaded", function () {
	const lazyVideos = document.querySelectorAll("video[data-src]");

	const lazyLoad = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const video = entry.target;
				video.src = video.dataset.src;
				video.load();

				video.querySelectorAll("source").forEach((source) => {
					source.src = source.dataset.src;
				});

				observer.unobserve(video);
			}
		});
	};

	const observer = new IntersectionObserver(lazyLoad, {
		threshold: 0.25, // Trigger loading when 25% of the video is visible
	});

	lazyVideos.forEach((video) => observer.observe(video));
});

// Hidden tabs functionality
// Get all tab buttons and tab content elements
const tabButtons = document.querySelectorAll("[data-tabs-target]");
const tabContents = document.querySelectorAll("#eval_tab_contents > div");

// Add click event listeners to the tab buttons
tabButtons.forEach((tabButton) => {
	tabButton.addEventListener("click", () => {
		// Remove the 'active-tab' class from all buttons
		tabButtons.forEach((button) =>
			button.classList.add(
				"border-transparent",
				"text-gray-400",
				"hover:text-gray-600",
				"hover:border-gray-300",
				"dark:hover:text-gray-300",
			),
		);
		tabButtons.forEach((button) => button.classList.remove("text-gray-900"));

		// Add the 'active-tab' class to the clicked button
		tabButton.classList.remove(
			"border-transparent",
			"text-gray-400",
			"hover:text-gray-600",
			"hover:border-gray-300",
			"dark:hover:text-gray-300",
		);
		tabButton.classList.add("text-gray-900");

		// Hide all tab contents
		tabContents.forEach((content) => content.classList.add("hidden"));

		// Show the corresponding tab content
		const targetId = tabButton.getAttribute("data-tabs-target");
		const targetContent = document.querySelector(targetId);
		targetContent.classList.remove("hidden");
	});
});
