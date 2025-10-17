import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FExperiences() {
    return (
        <section id="experiences" className="bg-gray-700 shadow-sm rounded-lg p-6">
            <h2 className="text-gray-300 text-white text-xl mb-2">Experiences</h2>
            <article className="ExperienceA">
                <p className="text-gray-100">
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">Company name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <article>
                    {listsOfSkills.experienceA.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </article>
            </article>
            <article className="ExperienceB">
                <p className="text-gray-100">
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">Company name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <article>
                    {listsOfSkills.experienceB.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </article>
            </article>
            <article className="ExperienceC">
                <p className="text-gray-100">
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">Company name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <article>
                    {listsOfSkills.experienceC.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </article>
            </article>
        </section>
    );
}