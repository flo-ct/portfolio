import Image from "next/image";

export default function FHeader() {
    return (
        <header
            id="header"
            className="flex flex-row items-center justify-between bg-transparent rounded-lg p-6 gap-6"
        >
            <div className="flex-1 pr-4">
                <h1 className="text-gray-300 text-3xl font-bold mb-4">Florian Chouquet</h1>
                <h2 className="text-gray-300 text-xl font-semibold mb-2">
                    Alternant développeur fullstack
                </h2>
                <p className="text-gray-100 pt-4">Les compétences se transforment, la passion reste.</p>
                <p className="short_description text-gray-100 pt-4">
                    Étudiant à Epitech - Développeur Full-Stack / Back-End en recherche d&#39;alternance - Disponible dès janvier 2026
                </p>
            </div>

            <div className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-52 h-36 sm:h-44 md:h-52 lg:h-60 overflow-hidden rounded-lg shadow-lg">
                <Image
                    src="/images/Profile_Picture.JPG"
                    alt="Profile picture"
                    width={300} 
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
        </header>
    );
}
