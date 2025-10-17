import Image from "next/image";

export default function FHeader() {
    return (
        <header id="header">
            <h1>Firstname Lastname</h1>
            <h2>Title</h2>
            <Image
            src="/images/example.webp"
            alt="Profile picture"
            width={200}
            height={200}
            priority
            />
            <p>This is a catchphrase</p>
            <p className="short_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
        </header>
    );
}