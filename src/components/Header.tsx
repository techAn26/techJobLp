"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "ストーリー", href: "#story" },
  { label: "ロードマップ", href: "#solution" },
  { label: "特典", href: "#features" },
  { label: "受け取る", href: "#cta" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // メニューが開いているときはbodyのスクロールをロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[var(--navy)] shadow-[0_4px_24px_rgba(2,12,27,0.7)] py-3"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* ロゴ */}
          <span className="text-[var(--teal)] font-mono text-sm font-semibold tracking-widest">
            IT就活のTETSU
          </span>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-sm text-[var(--slate-light)] hover:text-[var(--teal)] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* デスクトップCTAボタン */}
          <a
            href="#cta"
            className="hidden md:inline-block border border-[var(--teal)] text-[var(--teal)] font-mono text-sm px-4 py-2 rounded hover:bg-[var(--teal)]/10 transition-colors duration-200"
          >
            無料で受け取る
          </a>

          {/* ハンバーガーボタン（モバイル） */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--slate-white)] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--slate-white)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--slate-white)] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--navy)] flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={handleNavClick}
            className="font-mono text-2xl text-[var(--slate-white)] hover:text-[var(--teal)] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
        <a
          href="#cta"
          onClick={handleNavClick}
          className="mt-4 border border-[var(--teal)] text-[var(--teal)] font-mono text-base px-6 py-3 rounded hover:bg-[var(--teal)]/10 transition-colors duration-200"
        >
          無料で受け取る
        </a>
      </div>
    </>
  );
}
