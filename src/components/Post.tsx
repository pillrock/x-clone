'use client';
import PostInteraction from './PostInteraction';
import Image from './Image';
import imagekit from './ImageKit';
import Video from './Video';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from './IconPublic';

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata: { sensitive: boolean };
}

const Post = () => {
  const router = useRouter();
  const verify = true;
  const [fileDetails, setFileDetails] = useState<FileDetailsResponse | null>(null);

  const getFileDetails = (fileID: string): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileID, function (error, result) {
        if (error) reject(error);
        else if (result) {
          resolve({
            width: result.width,
            height: result.height,
            filePath: result.filePath,
            url: result.url,
            fileType: result.fileType,
            customMetadata: {
              sensitive: Boolean(result.customMetadata?.sensitive),
            },
          });
        } else {
          reject(new Error('No result returned'));
        }
      });
    });
  };

  // Call getFileDetails
  // const fileDetails = null;
  useEffect(() => {
    getFileDetails('67ed5e99432c4764160a254d')
      .then(result => {
        setFileDetails(result);
      })
      .catch(error => {
        console.error('Error fetching file details:', error);
      });
  }, []);

  return (
    <div
      onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) router.push('/9959595959');
      }}
      className="flex gap-x-2 border-b-[1px] border-borderGray p-5 pb-0 pt-2"
    >
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image path="general/avatar.png" w={100} h={100} tr={true} alt="avt" />
      </div>
      <div className="flex grow flex-col gap-y-2">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <span className="font-bold hover:underline">Elon Musk</span>
            {verify && (
              <span>
                <svg
                  width={18.75}
                  height={18.75}
                  viewBox="0 0 22 22"
                  aria-label="Verified account"
                  role="img"
                  className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i"
                  data-testid="icon-verified"
                >
                  <g>
                    <path
                      className="fill-[#1D9BF0]"
                      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                    ></path>
                  </g>
                </svg>
              </span>
            )}
            <p className="text-sm text-textGray">@elonmusk</p>
            <span className="text-sm text-textGray">·</span>
            <span className="text-sm text-textGray">Mar 28</span>
          </div>
          <span className="group absolute right-0 grid cursor-pointer place-items-center rounded-full p-1 hover:bg-[#0A171F]">
            <Icons.More
              className="rounded-full font-bold group-hover:bg-[#0A171F]"
              classNamePath="group-hover:fill-[#1D9BF0] fill-textGray"
            />
          </span>
          {/* <div className="absolute right-0 grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-full p-2 font-bold text-textGray hover:bg-[#0A171F] hover:text-[#1D9BF0]">
            ···
          </div> */}
        </div>
        <div>Xin chao VietNam</div>
        {fileDetails && (
          <div className="relative max-h-[515px] max-w-[558px] overflow-hidden rounded-xl border-[1px] border-borderGray">
            {fileDetails.fileType === 'image' ? (
              <Image
                className={`h-full w-full rounded-xl object-contain ${fileDetails.customMetadata?.sensitive ? 'blur-md' : ''}`}
                path={fileDetails.filePath}
                alt="post"
                w={fileDetails.width}
                h={fileDetails.height}
              />
            ) : (
              <Video
                path={fileDetails.filePath}
                className={`h-full w-full rounded-xl object-contain ${fileDetails.customMetadata?.sensitive ? 'blur-md' : ''}`}
              />
            )}
          </div>
        )}
        <div className="flex items-center gap-x-1">
          <p className="flex items-center text-textGray">From</p>
          <span className="flex items-center gap-x-1 text-sm font-bold">
            {' '}
            Peter St Onge, Ph.D.
            {verify && (
              <span>
                <svg
                  width={18.75}
                  height={18.75}
                  viewBox="0 0 22 22"
                  aria-label="Verified account"
                  role="img"
                  className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i"
                  data-testid="icon-verified"
                >
                  <g>
                    <path
                      className="fill-[#1D9BF0]"
                      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                    ></path>
                  </g>
                </svg>
              </span>
            )}
          </span>
        </div>
        <PostInteraction />
      </div>
    </div>
  );
};

export default Post;
