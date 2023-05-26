
const CardTailwind = () => {
    return(
        <div className="flex min-h-screen items-center justify-center px-12 bg-orange-900 font-arial">
            <div className="max-w-md rounded-3xl p-px bg-gradient-to-b from-white to-purple-300">
                <div className="rounded-3xl p-10 bg-orange-950">
                    <p className="text-gray-300 text-lg text-center">
                        Aprendiendo distintas maneras para implementar CSS en React.js de una manera rápida y fácil! 😎
                    </p>

                    <div className="mt-8 flex gap-4 items-center">
                        <img
                            className="h-16 w-16 rounded-full object-cover"
                            src="https://i.postimg.cc/N0VPVpph/photo-2023-04-13-11-40-22.jpg" alt="foto de perfil" />
                        <div>
                            <h3 className="text-lg font-medium text-white">Ing. Ana Juárez</h3>
                            <span className="text-sm tracking-wide text-gray-400">Fullstack Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTailwind


