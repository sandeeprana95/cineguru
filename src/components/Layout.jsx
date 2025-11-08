import { Link, useLocation } from "react-router-dom"
import Footer from "./web/footer"
import Header from "./web/Header"
const Layout = () => {
    const location = useLocation()

    const menus = [
        {
            name: "Home",
            href: "/home",
            icon: "ri-home-smile-2-line"
        },
        {
            name: "About Us",
            href: "/about-us",
            icon: "ri-information-line"
        },
        {
            name: "Contact Us",
            href: "/contact-us",
            icon: "ri-phone-line"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen" >
           <Header/>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4" >
            </div>
           <Footer/>
        </div>
    )
}

export default Layout