import { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let requestRef;

    const updateCursorPosition = (e) => {
      const { clientX, clientY } = e;
      if (dotRef.current && ringRef.current) {
        cancelAnimationFrame(requestRef);
        requestRef = requestAnimationFrame(() => {
          dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
          ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
        });
      }
    };

    const handleMouseHover = (e) => {
      if (
        e.target.tagName?.toLowerCase() === "a" ||
        e.target.tagName?.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        window.getComputedStyle(e.target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Use passive listeners for better performance
    window.addEventListener("mousemove", updateCursorPosition, { passive: true });
    window.addEventListener("mouseover", handleMouseHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseHover);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovering ? "hoverING" : ""}`}
      ></div>
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovering ? "hoverING" : ""}`}
      ></div>
    </>
  );
};

export default CustomCursor;
