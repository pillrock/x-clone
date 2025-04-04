'use client';
import Feed from '@/components/Feed';
import { Icons } from '@/components/IconPublic';
import Image from '@/components/Image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const UserPage = () => {
  const params = useParams<{ username: string }>();
  const router = useRouter();
  const followButtonRef = useRef<HTMLButtonElement>(null);
  const [posYFollowButton, setPosYFollowButton] = useState<number | undefined>(0);
  useEffect(() => {
    const handleScroll = () => {
      setPosYFollowButton(followButtonRef.current?.getBoundingClientRect().y);
      console.log(followButtonRef.current?.getBoundingClientRect().y);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(posYFollowButton);

  const verified = true;
  return (
    <div>
      {/* TOP BAR */}
      <div className="sticky top-0 z-10 flex items-center bg-black/60 px-2 py-1 backdrop-blur-md">
        <div className="flex grow items-center gap-x-7">
          <span
            onClick={() => {
              router.back();
            }}
            className="aspect-square cursor-pointer rounded-full p-2 hover:bg-borderGray/50"
          >
            <Image path="icons/back.svg" alt="back" w={24} h={24} />
          </span>
          <div>
            <span className="flex items-center gap-x-1">
              <h1 className="text-xl font-bold">Bill Gates</h1>{' '}
              {verified && <Icons.Verify classNamePath="fill-[#1D9BF0]" />}
            </span>
            <p className="text-textGray">4,493 posts</p>
          </div>
        </div>
        <button
          className={`${posYFollowButton && posYFollowButton <= 16 ? 'opacity-100' : 'pointer-events-none opacity-0'} mr-3 h-min rounded-full bg-white px-5 py-1 font-bold text-black transition-all duration-100 hover:opacity-90`}
        >
          Follow
        </button>
      </div>
      {/* PROFILE INFO */}
      <div>
        <div className="relative">
          <Link
            href={`${params.username}/header_photo`}
            className="relative block aspect-[3/1] h-[200px] w-full overflow-hidden"
          >
            <Image tr={true} path="general/cover.jpg" alt="cover" className="object-cover" />
          </Link>
          <Link
            href={`${params.username}/photo`}
            className="absolute bottom-0 left-5 h-[133.3px] w-[133.3px] translate-y-[50%] cursor-pointer overflow-hidden rounded-full border-[5px] border-black"
          >
            <Image path="general/avatar.png" tr={true} w={100} h={100} alt="" />
          </Link>
        </div>
        <div className="p-5">
          <div className="flex justify-end gap-x-2">
            <div className="cursor-pointer rounded-full border-[1px] border-borderGray p-2 text-white hover:opacity-90">
              <Icons.InfoMore classNamePath="fill-white" />
            </div>
            <div className="cursor-pointer rounded-full border-[1px] border-borderGray p-2 text-white hover:opacity-90">
              <Icons.Explore classNamePath="fill-white" />
            </div>
            <button
              ref={followButtonRef}
              className={`h-min rounded-full bg-white px-5 py-1 font-bold text-black hover:opacity-90`}
            >
              Follow
            </button>
          </div>
          <div className="mt-5">
            <span className="flex items-center gap-x-1">
              <h1 className="text-xl font-bold">Bill Gates</h1>
              {verified && <Icons.Verify classNamePath="fill-[#1D9BF0]" />}
            </span>
            <p className="text-textGray">@billgates</p>
          </div>
          <p className="mt-5 text-base">
            {`Sharing things I'm learning through my foundation work and other interests.`}
          </p>
          <div className="mt-2 flex items-center gap-x-4">
            <span className="flex items-center justify-center gap-x-1">
              <Icons.Location classNamePath="fill-textGray" />
              <p className="text-textGray">Seattle, WA</p>
            </span>
            <span className="flex items-center justify-center gap-x-1">
              <Icons.Link classNamePath="fill-textGray" />
              <Link
                href={'gatesnot.es/SourceCode'}
                className="text-iconBlue underline-offset-0 hover:underline"
              >
                gatesnot.es/SourceCode
              </Link>
            </span>
            <span className="flex items-center justify-center gap-x-1">
              <Icons.Date classNamePath="fill-textGray" />
              <p className="text-textGray">Joined June 2009</p>
            </span>
          </div>
          <div className="mt-3 flex gap-x-3">
            <div className="flex cursor-pointer gap-x-1 underline-offset-0 hover:underline">
              <span className="font-bold">612</span>
              <p className="text-textGray">Following</p>
            </div>
            <div className="flex cursor-pointer gap-x-1 underline-offset-0 hover:underline">
              <span className="font-bold">66M</span>
              <p className="text-textGray">Followers</p>
            </div>
          </div>
        </div>
        {/* NAVIGATION */}
        <div className="mt-5 flex items-center justify-around border-b-[1px] border-borderGray font-bold text-textGray">
          <div className="flex w-full cursor-pointer justify-center px-4 transition-all duration-300 hover:bg-[#181818]">
            <span className="border-b-[4px] border-iconBlue px-2 py-4 text-white">Posts</span>
          </div>
          <div className="flex w-full cursor-pointer justify-center px-4 transition-all duration-300 hover:bg-[#181818]">
            <span className="px-2 py-4">Replies</span>
          </div>
          <div className="flex w-full cursor-pointer justify-center px-4 transition-all duration-300 hover:bg-[#181818]">
            <span className="px-2 py-4">Highlights</span>
          </div>
          <div className="flex w-full cursor-pointer justify-center px-4 transition-all duration-300 hover:bg-[#181818]">
            <span className="px-2 py-4">Media</span>
          </div>
        </div>

        {/* POSTS */}
        <Feed />
        <Feed />
      </div>
    </div>
  );
};

export default UserPage;
