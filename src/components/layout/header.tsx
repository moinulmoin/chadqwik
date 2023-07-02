import { component$ } from "@builder.io/qwik";
import ThemeSwitcher from "~/components/theme-switcher";
import { QwikLogo } from "../icons/qwik";

export const Header = component$(() => {
  return (
    <header>
      <div class="container px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a href="/">
              <span class="sr-only">Qwik Logo</span>
              <QwikLogo />
            </a>
          </div>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
});
