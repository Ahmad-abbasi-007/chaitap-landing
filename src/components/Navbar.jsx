const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-4 bg-[#FFFBF5]">
      <h1 className="text-2xl font-bold">ChaiTap.</h1>
      <div className="hidden md:flex gap-8">
        <a href="#">Menu</a><a href="#">About</a><a href="#">Contact</a>
      </div>
      <button className="bg-[#FF6B2B] text-white px-6 py-2 rounded-full">Order Now</button>
    </nav>
  )
}
export default Navbar