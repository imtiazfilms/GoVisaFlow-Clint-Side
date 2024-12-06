const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-md">
            <div className="navbar container mx-auto">
                <div className="navbar-start flex justify-between items-center w-full">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>All Visas</a></li>
                            <li><a>Add Visa</a></li>
                            <li><a>My Added Visas</a></li>
                            <li><a>My Visa Applications</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            className="h-12 w-12 rounded-full"
                            src="https://i.ibb.co/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
                            alt="GoVisaFlow Logo"
                        />
                        <a className="text-2xl font-extrabold">GoVisaFlow</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4 font-semibold text-base">
                        <li><a className="hover:text-primary">Home</a></li>
                        <li><a className="hover:text-primary">All Visas</a></li>
                        <li><a className="hover:text-primary">Add Visa</a></li>
                        <li><a className="hover:text-primary">My Added Visas</a></li>
                        <li><a className="hover:text-primary">My Visa Applications</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <a className="btn">Sign In</a>
                    <a className="btn">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
