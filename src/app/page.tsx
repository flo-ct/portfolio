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
      <div className="w-full md:w-1/3 p-6 bg-gray-900 text-gray-100">
        <FHeader />
        <FNavigationMenu />
        <FSocialNetworks />
      </div>
      <div className="w-full md:w-2/3 p-6 space-y-8 bg-gray-900 text-gray-100">
        <FAbout />
        <FExperiences />
        <FProjects />
        <FEducation />
        <FFooter />
      </div>
    </main>);
}