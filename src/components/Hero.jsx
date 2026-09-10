function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Build Something
        <span className="text-blue-600"> Awesome</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        A simple React JS website created using reusable React
        components and Tailwind CSS.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

        <button className="border border-gray-300 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;