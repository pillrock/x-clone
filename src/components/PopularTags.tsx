import Link from 'next/link';
import Image from './Image';

const PopularTags = () => {
  return (
    <div className="flex flex-col gap-y-4 rounded-2xl border-[1px] border-borderGray p-4">
      <h1 className="text-xl font-bold">Whats happening</h1>
      <div className="flex gap-x-2">
        <div className="relative h-[78px] w-[78px] overflow-hidden rounded-lg">
          <Image path="general/avatar.png" w={100} h={100} alt="avatar" tr={true} />
        </div>
        <div className="">
          <span>From the Desk of Anthony Pompliano</span>
          <p className="text-sm text-textGray">LIVE</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-textGray">Tranding</p>
            <span className="text-md font-bold text-white">#Wisconsin</span>
            <p className="text-sm text-textGray">12.3K posts</p>
          </div>
          <div className="flex aspect-square max-h-min cursor-pointer items-center rounded-full p-2 transition-all duration-200 hover:bg-[#0A171F] hover:text-iconBlue">
            ···
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-textGray">Tranding in VietNam</p>
            <span className="text-md font-bold text-white">Vietnam no.1</span>
          </div>
          <div className="flex aspect-square max-h-min cursor-pointer items-center rounded-full p-2 transition-all duration-200 hover:bg-[#0A171F] hover:text-iconBlue">
            ···
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-textGray">Politics · Trending</p>
            <span className="text-md font-bold text-white">sanjuana wolaver</span>
            <p className="text-sm text-textGray">114K posts</p>
          </div>
          <div className="cursor-point flex aspect-square max-h-min items-center rounded-full p-2 transition-all duration-200 hover:bg-[#0A171F] hover:text-iconBlue">
            ···
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-textGray">Politics · Trending</p>
            <span className="text-md font-bold text-white">Tariffs</span>
            <p className="text-sm text-textGray">249K posts</p>
          </div>
          <div className="cursor-point flex aspect-square max-h-min items-center rounded-full p-2 transition-all duration-200 hover:bg-[#0A171F] hover:text-iconBlue">
            ···
          </div>
        </div>
      </div>
      <Link href="/" className="my-3 cursor-pointer text-base text-iconBlue">
        Show more
      </Link>
    </div>
  );
};

export default PopularTags;
