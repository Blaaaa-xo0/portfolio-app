import React from 'react'

function AboutPage() {
    return (
        <main>
            <div>

                {/* contenedor de texto */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">

                    {/* contenedor de biografía */}
                    <div className="flex flex-col gap-12 justify-center">
                        Biografía
                    </div>

                    {/* contenedor de habilidades */}
                    <div className="">
                        habilidades
                    </div>

                    {/* contenedor de experiencia */}
                    <div className="">
                        experiencia laboral en ningún lado
                    </div>

                </div>

                {/* contenedor del svg */}
                <div className="hidden">

                </div>
            </div>
        </main>
    )
};

export default AboutPage;