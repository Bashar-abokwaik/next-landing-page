import { bestSellers } from "../Data/dummyData";

function BestSellers() {
    return (
        <div id="best-sellers" className="bg-white py-8 px-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bestSellers.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded shadow">
                        <img src={item.image} alt={item.name} className="w-full h-64 object-cover mb-4 rounded" />
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestSellers;

