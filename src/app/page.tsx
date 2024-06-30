"use client";
// write component to display list of bookmarks
// bookmarks has a title and URL
// get a list of bookmarks from API
// code style is AppRouter

import React, { useEffect, useState } from "react";

// Define the Bookmark type
type Bookmark = {
  title: string;
  url: string;
};

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Fetch bookmarks from an API
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/bookmarks");
        const data = await response.json();
        setBookmarks(data);
      } catch (error) {
        console.error("Failed to fetch bookmarks:", error);
      }
    };

    fetchBookmarks();
  }, []);
  console.log(bookmarks);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of Bookmarks</h1>
      <ul className="space-y-2">
        {bookmarks.map((bookmark) => (
          <li key={bookmark.url} className="border-b border-gray-200">
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {bookmark.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
