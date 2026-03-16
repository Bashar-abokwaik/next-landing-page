import { categories } from "../Data/dummyData";

function Categories() {
    return (
        <div id="categories" className="bg-white py-8 px-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div key={category.id} className="bg-white p-4 rounded shadow">
                        <img src={category.image} alt={category.name} className="w-full h-64 object-cover mb-4 rounded" />
                        <h3 className="text-lg font-semibold">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;