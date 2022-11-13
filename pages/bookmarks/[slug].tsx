import { useRouter } from "next/router";
import BookmarksList from "../../components/Bookmarks/BookmarksList";
import { ListDetailView } from "../../components/ListDetail";

export default function index(page) {

  const router = useRouter();
  const { slug } = router.query;
  return (
    <main>
      <ListDetailView
        list={<BookmarksList />}
        hasDetail={true}
        detail={page}
      />
      Bookmarks:
      {slug}
    </main>
  );
}
