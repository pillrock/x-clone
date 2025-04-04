'use client';

import { IKVideo } from 'imagekitio-next';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
type VideoProps = {
  path: string;
  className?: string;
};
const Video = ({ path, className }: VideoProps) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      controls
      transformation={[{ quality: 90 }]}
    />
  );
};

export default Video;
