import Image from "next/image";

export default function FHeader() {
    return (
        <header id="header" className="bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg">
            <h1 className="text-gray-300 text-3xl font-bold mb-4">Firstname Lastname</h1>
            <h2 className="text-gray-300 text-xl font-semibold mb-2">Title</h2>
            <Image
            src="/images/example.webp"
            alt="Profile picture"
            width={200}
            height={200}
            priority
            />
            <p className="text-gray-100">This is a catchphrase</p>
            <p className="short_description text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
        </header>
    );
}