export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-800 text-white">
      <h1 className="text-2xl font-bold">SocialPulse</h1>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">About</a>
        </li>
      </ul>
    </nav>
  );
}
