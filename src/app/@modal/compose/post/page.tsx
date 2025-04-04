'use client';

import { Icons } from '@/components/IconPublic';
import { ModalCover } from '@/utils';
import { useRouter } from 'next/navigation';

const PostModal = () => {
  const router = useRouter();
  return (
    <ModalCover centerXContent>
      <div className="mt-10 max-h-min w-[600px] max-w-[600px] rounded-xl bg-black p-3">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <span
            className="cursor-pointer rounded-full p-3 hover:bg-[#181919]"
            onClick={() => {
              router.back();
            }}
          >
            <Icons.Close classNamePath="fill-white" />
          </span>
          <div>
            <span className="cursor-pointer text-lg text-iconBlue">Drafts</span>
          </div>
        </div>
        {/* BODY */}
        <div></div>
      </div>
    </ModalCover>
  );
};

export default PostModal;
