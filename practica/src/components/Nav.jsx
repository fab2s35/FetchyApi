import React from "react";

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/dragonBall" className="hover:text-gray-200">
                            DragonBall 
                        </a>
                    </li>
                    <li>
                        <a href="/RickMorty" className="hover:text-gray-200">
                            Rick y Morty
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-gray-200">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/About" className="hover:text-gray-200">
                         About
                        </a>
                    </li>
                    <li>
                        <a href="/Contact" className="hover:text-gray-200">
                           Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;