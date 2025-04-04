import { useState } from 'react';
import { Icons } from './IconPublic';
import Image from 'next/image';

interface propsModal {
  mediaPreview: string | null;
  onClose: () => void;
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: 'original' | 'wide' | 'square';
      sentitive: boolean;
    }>
  >;
}

export default function ModalEditPreviewImage({ mediaPreview, onClose, setSettings }: propsModal) {
  const [activeType, setActiveType] = useState<'original' | 'wide' | 'square'>('original');
  const [isSensitive, setIsSensitive] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTypeChange = (type: 'original' | 'wide' | 'square') => {
    setActiveType(type);
    setSettings(prev => ({ ...prev, type }));
  };

  const handleSensitiveToggle = () => {
    setIsSensitive(prev => !prev);
    setSettings(prev => ({ ...prev, sentitive: !prev.sentitive }));
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed left-0 top-0 z-50 grid h-full w-full place-items-center overflow-hidden bg-black/50 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl rounded-xl bg-black p-6">
        {/* TOP */}
        <div className="flex items-center justify-between border-b border-borderGray pb-4">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="rounded-full p-2 hover:bg-[#181919]">
              <Icons.Arrow className="h-6 w-6 fill-white" />
            </button>
            <h1 className="text-xl font-bold">Edit media</h1>
          </div>
          <button
            onClick={handleSave}
            className="rounded-full bg-white px-6 py-2 font-bold text-black hover:bg-white/90"
          >
            Save
          </button>
        </div>

        {/* BODY */}
        <div className="mt-6 flex flex-col gap-6">
          {/* Image Preview */}
          <div className="relative mx-auto max-h-[512px] max-w-[512px] overflow-hidden rounded-xl">
            {mediaPreview && (
              <Image
                src={mediaPreview}
                width={512}
                height={512}
                alt="preview"
                className={`max-h-[512px] w-full max-w-[512px] rounded-xl object-contain ${
                  activeType === 'original'
                    ? 'h-full'
                    : activeType === 'square'
                      ? 'aspect-square'
                      : 'aspect-video'
                }`}
              />
            )}
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4">
            {/* Aspect Ratio Controls */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-textGray">Aspect ratio</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleTypeChange('original')}
                  className={`rounded-full p-2 transition-colors ${
                    activeType === 'original' ? 'bg-white/10' : 'hover:bg-[#181919]'
                  }`}
                >
                  <Icons.Original className="h-6 w-6 fill-white" />
                </button>
                <button
                  onClick={() => handleTypeChange('wide')}
                  className={`rounded-full p-2 transition-colors ${
                    activeType === 'wide' ? 'bg-white/10' : 'hover:bg-[#181919]'
                  }`}
                >
                  <Icons.Wide className="h-6 w-6 fill-white" />
                </button>
                <button
                  onClick={() => handleTypeChange('square')}
                  className={`rounded-full p-2 transition-colors ${
                    activeType === 'square' ? 'bg-white/10' : 'hover:bg-[#181919]'
                  }`}
                >
                  <Icons.Square className="h-6 w-6 fill-white" />
                </button>
              </div>
            </div>

            {/* Sensitive Content Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-textGray">Mark as sensitive</span>
              <button
                onClick={handleSensitiveToggle}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  isSensitive ? 'bg-iconBlue' : 'bg-white/10'
                }`}
              >
                <span
                  className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                    isSensitive ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
