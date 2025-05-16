// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gray-800 h-20 w-250 rounded-full py-3 px-6 flex justify-between items-center flex-wrap text-gray-300 text-sm">
        <div>© 2025 Shuvo</div>
        <div className="space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
