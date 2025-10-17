import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FProjects() {
    return (
        <div id="Projects">
            <h2>Projects</h2>
            <div className="ProjectA">
                <h3>Project name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <div>
                    {listsOfSkills.ProjectA.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </div>
            </div>
            <div className="ProjectB">
                <h3>Project name</h3>
                <Image
                    src="/images/example.webp"
                    alt="Profile picture"
                    width={200}
                    height={200}
                    priority
                />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a</p>
                <div>
                    {listsOfSkills.ProjectB.map((skill) =>
                        (<Tag key={skill}>{skill}</Tag>))}
                </div>
            </div>
        </div>
    );
}