

const Footer = () => {
    return (
        <footer style={{ background: '#333', color: '#fff', padding: '20px 10px', textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ margin: '0', fontSize: '24px' }}>GoVisaFlow</h2>
                <p>Your trusted partner for visa solutions.</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h4>Contact Us</h4>
                <p>Email: support@govisaflow.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Visa Street, Suite 456, New York, NY, USA</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h4>Follow Us On</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <a
                        href="https://facebook.com/govisaflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        <img src="https://i.ibb.co.com/QNtM9df/icons8-facebook-logo-64.png" alt="" />
                    </a>
                    <a
                        href="https://twitter.com/govisaflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        <img src="https://i.ibb.co.com/SdWzHP3/icons8-twitter-logo-64.png" alt="" />
                    </a>
                    <a
                        href="https://instagram.com/govisaflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        <img src="https://i.ibb.co.com/HXghRpw/icons8-instagram-logo-64.png" alt="" />
                    </a>
                    <a
                        href="https://linkedin.com/company/govisaflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', textDecoration: 'none' }}
                    >
                        <img src="https://i.ibb.co.com/tP2dHTS/icons8-linkedin-logo-64.png" alt="" />
                    </a>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #555', paddingTop: '10px', marginTop: '20px' }}>
                <p>&copy; 2024 GoVisaFlow. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;