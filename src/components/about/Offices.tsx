import { MapPin } from "lucide-react";

const offices = [
  {
    city: "Mumbai, India",
    type: "Headquarters",
    address: "Mumbai, Maharashtra, India"
  },
  {
    city: "Adelaide, Australia",
    type: "Aussie Hub",
    address: "Adelaide, South Australia"
  },
  {
    city: "Karur, India",
    type: "Engineering Hub",
    address: "Karur, Tamil Nadu, India"
  }
];

export function Offices() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif italic">Global Presence</h2>
            <p className="text-sm font-mono text-gray-600">
              We operate globally to attract top talent and stay close to our enterprise clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm rounded-sm overflow-hidden">
          {offices.map((office, index) => (
            <div key={index} className="bg-white p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-gray-900 font-serif">{office.city}</h3>
              </div>
              <p className="text-xs font-mono text-blue-600 mb-6 uppercase tracking-wider">{office.type}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs font-mono text-gray-600 leading-relaxed">
                  {office.address}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
