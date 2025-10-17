import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export function FSocialNetworks() {
    return (
        <div className="social_networks bg-gray-700">
            <div className="github">
                <a href="https://github.com/flo-ct"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={18} /> GitHub
                </a>
            </div>
            <div className="linkedin">
                <a
                    href="https://www.linkedin.com/in/florian-chouquet/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={18} /> LinkedIn
                </a>
            </div>
            <div className="resume">
                <a
                href="/Florian_Chouquet_Resume_FullStack_or_BackEnd_Developer_Apprenticeship.pdf"
                download
                >
                    <FaFilePdf size={18} /> Resume
                </a>
            </div>
        </div>
    )
};