import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FEducation() {
    return (
        <section id="education" className="bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg">
            <h2 className="text-gray-300 text-white text-xl mb-2">Education</h2>
            <section className="SchoolA">
                <p className="text-gray-100">
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">School name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <section>
                    {listsOfSkills.schoolA.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </section>
            </section>
            <section className="SchoolB">
                <p className="text-gray-100">
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">School name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <section>
                    {listsOfSkills.schoolB.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </section>
            </section>
            <section className="SchoolC">
                <p className="text-gray-100">
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3 className="text-gray-300 text-lg font-medium mb-1 text-gray-300">School name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <section>
                    {listsOfSkills.schoolC.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </section>
            </section>
        </section>
    );
}