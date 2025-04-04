import Image from '@/components/Image';
import { ModalCover } from '@/utils';

const PhotoModal = () => {
  return (
    <ModalCover centerContent btnCloseDefault>
      <div className="flex w-full items-center justify-center overflow-hidden">
        <Image className="h-auto w-full" path="general/cover.jpg" w={1500} h={500} alt="photo" />
      </div>
    </ModalCover>
  );
};

export default PhotoModal;
