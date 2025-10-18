import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FProjects() {
    return (
        <section id="Projects" className="bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg space-y-8">
            <h2 className="text-white text-xl mb-4">Projects</h2>
            <article className="relative bg-transparent rounded-lg p-4">
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
                <div className="pr-16 md:pr-20 lg:pr-28">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Project name</h3>
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
                <div className="pr-16 md:pr-20 lg:pr-28">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Project name</h3>
                    <p className="text-gray-100 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceB.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
        </section>
    );
}