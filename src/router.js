import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Top",
			component: () => import("@/pages/Top.vue"),
		},
	],
});

export default router;
