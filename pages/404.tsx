import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="relative flex max-h-screen w-full flex-col overflow-y-auto dark:text-white">
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
        <div className="flex flex-col space-y-1">
          <p className="text-primary font-semibold">
            What you seek does not exist.
          </p>
          <p className="text-tertiary">
            Maybe this link is broken. Maybe something was deleted, or moved. In
            any case, there’s nothing to see here...
          </p>
        </div>
        <Link href="/">
          <button className="btn-blue">Go home</button>
        </Link>
      </div>
    </div>
  );
}