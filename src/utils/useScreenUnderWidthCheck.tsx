import { useEffect, useState } from "react";

const useScreenUnderWidthCheck = (breakpoint: number = 768): boolean => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBelowBreakpoint;
};

export default useScreenUnderWidthCheck;
