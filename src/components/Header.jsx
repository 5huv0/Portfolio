const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4">
      <h1 className="text-xl font-semibold">Portfolio</h1>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-1 bg-black text-white rounded-full">Home</button>
        <button className="px-4 py-1 bg-black text-white rounded-full">Navigation</button>
        <button className="px-4 py-1 bg-black text-white rounded-full">Social</button>
      </div>
    </header>
  );
};

export default Header;
