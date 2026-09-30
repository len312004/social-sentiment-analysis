function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-6 bg-transparent">
      <h1 className="text-3xl font-extrabold">SocialPulse</h1>
      <ul className="flex gap-10 text-lg">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Calendar</a></li>
        <li><a href="#" className="hover:text-gray-300">Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
