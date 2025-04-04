import Image from '@/components/Image';
import { ModalCover } from '@/utils';

const PhotoModal = () => {
  return (
    <ModalCover centerContent btnCloseDefault>
      <div className="m-6 flex max-h-[368px] max-w-[368px] items-center justify-center overflow-hidden rounded-full">
        <Image className="h-auto w-full" path="general/avatar.png" alt="photo" w={500} h={500} />
      </div>
    </ModalCover>
  );
};

export default PhotoModal;
