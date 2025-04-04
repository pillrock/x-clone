'use client';
import { useRouter } from 'next/navigation';
import { Icons } from './components/IconPublic';
import { useEffect } from 'react';

export const ModalCover = ({
  children,
  btnCloseDefault = false,
  centerContent = false,
  centerXContent = false,
  centerYContent = false,
}: {
  children: React.ReactNode;
  btnCloseDefault?: boolean;
  centerContent?: boolean;
  centerXContent?: boolean;
  centerYContent?: boolean;
}) => {
  const router = useRouter();
  const handleCloseModal = () => {
    router.back();
  };
  // useEffect(() => {
  //   document.body.classList.add('overflow-hidden');
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, []);
  return (
    <div
      onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          handleCloseModal();
        }
      }}
      className={`fixed left-0 top-0 z-20 flex h-screen w-full ${centerContent ? 'items-center justify-center' : ''} ${centerXContent ? 'justify-center' : ''} ${centerYContent ? 'items-center' : ''} bg-black/50`}
    >
      {btnCloseDefault && (
        <div className="absolute left-0 top-0 cursor-pointer p-5" onClick={handleCloseModal}>
          <Icons.Close classNamePath="fill-white" />
        </div>
      )}
      {children}
    </div>
  );
};
