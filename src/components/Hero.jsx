const Hero = () => {
  return (
    <section className="px-6 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center bg-[#FFFBF5] text-center md:text-left">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Garam Chai,<br/><span className="text-[#FF6B2B]">Tap Karte Hi</span></h1>
        <p className="mt-6 text-gray-600 max-w-md mx-auto md:mx-0">Lahore ki sabse tez chai delivery. 15 minute me kulhad chai aapke darwaze par.</p>
        <button className="mt-8 bg-black text-white px-8 py-3 rounded-full">Download App</button>
      </div>
      <div className="flex-1 mt-10 md:mt-0">
        <img src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80" className="rounded-[40px] w-full" alt="chai"/>
      </div>
    </section>
  )
}
export default Hero