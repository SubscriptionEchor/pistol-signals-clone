export function Header() {
  return (
    <header className="flex items-center justify-between p-6">
      <img
        src="/assets/images/nav-logo.png"
        alt="Pistol Signals"
        className="h-8"
      />
      <a
        href="/"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Back to home
      </a>
    </header>
  );
}