import { newArrivals } from "../Data/dummyData";

function NewArrivals() {
  return (
    <div id="new-arrivals" className="py-12">
        <div className="container mx-auto px-6">   
            <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {newArrivals.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded shadow">
                        <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4 rounded" />
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default NewArrivals;