import Link from "next/link";
import React from "react";
import { data } from "./data";
import WebsiteList from "./websiteList";

export default function index() {
  return (
    <div>
      <WebsiteList data={data} />
    </div>
  );
}
