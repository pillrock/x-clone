import { Icons } from './IconPublic';
import Image from './Image';
import Link from 'next/link';
const menuList = [
  {
    id: 1,
    name: 'Homepage',
    link: '/',
    icon: <Icons.Home className="h-[24px] w-[24px]" classNamePath="fill-white" />,
  },
  {
    id: 2,
    name: 'Explore',
    link: '/',
    icon: <Icons.Explore className="h-[24px] w-[24px]" classNamePath="fill-white" />,
  },
  {
    id: 3,
    name: 'Notification',
    link: '/',
    icon: <Icons.Notification className="h-[24px] w-[24px]" classNamePath="fill-white" />,
  },
  {
    id: 4,
    name: 'Messages',
    link: '/',
    icon: <Icons.Message className="h-[24px] w-[24px]" classNamePath="fill-white" />,
  },
  {
    id: 5,
    name: 'Bookmarks',
    link: '/',
    icon: <Icons.Bookmark className="h-[24px] w-[24px]" classNamePath="fill-white" />,
    className: 'hidden kx:flex',
  },
  {
    id: 6,
    name: 'Jobs',
    link: '/',
    icon: <Icons.Job className="h-[24px] w-[24px]" classNamePath="fill-white" />,
    className: 'hidden kl:flex',
  },
  {
    id: 7,
    name: 'Communities',
    link: '/',
    icon: <Icons.Community className="h-[24px] w-[24px]" classNamePath="fill-white" />,
    className: 'hidden kh:flex',
  },
  {
    id: 8,
    name: 'Premium',
    link: '/',
    icon: <Icons.Premium className="h-[24px] w-[24px]" classNamePath="fill-white" />,
    className: 'hidden kh:flex',
  },
  {
    id: 11,
    name: 'Verified Orgs',
    link: '/',
    icon: <Icons.VerifyOrg className="h-[24px] w-[24px]" classNamePath="fill-white" />,
    className: 'hidden kj:flex',
  },
  {
    id: 9,
    name: 'Profile',
    link: '/',
    icon: <Icons.Profile className="h-[24px] w-[24px]" classNamePath="fill-white" />,
  },
  {
    id: 10,
    name: 'More',
    link: '/',
    icon: <Icons.InfoMore className="h-[24px] w-[24px]" classNamePath="fill-white" />,
  },
];
const LeftBar = () => {
  return (
    <div className="sticky top-0 mb-4 flex h-screen flex-col overflow-hidden p-4 pt-0">
      {/* LOGO MENU BUTTONS */}
      <div className="grow">
        <Link href={'/'} className="my-3 flex justify-center rounded-full p-2 xxl:justify-start">
          <Icons.Logo w={30} h={30} classNamePath="fill-white" />
        </Link>

        {/* MENU LIST */}
        <div className="kh:gap-4 flex flex-col gap-2">
          {menuList.map(menu => (
            <Link
              className={`flex items-center justify-center gap-x-4 rounded-full p-3 hover:bg-[#181818] xxl:justify-start ${menu.className}`}
              href={menu.link}
              key={menu.id}
            >
              {menu.icon}
              <span className="hidden xxl:flex">{menu.name}</span>
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex items-center justify-center xxl:hidden">
          <Link
            href="compose/post"
            className="flex aspect-square h-[50px] items-center justify-center rounded-full bg-white text-black"
          >
            <Icons.Post w={24} h={24} classNamePath="fill-black" />
            {/* <Image path="icons/post.svg" alt="post" w={24} h={24}></Image> */}
          </Link>
        </div>
        <Link
          href="/compose/post"
          className="my-4 hidden items-center justify-center rounded-full bg-white p-3 font-bold text-black xxl:flex"
        >
          <span>Post</span>
        </Link>
      </div>
      {/* USER INFO */}
      <div className="flex items-center justify-between gap-x-5 rounded-full p-3 transition-all hover:bg-[#181818]">
        <div className="flex items-center gap-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image path="/general/avatar.png" alt="avatar" tr={true} w={100} h={100}></Image>
          </div>
          <div className="hidden xxl:flex xxl:flex-col">
            <span className="font-bold">Dat Thanh</span>
            <p className="text-sm text-textGray">@kaiosin82</p>
          </div>
        </div>
        <div className="hidden items-center justify-center xxl:flex">···</div>
      </div>
    </div>
  );
};

export default LeftBar;
