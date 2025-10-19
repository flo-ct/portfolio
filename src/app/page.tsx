import { FAbout } from "../components/cardAbout";
import { FEducation } from "@/components/cardEducation";
import { FExperiences } from "../components/cardExperience";
import { FFooter } from "@/components/cardFooter";
import FHeader from "../components/cardHeader";
import { FNavigationMenu } from "@/components/cardNavigationMenu";
import { FProjects } from "@/components/cardProjects";
import { FSocialNetworks } from "../components/cardSocialNetworks";

export default function FHome() {
  return (
    <main className="bg-gray-800 flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/3 p-6 bg-gray-900 text-gray-100 md:fixed md:h-screen md:overflow-y-auto">
        <FHeader />
        <FNavigationMenu />
        <FSocialNetworks />
      </div>
      <div className="w-full md:ml-[33.3333%] w-2/3 p-6 space-y-8 bg-gray-900 text-gray-100">
        <FAbout />
        <FProjects />
        <FEducation />
        <FExperiences />
        <FFooter />
      </div>
    </main>);
}