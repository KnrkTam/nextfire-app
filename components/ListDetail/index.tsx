import { useRef } from "react";
import TitleBar from "../Sidebar/TitleBar";

interface Props {
  list: React.ReactElement | null;
  detail: React.ReactElement | null;
  hasDetail?: boolean;
}

export function ListDetailView({ list, detail, hasDetail = false }: Props) {
  const scrollContainerRef = useRef(null);

  return (
    <>
      <TitleBar scrollContainerRef={scrollContainerRef} title="Bookmarks" />
      <div className="flex min-w-[15rem]">
        {list && (
          <div
            id="list"
            className={`bg-zinc-100 ${
              hasDetail ? "hidden lg:flex" : "min-h-screen w-full"
            }`}
          >
            <div className="space-y-11 px-2">{list}</div>
          </div>
        )}
        {detail}
      </div>
    </>
  );
}
