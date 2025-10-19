import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export function FSocialNetworks() {
    return (
        <div className="flex justify-center">
            <div className="github bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg">
                <a href="https://github.com/flo-ct"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={18} /></a>
            </div>
            <div className="linkedin bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg">
                <a
                    href="https://www.linkedin.com/in/florian-chouquet/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={18} /></a>
            </div>
            <div className="resume bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rou<nded-lg">
                <a
                href="/Florian_Chouquet_Resume_FullStack_or_BackEnd_Developer_Apprenticeship.pdf"
                download
                >
                    <FaFilePdf size={18} /></a>
            </div>
            <div className="resume bg-gray-900 hover:bg-gray-800/50 transition-colors duration-200 p-6 rounded-lg text-sm text-center">&larr; Télécharger mon CV</div>
        </div>
    )
};