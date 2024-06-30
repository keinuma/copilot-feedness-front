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
        const response = await fetch("https://example.com/api/bookmarks");
        const data = await response.json();
        setBookmarks(data);
      } catch (error) {
        console.error("Failed to fetch bookmarks:", error);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div>
      <h1>List of Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.url}>
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
