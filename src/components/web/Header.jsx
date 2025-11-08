const Header = () => {
    return (
        <header>
            <nav className="bg-white py-2 md:px-10 px-4 h-24 shadow-md flex items-center justify-between transition-all duration-300" >
                <img src="/logo.webp" alt="logo" className="h-[75px]" />
                <ul className="flex gap-10" >
                    {
                        menus.map((item, index) => (
                            <li key={index}>
                                <Link to={item.href} className={`font-medium flex items-center hover:text-blue-600 transition-colors ${location.pathname === item.href ? "text-blue-600" : "text-gray-700"
                                    }`} >
                                    <i className={`${item.icon} mr-1.5 text-lg`} />
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <Link to="/login">
                        <button className="bg-violet-700 text-white text-sm hover:bg-violet-800 transition-all duration-200 font-semibold py-2 px-6 cursor-pointer rounded-full">Login</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header