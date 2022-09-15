import { useRouter } from "next/router";

export default function Post(props) {

  const router = useRouter();
  const { slug } = router.query;
  return (
    <main>
      Bookmarks:
      {slug}
    </main>
  );
}
