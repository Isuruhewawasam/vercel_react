import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // pathname එක වෙනස් වූ සැණින් window එක ඉහළට scroll කරන්න
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // මෙයට කිසිම HTML එකක් අවශ්‍ය නැහැ
}