import Footer from "../components/web/Footer"
import Header from "../components/web/Header"
const Layout = () => {
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