function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-center gap-8">
                
                <div className="hidden md:flex gap-8">
                    <a href="#design" className="hover:text-gray-300 transition-colors">Design</a>
                    <a href="#camera" className="hover:text-gray-300 transition-colors">Camera</a>
                    <a href="#performance" className="hover:text-gray-300 transition-colors">Performance</a>
                    <a href="#cores" className="hover:text-gray-300 transition-colors">Cores</a>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all hover:scale-105 cursor-pointer">Comprar</button>
            </div>
        </nav>
    )
}

export default NavBar