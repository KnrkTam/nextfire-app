import React from 'react'
import { ListDetailView } from '../../components/ListDetail';
import BookmarksList from '../../components/Bookmarks/BookmarksList';

export default function index({page}) {
  return (
    <div>
      <ListDetailView
        list={<BookmarksList />}
        detail={page}
        hasDetail={false}
      />
    </div>
  );
}
