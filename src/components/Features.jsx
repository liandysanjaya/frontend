const features = [
  {
    id: 1,
    title: "Simple",
    description:
      "Easy to understand structure suitable for learning React.",
  },
  {
    id: 2,
    title: "Reusable",
    description:
      "The page is divided into reusable React components.",
  },
  {
    id: 3,
    title: "Responsive",
    description:
      "Tailwind CSS makes it easy to build responsive layouts.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Features
          </h2>

          <p className="mt-3 text-gray-600">
            Everything is built using React and Tailwind CSS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                {feature.id}
              </div>

              <h3 className="text-xl font-semibold mt-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;