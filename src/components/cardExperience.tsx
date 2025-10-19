import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FExperiences() {
    return (
        <section id="experiences" className="pb-24 md:pb-0 bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 relative">
            <h2 className="text-gray-300 text-white text-xl mb-4">Experiences</h2>
            <article className="relative bg-transparent rounded-lg">
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 overflow-hidden">
                    <Image
                        src="/images/example.webp"
                        alt="Profile picture"
                        width={50}
                        height={50}
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="pr-14 md:pr-16 lg:pr-24">
                    <p className="text-gray-100">
                        <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                    </p>
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Company name</h3>
                    <p className="text-gray-100 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceA.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
            <article className="relative bg-transparent rounded-lg">
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 overflow-hidden">
                    <Image
                        src="/images/example.webp"
                        alt="Profile picture"
                        width={50}
                        height={50}
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="pr-14 md:pr-16 lg:pr-24">
                    <p className="text-gray-100">
                        <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                    </p>
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Company name</h3>
                    <p className="text-gray-100 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceB.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
            <article className="relative bg-transparent rounded-lg">
                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 overflow-hidden">
                    <Image
                        src="/images/example.webp"
                        alt="Profile picture"
                        width={50}
                        height={50}
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="pr-14 md:pr-16 lg:pr-24">
                    <p className="text-gray-100">
                        <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                    </p>
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Company name</h3>
                    <p className="text-gray-100 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceC.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
        </section>
    );
}