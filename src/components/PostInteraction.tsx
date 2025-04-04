import { Icons } from './IconPublic';

const PostInteraction = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="mr-6 flex flex-[5] items-center justify-between gap-x-2 p-2">
        {/* COMMENT */}
        <div className="group flex cursor-pointer items-center justify-center">
          <span className="rounded-full p-2 group-hover:bg-[#0A171F]">
            <Icons.Comment
              w={20}
              h={20}
              classNamePath=" transition-all  fill-textGray group-hover:fill-iconBlue"
            />
          </span>
          <span className="text-textGray transition-all group-hover:text-iconBlue">1.6K</span>
        </div>
        {/* REPOST */}
        <div className="group flex cursor-pointer items-center justify-center">
          <span className="rounded-full p-2 group-hover:bg-[#071A14]">
            <Icons.Repost classNamePath="fill-textGray transition-all group-hover:fill-iconGreen" />
          </span>
          <span className="text-textGray transition-all group-hover:text-iconGreen">7.8K</span>
        </div>

        {/* LIKE */}
        <div className="group flex cursor-pointer items-center justify-center">
          <span className="rounded-full p-2 group-hover:bg-[#200914]">
            <Icons.Like classNamePath="fill-textGray transition-all group-hover:fill-iconPink" />
          </span>
          <span className="text-textGray transition-all group-hover:text-iconPink">32K</span>
        </div>
        {/* VIEW  */}
        <div className="group flex cursor-pointer items-center justify-center">
          <span className="rounded-full p-2 group-hover:bg-[#0A171F]">
            <Icons.View className="fill-textGray transition-all group-hover:fill-iconBlue" />
          </span>
          <span className="text-textGray transition-all group-hover:text-iconBlue">23k</span>
        </div>
      </div>
      <div className="flex flex-[1] items-center justify-around">
        {/* OTHERS */}
        <span className="group cursor-pointer rounded-full p-2 hover:bg-[#071A14]">
          <Icons.Bookmark classNamePath="fill-textGray transition-all group-hover:fill-iconBlue" />
        </span>
        <span className="group cursor-pointer rounded-full p-2 hover:bg-[#071A14]">
          <Icons.Share classNamePath="fill-textGray transition-all group-hover:fill-iconBlue" />
        </span>
      </div>
    </div>
  );
};

export default PostInteraction;
