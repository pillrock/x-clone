'use client';
import { useEffect, useRef, useState } from 'react';
import Image from './Image';
import { shareAction } from '@/actions';
import ImageNext from 'next/image';
import { Icons } from './IconPublic';
import ModalEditPreviewImage from './ModalEditPreviewImage';
const Share = () => {
  const [fileMedia, setFileMedia] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [modalEditPreviewImage, setModalEditPreviewImage] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [desc, setDesc] = useState<string | null>('');

  const [settings, setSettings] = useState<{
    type: 'original' | 'wide' | 'square';
    sentitive: boolean;
  }>({
    type: 'original',
    sentitive: false,
  });

  useEffect(() => {
    return () => {
      if (mediaPreview) {
        URL.revokeObjectURL(mediaPreview);
      }
    };
  }, [mediaPreview]);
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMediaPreview(URL.createObjectURL(e.target.files[0]));
      setFileMedia(e.target.files[0]);
    }
  };
  const handleClodePreviewMedia = () => {
    setMediaPreview(null);
    setFileMedia(null);
    if (inputRef.current) inputRef.current.value = '';
  };
  return (
    <form action={formData => shareAction(formData, settings)}>
      <div className="flex gap-x-2 border-b-[1px] border-borderGray p-5 py-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image path="general/avt.jpg" w={100} h={100} tr={true} alt="avt" />
        </div>
        <div className="flex-1">
          <input
            value={desc || ''}
            onChange={e => setDesc(e.target.value)}
            name="desc"
            placeholder="What's happening?"
            autoComplete="off"
            className="w-full resize-none overflow-y-hidden bg-transparent p-2 px-0 text-left text-xl outline-none placeholder:text-textGray"
          />
          {fileMedia && fileMedia.type.includes('image') && mediaPreview && (
            <div className="relative mb-2 overflow-hidden rounded-xl">
              <span
                onClick={() => setModalEditPreviewImage(!modalEditPreviewImage)}
                className="absolute left-2 top-2 cursor-pointer rounded-full bg-black/70 p-2"
              >
                <Icons.Palm className="h-[16px] w-[16px] fill-white" />
              </span>
              <span
                onClick={handleClodePreviewMedia}
                className="absolute right-2 top-2 cursor-pointer rounded-full bg-black/70 p-2"
              >
                <Icons.Close className="h-[16px] w-[16px] fill-white" />
              </span>
              <ImageNext
                src={mediaPreview}
                width={512}
                height={512}
                className={`max-h-[512px] w-full rounded-xl object-contain ${
                  settings.type === 'original'
                    ? 'h-full'
                    : settings.type === 'square'
                      ? 'aspect-square'
                      : 'aspect-video'
                }`}
                alt="previewImage"
              />
            </div>
          )}
          {fileMedia && fileMedia.type.includes('video') && mediaPreview && (
            <div className="relative mb-2 overflow-hidden rounded-xl">
              <span
                onClick={handleClodePreviewMedia}
                className="absolute right-2 top-2 z-20 cursor-pointer rounded-full bg-black/70 p-2"
              >
                <Icons.Close className="h-[16px] w-[16px] fill-white" />
              </span>
              <video
                src={mediaPreview}
                className={`relative z-10 max-h-[512px] w-full rounded-xl object-contain`}
                controls
              />
            </div>
            // <div className="relative mb-2 overflow-hidden rounded-xl">
            //   <video src={mediaPreview} className="h-full w-full rounded-xl object-contain" />
            // </div>
          )}
          {modalEditPreviewImage && (
            <ModalEditPreviewImage
              onClose={() => setModalEditPreviewImage(!modalEditPreviewImage)}
              mediaPreview={mediaPreview || ''}
              setSettings={setSettings}
            />
          )}
          <div className="border-b-[1px] border-borderGray pb-3">
            <div className="flex max-w-max cursor-pointer items-center gap-x-1 rounded-full p-2 py-1 text-sm font-semibold transition-all duration-300 hover:bg-[#031018]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1gs4q39 r-10ptun7 r-1janqcz"
              >
                <g>
                  <path
                    className="fill-iconBlue"
                    d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"
                  ></path>
                </g>
              </svg>
              <span className="text-iconBlue">Everyone can reply</span>
            </div>
          </div>

          {/* CHOOSE */}
          <div className="flex flex-wrap items-center p-2 px-0">
            <div className="flex grow gap-x-1">
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleMediaChange}
                className="hidden"
                accept="image/*,video/*"
                ref={inputRef}
              />
              <label htmlFor="file" className="cursor-pointer rounded-full p-2 hover:bg-bgIconBlue">
                <Icons.Image w={20} h={20} classNamePath="fill-iconBlue" />
              </label>
              <span className="cursor-pointer rounded-full p-2 hover:bg-bgIconBlue">
                <Icons.Gif w={20} h={20} classNamePath="fill-iconBlue" />
              </span>

              <span className="cursor-pointer rounded-full p-2 hover:bg-bgIconBlue">
                <Icons.Poll w={20} h={20} classNamePath="fill-iconBlue" />
              </span>

              <span className="cursor-pointer rounded-full p-2 hover:bg-bgIconBlue">
                <Icons.Emoji w={20} h={20} classNamePath="fill-iconBlue" />
              </span>

              <span className="cursor-pointer rounded-full p-2 hover:bg-bgIconBlue">
                <Icons.Schedule w={20} h={20} classNamePath="fill-iconBlue" />
              </span>
            </div>
            <button
              className={`rounded-full px-4 py-2 font-bold text-black ${desc || fileMedia ? 'bg-white' : 'bg-textGray'}`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Share;
