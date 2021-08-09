import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(null);
  const handleScroll = () => {
    setScrollPosition(window.scrollY); // scroll y will count the upto 1st page content height
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll); // in custom hook adding event than must clearout the event
  }, []);

  return scrollPosition;
};

export default useScroll;
