
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Default to false (desktop-like behavior) for SSR and initial client render
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // This effect runs only on the client, after hydration
    const checkDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkDevice(); // Check on mount
    // Debounce or throttle resize listener if performance becomes an issue
    window.addEventListener("resize", checkDevice); 

    return () => window.removeEventListener("resize", checkDevice);
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return isMobile;
}
