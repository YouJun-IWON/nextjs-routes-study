import Link from 'next/link';

// Because it is a component, not a page, serverside rendering cannot be performed.

export default function SubLayout({ children }) {
  return (
    <div>
      <h1>
        <Link href='/'>
          <div>HOME로</div>
        </Link>
      </h1>
      {children}
    </div>
  );
}
