import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export default function BookmarksList() {
  // const router = useRouter();

  const bookmarks = [
    {
      id: "1",
      title: "1",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
    {
      id: "2",
      title: "2",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
    {
      id: "3",
      title: "3",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
    {
      id: "4",
      title: "4",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
    {
      id: "555555",
      title: "555555",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
    {
      id: "6666",
      title: "6666",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
    {
      id: "77777",
      title: "77777",
      comment: "good",
      url: "https://kenricktam.vercel.app/",
    },
  ];

  return bookmarks
    ? bookmarks.map((bookmark) => (
        <BookmarkItems key={bookmark.id} bookmark={bookmark}  />
      ))
    : <></>;
}

function BookmarkItems({ bookmark }) {
  return (
    <Link href={`/bookmarks/${bookmark.id}`}>
      <a className="flex space-x-3 border-b border-gray-100 py-3 px-3.5 text-sm dark:border-gray-900 lg:rounded-lg lg:border-none lg:py-2 sm:hover:bg-gray-200 sm:dark:hover:bg-gray-800">
        Test
        {bookmark.title}
      </a>
    </Link>
  );
}
