import logo from  "../assets/img-proyect/foto.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="mb-2 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/issa-jaramillo-12380a281/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Issa-jaramillo" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            
            </div>
        </nav>
    )
}

export default Navbar;