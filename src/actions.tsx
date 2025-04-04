'use server';

import imagekit from './components/ImageKit';

export const shareAction = async (
  formData: FormData,
  settings: { type: 'original' | 'wide' | 'square'; sentitive: boolean }
): Promise<void> => {
  //   const desc = formData.get('desc') as string | null;
  const file = formData.get('file') as File | null;
  const bytes = await file?.arrayBuffer();
  const buffer = bytes ? Buffer.from(bytes) : null;

  if (!buffer) {
    console.log('error: No file uploaded');
    return;
  }

  const transformation = `w-auto, ${settings.type === 'square' ? 'ar-1-1' : settings.type === 'wide' ? 'ar-16-9' : ''}`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file?.name || '',
      folder: '/posts',
      ...(file?.type.includes('image') && { transformation: { pre: transformation } }),
      customMetadata: {
        sensitive: settings.sentitive,
      },
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};
