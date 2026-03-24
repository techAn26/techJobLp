export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-[var(--navy-shadow)] text-center">
      <p className="font-mono text-[var(--slate)] text-xs sm:text-sm">
        © {new Date().getFullYear()} Tech-an. All rights reserved.
      </p>
    </footer>
  );
}
