import { Link } from "react-router-dom"

export const SocialMedia = () => {

    return (
        <div className="flex flex-row justify-between gap-2">
            {/* GITHUB */}
            <Link to="https://github.com/danielgoncalves2023" target="_blank" rel="noopener noreferrer">
                <div className="bg-blue-100 rounded-full cursor-pointer size-7">
                    <img src="/src/assets/midias/github.png" alt="github" />
                </div>
            </Link>
            {/* LINKEDIN */}
            <Link to="https://www.linkedin.com/in/daniel-g-dos-santos/" target="_blank" rel="noopener noreferrer">
                <div className="cursor-pointer size-7">
                    <img src="/src/assets/midias/linkedin.png" alt="linkedin" />
                </div>
            </Link>
            {/* WHATSAPP */}
            <Link to="https://wa.me/5511958927740" target="_blank" rel="noopener noreferrer">
                <div className="cursor-pointer size-7">
                    <img src="/src/assets/midias/whatsapp.png" alt="whatsapp" />
                </div>
            </Link>
        </div>
    )
}