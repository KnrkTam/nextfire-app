import React, { useContext, useState, useCallback, useEffect, useRef } from "react";
import { GlobalNavigationContext } from "../../lib/context";
import Link from "next/link";

interface Props {
  title: string;
  globalMenu?: boolean;
  backButton?: boolean;
  backButtonHref?: string;
  magicTitle?: boolean;
  titleRef?: React.MutableRefObject<HTMLParagraphElement>;
  scrollContainerRef?: React.MutableRefObject<HTMLDivElement>;
  children?: React.ReactNode;
  leadingAccessory?: React.ReactNode;
  trailingAccessory?: React.ReactNode;
}

export default function TitleBar({
  title,
  globalMenu = true,
  backButton = false,
  backButtonHref,
  magicTitle = false,
  titleRef = null,
  scrollContainerRef = null,
  leadingAccessory = null,
  trailingAccessory = null,
  children,
}: Props) {
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);
  const [darkMode, setDarkMode] = useState(true);
  const [offset, setOffset] = useState(200);
  const [opacity, _setOpacity] = useState(0);
  const [currentScrollOffset, _setCurrentScrollOffset] = useState(0);
  const [initialTitleOffsets, _setInitialTitleOffsets] = useState({
    top: 0,
    bottom: 0,
  });
  const initialTitleOffsetsRef = useRef(initialTitleOffsets);
  const setInitialTitleOffsets = (data) => {
    initialTitleOffsetsRef.current = data;
    _setInitialTitleOffsets(data);
  };

  const opacityRef = useRef(opacity);
  const setOpacity = (data) => {
    opacityRef.current = data;
    _setOpacity(data);
  };

  const currentScrollOffsetRef = useRef(currentScrollOffset);
  const setCurrentScrollOffset = (data) => {
    currentScrollOffsetRef.current = data;
    _setCurrentScrollOffset(data);
  };

  const handler = useCallback(() => {
    const shadowOpacity = scrollContainerRef.current.scrollTop / 200;
    setCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity);

    if (!titleRef?.current || !initialTitleOffsetsRef?.current) return;

    const titleTop = titleRef.current.getBoundingClientRect().top - 48;
    const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56;
    const initialOffsets = initialTitleOffsetsRef.current;

    let offsetAmount =
      parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100;

    let opacityOffset =
      parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1;

    setOffset(Math.min(Math.max(offsetAmount, 0), 100));
    setOpacity(opacityOffset);
  }, [title, titleRef, scrollContainerRef]);

  useEffect(() => {
    scrollContainerRef?.current?.addEventListener("scroll", handler);
    return () =>
      scrollContainerRef?.current?.removeEventListener("scroll", handler);
  }, [title, titleRef, scrollContainerRef]);

  useEffect(() => {
    if (!titleRef?.current || !scrollContainerRef?.current) return;
    scrollContainerRef.current.scrollTop = 0;
    setOpacity(0);
    setInitialTitleOffsets({
      bottom: titleRef.current.getBoundingClientRect().bottom - 56,
      top: titleRef.current.getBoundingClientRect().top - 48,
    });
  }, [title, titleRef, scrollContainerRef]);

  useEffect(() => {
    const isDarkMode =
      window?.matchMedia &&
      window?.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode) setDarkMode(true);
  }, []);

  return (
    <>
      <div
        style={{
          background: `rgba(${darkMode ? "50,50,50" : "255,255,255"},${
            currentScrollOffset === 0
              ? currentScrollOffset
              : darkMode
              ? currentScrollOffset + 0.5
              : currentScrollOffset + 0.8
          })`,
          boxShadow: `0 1px 3px rgba(0,0,0,${currentScrollOffset})`,
          minHeight: "48px",
        }}
        className={`filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900`}
      >
        <div className="flex flex-none items-center justify-between">
          <span className="flex items-center space-x-3">
            {globalMenu && (
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
              >
                {isOpen ? (
                  <pre>X</pre>
                ) : (
                  <pre>Menu</pre>
                )}
              </span>
            )}

            {backButton && (
              <Link href={backButtonHref}>
                <a className="text-primary flex items-center justify-center rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden">
                  <pre>ArrowLeft</pre>
                </a>
              </Link>
            )}

            <h2
              style={
                magicTitle
                  ? {
                      transform: `translateY(${offset}%)`,
                      opacity: `${opacity}`,
                    }
                  : {}
              }
              className="text-primary transform-gpu text-sm font-bold line-clamp-1 dark:text-white"
            >
              {title}
            </h2>
          </span>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
