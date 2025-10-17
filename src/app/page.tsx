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
    <main className="bg-gray-800">
      <FHeader />
      <FNavigationMenu />
      <FSocialNetworks />
      <FAbout />
      <FExperiences />
      <FProjects />
      <FEducation />
      <FFooter />
    </main>);
}

