import { aboutBrand } from "../Data/dummyData";

function About() {
    return (
        <div id="about" className="min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold underline">{aboutBrand.title}</h1>
            <p className="mt-4 text-lg">{aboutBrand.description}</p>
            <img src={aboutBrand.image} alt={aboutBrand.title} className="mt-4 w-full h-64 object-cover rounded" />
        </div>
    );
}

export default About;