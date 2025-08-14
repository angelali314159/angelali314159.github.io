import React, { useEffect } from 'react';

const Resume = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-float-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.timeline-section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <header className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h1 className="text-2xl text-center">My Resume</h1>
            </header>
            <main className="p-4">
                <div className="relative border-l-4 border-blue-600">
                    <section className="timeline-section mb-8 pl-8 opacity-0 transform translate-y-10">
                        <h2 className="text-xl font-bold">2023</h2>
                        <p className="text-gray-700">Started a new role as a Software Engineer at [Company].</p>
                    </section>
                    <section className="timeline-section mb-8 pl-8 opacity-0 transform translate-y-10">
                        <h2 className="text-xl font-bold">2021</h2>
                        <p className="text-gray-700">Graduated with a [Degree] in [Major] from [University].</p>
                    </section>
                    <section className="timeline-section mb-8 pl-8 opacity-0 transform translate-y-10">
                        <h2 className="text-xl font-bold">2019</h2>
                        <p className="text-gray-700">Interned at [Company] as a Frontend Developer.</p>
                    </section>
                    <section className="timeline-section mb-8 pl-8 opacity-0 transform translate-y-10">
                        <h2 className="text-xl font-bold">2017</h2>
                        <p className="text-gray-700">Started my undergraduate studies at [University].</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Resume;