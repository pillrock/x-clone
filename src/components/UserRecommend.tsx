import { Icons } from './IconPublic';
import Image from './Image';

export interface UserRecommendProps {
  avtPath: string;
  name: string;
  username: string;
  verified?: boolean;
}

const UserRecommend = ({ avtPath, name, username, verified }: UserRecommendProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
          <Image path={avtPath} w={100} h={100} alt="avatar" tr={true} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-1">
            <span className="font-bold hover:underline">{name}</span>
            {verified && <Icons.Verify className="h-[18.75px] w-[18.75px] fill-[#1D9BF0]" />}
          </div>
          <span className="text-textGray">{username}</span>
        </div>
      </div>
      <button className="rounded-full bg-white p-4 py-1 text-black hover:opacity-90">Follow</button>
    </div>
  );
};

export default UserRecommend;
