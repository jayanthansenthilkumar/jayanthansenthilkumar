const stats = [
  { label: "Models Deployed", value: "150", suffix: "+" },
  { label: "Data Processed (TB)", value: "500", suffix: "+" },
  { label: "ROI Achieved", value: "300", suffix: "%" },
  { label: "Enterprise Clients", value: "40", suffix: "+" },
];

export function CompanyStatistics() {
  return (
    <section className="py-12 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col p-8 bg-white"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif italic">
                {stat.value}<span className="text-blue-600">{stat.suffix}</span>
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
