import React from "react"
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey! Jamal here!
                        <br className="hidden lg:inline-block"/> I'm a budding Software Engineer who loves making cool applications!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a tech enthusiast, avid reader, and life-long learner. I've got a few projects under my belt and am working to add more as well as improve this site itself. Check out what i've got so far and stay tuned for more.
                        Also take a look at my Linkedin and Github Profiles. 
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded"
                        alt="me...Jamal"
                        src="./me.jpg"
                    />
                </div>
            </div>
        </section>
    )
}