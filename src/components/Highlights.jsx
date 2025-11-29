

function Highlights() {



    return (
        <section className="bg-black py-20 px-6 " id="design">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Estrutura unibody.
Eles têm a força.</h2>
                    <p className="text-xl text-gray-400">Apresentamos o iPhone 17 Pro e o iPhone 17 Pro Max. Projetados de dentro para fora, eles são os modelos de iPhone mais potentes já produzidos. O coração do novo design é a estrutura unibody em alumínio forjado a quente que maximiza o desempenho, a capacidade da bateria e a durabilidade.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="iphone-titanium"></img>
                    <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                    <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                </div>

                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="ios-features"></img>
                    <h3 className="font-bold mb-2 text-3xl">iOS 26. Novo visual.
Ainda mais mágico.</h3>
                    <p className="text-gray-300">O novo design do iOS reflete e refrata em tempo real o que está no fundo. E se adapta ao conteúdo em apps e aparelhos.</p>
                </div>


                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className="w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="chip a18 pro"></img>

                    <ul className="space-y-3 text-gray-300">
                        <li className="">CPU 20% mais rápida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray Tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div className="text-center" id="camera">
                    <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Câmera Fusion principal</h4>
                            <p className="text-gray-400">Distância focal de 24/48 mm (1x/2x)</p>
                        </div>
                        
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Câmera Fusion ultra-angular</h4>
                            <p className="text-gray-400">Distância focal de 13 mm (0,5x/macro)</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Câmera Fusion teleobjetiva</h4>
                            <p className="text-gray-400">Distância focal de 100/200 mm (4x/8x)</p>
                        </div>





                    </div>
                </div>


            </div>
        </section>
    )
}


export default Highlights