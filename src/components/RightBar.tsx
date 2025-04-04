import Link from 'next/link';
import PopularTags from './PopularTags';
import Recommendations from './Recommendations';
import Search from './Search';

const RightBar = () => {
  return (
    <div className="sticky top-0 flex h-min flex-col gap-y-4">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="flex flex-wrap gap-2 text-sm text-textGray">
        <Link href="/" className="hover:underline">
          Term of Service
        </Link>
        <Link href="/" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:underline">
          Cookie Policy
        </Link>
        <Link href="/" className="hover:underline">
          Accessibility
        </Link>
        <Link href="/" className="hover:underline">
          Ads info
        </Link>
        <Link href="/" className="hover:underline">
          More
        </Link>
        <span>© 2025 L Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;
