import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export const Footer = component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <p class="text-center py-2.5">
          <a href="https://moinulmoin.com/" target="_blank">
            <span>Made with ♡ by Moinul Moin</span> |{" "}
            <span>{serverTime.value.date}</span>
          </a>
        </p>
      </div>
    </footer>
  );
});
