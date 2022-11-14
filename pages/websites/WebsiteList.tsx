import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function WebsiteList({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      {data.map((item) => (
        <div className="" key={item.id}>
          <Link href={`/websites/${item.id}`}>
            <a className={`${slug == item.id && "text-red-500 bold "}`}>Test {item.id}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
