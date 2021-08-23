import { ICBack } from "assets/images";
import React from "react";
import { Link, withRouter } from "react-router-dom";

function SidebarClass({ match, data, defaultUri }) {
  const getNavLinkClass = (path) => {
    return match.url === path || defaultUri === path
      ? "active text-teal"
      : "text-indigo-500";
  };

  const list = [];
  data?.chapters?.forEach?.((chapter, index) => {
    list.push(
      <span
        key={`chapter-${chapter.id}-${index}`}
        className="nav-header relative block py-3 px-5 bg-indigo-900 text-white text-left"
      >
        {chapter?.name ?? "Chapter name"}
      </span>
    );
    if (chapter?.lessons?.length > 0)
      chapter?.lessons?.forEach((lesson, index2) =>
        list.push(
          <Link
            key={`lesson-${lesson.id}-${index2}`}
            className={[
              "relative hover:text-white flex items-center py-3 px-5 transition-all duration-200 w-full truncate ...",
              getNavLinkClass(
                `/courses/${data.id}/${chapter.id}/${lesson.video}`
              ),
            ].join(" ")}
            to={`/courses/${data.id}/${chapter.id}/${lesson.video}`}
          >
            {lesson?.name ?? "Lesson name"}
          </Link>
        )
      );
  });

  return (
    <aside
      className="bg-indigo-1000 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="overflow-y-auto max-h-screen h-screen fixed bg-indigo-1000 flex flex-col content-between z-50"
        style={{ width: 280 }}
      >
        <ul className="main-menu mt-12">
          <li>
            <Link
              className="relative flex items-center py-3 px-5 w-full text-white mb-12"
              to="/"
            >
              <ICBack className="mr-2" />
              Back to home
            </Link>
          </li>
          {list}
        </ul>
      </div>
    </aside>
  );
}
export default withRouter(SidebarClass);
