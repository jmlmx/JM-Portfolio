import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jamal Mayon
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills & Tech
          </a>
        </nav>
        <a
          href="https://www.linkedin.com/in/jamalmayon/"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        ><img src="./linkedin icon.png" alt="Linkedin"></img></a>
        <a
          href="https://github.com/jmlmx"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        ><img src="./github icon.png" alt="Github"></img></a>
      </div>
    </header>
  );
}
