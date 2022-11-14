import React from 'react'
import { useRouter } from "next/router";
import WebsiteList from './websiteList';
import { data } from './data';


export default function index(page) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug)

  return (
    <div>
      <WebsiteList data={data} />

      {slug}
    </div>
  );
}
