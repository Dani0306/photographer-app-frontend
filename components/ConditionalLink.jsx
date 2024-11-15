import Link from 'next/link';

export default function ConditionalLink({ href, condition, children }) {
  const handleClick = (event) => {
    if (!condition) {
      event.preventDefault();
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
