import LeftBar from '@/components/LeftBar';
import './globals.css';
import RightBar from '@/components/RightBar';
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <div className="mx-auto flex max-w-screen-md justify-between xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="sticky top-0 z-10 max-w-[259px] grow">
            <LeftBar />
          </div>
          <div className="max-w-[600px] grow border-x-[1px] border-x-borderGray">
            {children}
            {modal}
          </div>
          <div className="sticky top-0 z-10 hidden max-w-[350px] grow xl:flex">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
