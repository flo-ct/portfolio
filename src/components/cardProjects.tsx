import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FProjects() {
    return (
        <section id="Projects" className="bg-gray-700 shadow-sm rounded-lg p-6">
            <h2 className="text-gray-300 text-white text-xl mb-2">Projects</h2>
            <section className="ProjectA">
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">Project name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <section>
                    {listsOfSkills.projectA.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </section>
            </section>
            <section className="ProjectB">
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">Project name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <section>
                    {listsOfSkills.projectB.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </section>
            </section>
        </section>
    );
}