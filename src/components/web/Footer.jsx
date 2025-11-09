import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { getFileUrl } from '../../utils/helper';
// import { FaYoutube } from 'react-icons/fa';
import { CONTACT_ROUTE, HISTORY_ROUTE, HOME_ROUTE, MEMBERSHIP_RULES_ROUTE, PRIVACY_POLICY_ROUTE, RULES_ROUTE, TERMS_CONDITION_ROUTE, TRACK_ROUTE, TRIBUTE_ROUTE } from '../../routes/web/rootRoutes';
import { Link as Linkss } from 'react-router-dom';



const Link = ({ to, children, className }) => (
    <Linkss href={to} className={className}>
        {children}
    </Linkss>
);

function Footer() {
    
    const currentYear = new Date().getFullYear();
    // const setting = useSelector((state) => state?.globalState?.siteSetting?.site_settings);

    
    const importantLinks = [
        { label: 'About Us', path: HOME_ROUTE },
        { label: 'Contact Us', path: HOME_ROUTE },
        { label: 'Privacy Policy', path: HOME_ROUTE },
        { label: 'Terms & Conditions', path: HOME_ROUTE },
        { label: 'Return Policy', path: HOME_ROUTE },
        { label: 'Shipping Policy', path: HOME_ROUTE },
        { label: 'Subscription Policy', path: HOME_ROUTE },
        { label: 'Account Delete', path: HOME_ROUTE },
    ];

    const Categories  = [
        { label: 'Artist', path: HOME_ROUTE },
        { label: 'Union', path: HOME_ROUTE },
        { label: 'Theatre', path: HOME_ROUTE },
        { label: 'Advertisement', path: HOME_ROUTE },
        { label: 'Studio', path: HOME_ROUTE },
        { label: 'Vendor', path: HOME_ROUTE },
        { label: 'Course', path: HOME_ROUTE },
        { label: 'Production House', path: HOME_ROUTE },
    ];

    // const departments = useSelector(
    //     (state) => state.globalState.siteSetting?.category
    // );
    

    const ContactUs = [

        { label:"8591460312",icon:"ri-phone-line" ,href:"https://www.facebook.coom" },
        { label:"8591460312" ,icon:"ri-phone-line" ,href:"https://www.facebook.coom" },
        { label:"Facebook" ,icon:"ri-facebook-line" ,href:"https://www.facebook.coom" },
        { label:"Instagram" ,icon:"ri-instagram-line" ,href:"https://www.facebook.coom" },
        { label:"Youtube" ,icon:"ri-youtube-fill-line" ,href:"https://www.facebook.coom" },
        { label:"LinkedIn" ,icon:"ri-linkedin-fill-line" ,href:"https://www.facebook.coom" },

    ];
    // const LOGO = getFileUrl(setting?.site_logo, "settings");

    

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 rounded-t-lg">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img src="/logo.webp" alt="logo" className="w-16 sm:w-20" />
                            <h3 className="text-xl uppercase font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                                CINEGURU
                            </h3>
                        </Link>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            DIGITAL SOLUTION
                        </p>
                        {/* <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div> */}
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white relative inline-block">
                            Important Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500"></span>
                        </h4>
                        <ul className="space-y-2.5">
                            {importantLinks.map((link, index) => (
                                <li key={index}>
                                    <Linkss
                                        to="/"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group text-sm"
                                    >
                                        <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-500" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            blank
                                        </span>
                                    </Linkss>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white relative inline-block">
                            Categories
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500"></span>
                        </h4>
                        <ul className="space-y-2.5">
                            {
                            Categories.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={`/category/`}
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group text-sm"
                                    >
                                        <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-yellow-500" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white relative inline-block">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">
                                    reduxAddress
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group cursor-pointer hover:text-white transition-colors">
                                <Phone size={18} className="text-yellow-500 flex-shrink-0" />
                                <span>reduxphone</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group cursor-pointer hover:text-white transition-colors">
                                <Mail size={18} className="text-red-500 flex-shrink-0" />
                                <span className="break-all">reduxstate@gmail.com</span>
                            </li>
                        </ul>
                        <div className="pt-2">
                            <Link
                                to="1234567890"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                            >
                                Get in Touch
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>
                            © {currentYear} <span className="text-gray-400 font-medium">CINEGURU</span>. All rights reserved.
                        </p>
                        <Linkss to="https://cineguru.in/">https://cineguru.in</Linkss>
                        <div className="flex gap-6">
                            <Linkss to={PRIVACY_POLICY_ROUTE} className="hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </Linkss>
                            <Linkss to={TERMS_CONDITION_ROUTE} className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </Linkss>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;