export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-26 mt-10 h-52">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">MyWebsite</h2>
            <p className="text-sm">© 2025 All Rights Reserved</p>
          </div>
  
          <div className="flex font-bold space-x-16 my-4 md:my-0">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
  
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
  
        </div>
      </footer>
    );
  }
  