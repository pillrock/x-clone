'use client';

import { IKImage } from 'imagekitio-next';

type ImageProps = {
  path: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT_IMAGEKIT;
console.log(urlEndpoint);

const Image = ({ path, alt, w, h, className, tr }: ImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      {...(tr ? { transformation: [{ width: `${w}`, height: `${h}` }] } : { width: w, height: h })}
      className={className}
      lqip={{ active: true, quality: 10 }}
    />
  );
};

export default Image;
