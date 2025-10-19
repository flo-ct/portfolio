import { FSocialNetworks } from "../components/cardSocialNetworks";

export function FFooter() {
    return (
        <footer id="footer" className="fixed md:static bottom-0 left-0 w-full py-4 bg-gray-900/80 backdrop-blur-md hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-t-lg md:rounded-lg">
            <FSocialNetworks />
        </footer>
    );
}