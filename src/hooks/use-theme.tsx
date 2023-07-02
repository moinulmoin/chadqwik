import { useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { ThemeContext } from "~/shared/context";

export function useTheme() {
	const darkMode = useSignal(false);
	useContextProvider(ThemeContext, darkMode);

	useVisibleTask$(async () => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			darkMode.value = true;
		} else if (window.localStorage.theme) {
			darkMode.value = window.localStorage.getItem("theme") === "dark";
		}
	});

	useVisibleTask$(async ({ track }) => {
		track(() => darkMode.value);
		window.localStorage.setItem("theme", darkMode.value ? "dark" : "light");
	});

	return { darkMode };
}
