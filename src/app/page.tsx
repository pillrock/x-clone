import Feed from '@/components/Feed';
import Share from '@/components/Share';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="">
      <div className="border-borderGray sticky top-0 z-10 flex items-center justify-around border-b-[1px] bg-black/70 backdrop-blur-md">
        <div className="group relative flex flex-1 items-center justify-center">
          <div className="absolute z-10 h-full w-full group-hover:bg-[#ffffff]/10"></div>
          <Link href={'/'} className="z-20 flex w-full items-center justify-center font-bold">
            <span className="border-iconBlue flex items-center justify-center rounded-b-sm border-b-[4px] py-3 font-bold">
              For you
            </span>
          </Link>
        </div>
        <div className="group relative flex flex-1 items-center justify-center">
          <div className="absolute z-10 h-full w-full group-hover:bg-[#ffffff]/10"></div>
          <Link
            href={'/'}
            className="text-textGray flex flex-1 items-center justify-center p-3 font-bold"
          >
            Following
          </Link>
        </div>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
