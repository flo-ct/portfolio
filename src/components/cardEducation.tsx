import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FEducation() {
    return (

        <section id="Projects" className="bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg space-y-8">
            <h2 className="text-white text-xl mb-4">Formation</h2>
            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/logo-epitech.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Epitech</h3>

                    <p className="text-gray-100">
                        <time>2025-09</time> - <time>2028-09</time>
                    </p>
                    <p className="text-gray-100 mb-4">
                        J&#39;ai intégré en septembre 2025 le Master of Science d'Epitech. La période de septembre à décembre est intensive et dédiée à l&#39;acquisition de compétences techniques pour me rendre opérationnel pour une alternance dès janvier 2026. Je suis formé aux principaux langages de programmation, au DevOps ainsi qu&#39;à la cybersécurité.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.schoolA.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/logo-edc-paris.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">EDC</h3>

                    <p className="text-gray-100">
                        <time>2018-09</time> - <time>2019-09</time>
                    </p>
                    <p className="text-gray-100 mb-4">
                        J&#39;ai intégré le MBA Digital Marketing de l&#39;EDC afin de spécialiser mon profil dans le domaine du marketing numérique. Ce choix m&#39;a permis d&#39;intégrer l&#39;entreprise PumpUp en tant que traffic manager.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.schoolB.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/logo-edhec.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Edhec</h3>

                    <p className="text-gray-100">
                        <time>2012-09</time> - <time>2016-09</time>
                    </p>
                    <p className="text-gray-100 mb-4">
                        J&#39;ai suivi le BBA de l&#39;école EDHEC. Cette formation m&#39;a permis de découvrir, entre autres, les secteurs de la finance, de l&#39;entrepreneuriat et du marketing. J&#39;ai choisi de spécialiser mon profil en Retail Marketing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.schoolC.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
        </section>
    );
}