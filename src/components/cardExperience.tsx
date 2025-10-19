import { listsOfSkills } from "./cardSkills";
import { Tag } from "./layoutTags";
import Image from "next/image";

export function FExperiences() {
    return (
        <section id="Projects" className="bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg space-y-8 pb-24">
            <h2 className="text-white text-xl mb-4">Expériences</h2>
            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/logo-yeswehack.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">YesWeHack - Digital Marketing Manager</h3>

                    <p className="text-gray-100">
                        <time>2024-08</time> - <time>2025-02</time>
                    </p>
                    <p className="text-gray-100 mb-4">
                        En charge du marketing digital de l&#39;entreprise, avec pour objectif d&#39;augmenter la notoriété de la marque, le trafic sur le site et le nombre de leads qualifiés générés.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceA.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/logo-bespoke.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">Bespoke - Consultant SEA & SMA</h3>

                    <p className="text-gray-100">
                        <time>2021-04</time> - <time>2024-08</time>
                    </p>
                    <p className="text-gray-100 mb-4">
                        Gestion d&#39;un portefeuille d&#39;une douzaine d&#39;acteurs (GE et PME), en charge de proposer et justifier une stratégie digitale, de la mettre en œuvre et de l&#39;optimiser.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceB.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
            <article className="flex flex-col md:flex-row items-start bg-transparent rounded-lg p-4 gap-6">
                <div className="flex-shrink-0 w-24 md:w-32 lg:w-40 max-w-full">
                    <Image
                        src="/images/logo-pumpup.webp"
                        alt="Project image"
                        width={160}
                        height={160}
                        className="object-cover rounded-lg w-full h-auto"
                        priority
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-300 text-lg font-medium mb-2">PumpUp Traffic Manager SEA & SEO</h3>

                    <p className="text-gray-100">
                        <time>2018-08</time> - <time>2021-04</time>
                    </p>
                    <p className="text-gray-100 mb-4">
                        Gestion d&#39;un portefeuille d&#39;une vingtaine d&#39;acteurs (PME et TPE), en charge de proposer et justifier une stratégie digitale, de la mettre en œuvre et de l&#39;optimiser.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {listsOfSkills.experienceC.map((skill) =>
                            (<Tag key={skill}>{skill}</Tag>))}
                    </div>
                </div>
            </article>
        </section>
    );
}