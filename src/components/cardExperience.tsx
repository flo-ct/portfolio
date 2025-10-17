import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FExperiences() {
    return (
        <div id="Experiences">
            <h2>Experiences</h2>
            <div className="ExperienceA">
                <p>
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3>Company name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <div>
                    {listsOfSkills.ExperienceA.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </div>
            </div>
            <div className="ExperienceB">
                <p>
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3>Company name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <div>
                    {listsOfSkills.ExperienceB.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </div>
            </div>
            <div className="ExperienceC">
                <p>
                    <time dateTime="2024-10">2024-10</time> - <time dateTime="2025-01">2025-01</time>
                </p>
                <h3>Company name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <div>
                    {listsOfSkills.ExperienceC.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </div>
            </div>
        </div>
    );
}