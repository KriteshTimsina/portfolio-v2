const Header = () => {
  return (
    <header className="flex justify-around h-20 items-center">
      <h2 className="text-xl">
        Kritesh <span className="text-primary">Timsina</span>
      </h2>
      <nav className="flex flex-col gap-2 justify-center cursor-pointer  ">
        <div className="border-b-[1px] border-[#e4e4e4] w-7 "></div>
        <div className="border-b-[1px] border-primary w-5 "></div>
      </nav>
    </header>
  );
};

export default Header;
