
export function Navbar() {
  return (
    <nav className="bg-gray-300 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MenuButton />
        </div>
      </div>
    </nav>
  );
}

function MenuButton() {
  return (
    <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white">
      Hi
    </button>
  );
}