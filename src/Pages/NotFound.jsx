
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="text-lg mt-2">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
      <img
        className="mt-8 w-full max-w-md"
        src="https://i.ibb.co.com/3c3cKWp/DALL-E-2024-12-06-16-19-20-A-creative-and-minimalistic-404-Not-Found-page-illustration-The-scene-fea.webp"
        alt="Page Not Found Illustration"
      />
    </div>
  );
};

export default NotFound;
