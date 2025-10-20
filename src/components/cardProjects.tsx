import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FProjects() {
    return (
        <section id="projects" className="bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg space-y-8">
            <h2 className="text-white text-xl mb-4">Projets</h2>

            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">

                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/job-board-interactif.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>


                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Job Board interactif</h3>
                    <p className="text-gray-100 mb-4">
                        Création d&#39;un Job Board interactif permettant la consultation et la gestion d&#39;offres d&#39;emploi. Trois profils sont disponibles : candidat, RH et administrateur. Le projet inclut une base de données SQL, une interface front-end en HTML/CSS/JS, un backend utilisant les opérations CRUD, un formulaire de candidature et un système d&#39;authentification.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.projectA.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
        </section>
    );
}