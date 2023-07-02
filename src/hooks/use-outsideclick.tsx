import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export function useOutsideClick() {
  const ref = useSignal<Element>();
  const isOutside = useSignal(false);
  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (ref.value) {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.value && !ref.value.contains(event.target as Node)) {
          isOutside.value = true;
        } else {
          isOutside.value = false;
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  });
  return { ref, isOutside };
}
