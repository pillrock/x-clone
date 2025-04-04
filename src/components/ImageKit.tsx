import ImageKit from 'imagekit';

console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY_IMAGEKIT);

const imagekit = new ImageKit({
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT_IMAGEKIT!,
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY_IMAGEKIT!,
  privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY_IMAGEKIT!,
});

export default imagekit;
