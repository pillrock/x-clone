import Image from './Image';
const Search = () => {
  return (
    <div className="group sticky top-0 z-10 mt-1 flex items-center gap-2 rounded-full border-[1px] border-borderGray bg-black p-3 focus-within:border-[#1D9BF0]">
      <Image path="icons/explore.svg" alt="search" w={16} h={16} className="opacity-[.5]" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-textGray"
      />
    </div>
  );
};

export default Search;
