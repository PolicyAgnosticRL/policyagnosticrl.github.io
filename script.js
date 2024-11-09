document.addEventListener("DOMContentLoaded", function () {
	new fullpage("#fullpage", {
		showActiveTooltip: true,
		// scrollBar: true,
		scrollOverflow: true,
		navigation: true,
		lazyLoading: true,
		lazyLoadThreshold: 0,
		anchors: [
			"intro",
			"motivation_rl",
			"motivation_actor_critic",
			"method",
			"results",
		],
	});
});
