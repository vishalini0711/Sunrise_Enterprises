import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport,
 * so the navbar can highlight the active link while scrolling.
 */
export default function useActiveSection(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeId;
}
