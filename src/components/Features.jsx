const Features = () => {
  const items = [
    { title: "15 Min Delivery", desc: "Thandi hone se pehle aapke paas." },
    { title: "Kulhad Chai", desc: "Mitti ki khushbu wali asli chai." },
    { title: "Cash on Delivery", desc: "Online payment ka jhanjhat nahi." },
  ];
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center">Why ChaiTap?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {items.map((i, idx) => (
          <div key={idx} className="p-8 bg-[#FFFBF5] rounded-3xl text-center border">
            <h3 className="font-bold text-xl">{i.title}</h3>
            <p className="mt-3 text-gray-500 text-sm">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Features