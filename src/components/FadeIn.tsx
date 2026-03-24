"use client";

import { useInView } from "@/hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
};

export default function FadeIn({ children, className = "", delay = 0 }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
