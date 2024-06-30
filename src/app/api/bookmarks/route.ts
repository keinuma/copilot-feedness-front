// write a route to get all bookmarks by Next.js
// bookmarks has a title and URL

import { NextResponse } from "next/server";

export async function GET() {
  // Your code to get all bookmarks goes here
  const bookmarks = [
    { title: "Bookmark 1", url: "https://example.com/bookmark1" },
    { title: "Bookmark 2", url: "https://example.com/bookmark2" },
    { title: "Bookmark 3", url: "https://example.com/bookmark3" },
  ];
  return NextResponse.json(bookmarks, { status: 200 });
}
