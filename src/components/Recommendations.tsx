import Link from 'next/link';
import UserRecommend, { UserRecommendProps } from './UserRecommend';
const userListRecommend: UserRecommendProps[] = [
  {
    avtPath: 'general/avatar.png',
    name: 'Elon Musk',
    username: '@elonmusk',
    verified: true,
  },
  {
    avtPath: 'general/avatar.png',
    name: 'Bill Gates',
    username: '@BillGates',
    verified: true,
  },
  {
    avtPath: 'general/avatar.png',
    name: 'Mark Zuckerberg',
    username: '@finkd',
    verified: true,
  },
  {
    avtPath: 'general/avatar.png',
    name: 'Jeff Bezos',
    username: '@JeffBezos',
    verified: true,
  },
];

const Recommendations = () => {
  return (
    <div className="flex flex-col gap-y-4 rounded-2xl border-[1px] border-borderGray p-4">
      <h1 className="text-xl font-bold">Who to follow</h1>
      <div className="flex flex-col gap-y-4">
        {userListRecommend.map(user => (
          <UserRecommend key={user.username} {...user} />
        ))}
      </div>
      <Link href="/" className="my-3 cursor-pointer text-base text-iconBlue">
        Show more
      </Link>
    </div>
  );
};

export default Recommendations;
