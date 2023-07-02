import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<section class="min-h-[calc(100vh-108px)] py-40">
			<div class="container">
				<h1 class="text-4xl font-extrabold tracking-tight text-center lg:text-5xl animate-in zoom-in-0 duration-500">
					Hello world, this is ChadQwik!
				</h1>
			</div>
		</section>
	);
});

export const head: DocumentHead = {
	title: "ChadQwik Template",
	meta: [
		{
			name: "description",
			content: "This is ChadQwik Template",
		},
	],
};
