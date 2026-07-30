const partners = [
  { name: "NVIDIA", tier: "Elite Compute Partner" },
  { name: "AWS", tier: "Advanced Technology Partner" },
  { name: "Microsoft", tier: "Gold Partner" },
  { name: "Hugging Face", tier: "Inference Partner" }
];

export function TechPartners() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Technology Ecosystem</h2>
          <p className="text-sm font-mono text-gray-600">
            We partner with the best in the industry to deliver uncompromised performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-8 flex flex-col items-center md:items-start justify-center h-32 hover:bg-gray-50 transition-colors">
              <span className="text-xl font-bold text-gray-800 tracking-wider font-serif mb-2 text-center md:text-left">{partner.name}</span>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest text-center md:text-left">{partner.tier}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
