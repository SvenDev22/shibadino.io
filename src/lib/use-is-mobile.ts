import { useWindow } from "./use-window";

export function useIsMobile() {
  const { dimensions } = useWindow();
  return dimensions.width && dimensions.width < 768;
}
