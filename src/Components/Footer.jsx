const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo and About */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4 space-x-3">
            <img
              src="https://i.ibb.co/crcR0X1/DALL-E-2024-12-05-21-26-00-A-modern-and-minimalistic-SVG-icon-for-a-visa-navigator-website-named-Go.webp"
              alt="GoVisaFlow Logo"
              className="h-12 w-12 rounded-full"
            />
            <h2 className="text-2xl font-bold">GoVisaFlow</h2>
          </div>
          <p className="text-gray-300">Your trusted partner for visa solutions.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-300">Email: support@govisaflow.com</p>
          <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-300">123 Visa Street, Suite 456,<br />New York, NY, USA</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://facebook.com/govisaflow" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/QNtM9df/icons8-facebook-logo-64.png" alt="Facebook" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/govisaflow" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/Xfs7c5yH/X-3d.png" alt="Twitter" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com/govisaflow" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/HXghRpw/icons8-instagram-logo-64.png" alt="Instagram" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/company/govisaflow" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/tP2dHTS/icons8-linkedin-logo-64.png" alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GoVisaFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
