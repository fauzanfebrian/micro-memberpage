import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { messageCourses, statusCourses, watchCourse } from "store/actions";
import { SidebarClass, Loading, Centered } from "parts";
import { courses } from "consts";
import { withRouter } from "react-router-dom";

function DetailsClass({ match, history }) {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusCourses("loading"));
    courses
      .detail(match.params.class)
      .then((res) => {
        console.log(res);
        if (res.chapters.length === 0)
          throw new Error("Class might not be ready yet");
        else dispatch(watchCourse(res));
      })
      .catch((err) =>
        dispatch(messageCourses(err?.response?.data?.message ?? "error"))
      );
  }, [dispatch, match.params.class]);

  if (COURSES.status === "loading") return <Loading />;
  if (COURSES.status === "error")
    return <Centered>{COURSES?.message ?? "Error here"}</Centered>;

  let currentChapter, currentLesson;
  if (
    COURSES.status === "ok" &&
    COURSES?.data?.[match.params.class]?.chapters
  ) {
    currentChapter =
      COURSES?.data?.[match.params.class]?.chapters?.find(
        (chapter) => +chapter.id === +match.params.chapter
      ) ?? COURSES?.data?.[match.params.class]?.chapters?.[0];
    // eslint-disable-next-line no-unused-vars
    currentLesson =
      currentChapter?.lessons?.find(
        (lesson) => lesson.video === match.params.uid
      ) ?? currentChapter?.lessons?.[0];
  }
  return (
    <div className="flex">
      {COURSES?.data?.[match.params.class]?.chapters?.length > 0 && (
        <>
          <SidebarClass
            data={COURSES.data[match.params.class]}
            defaultUri={`/courses/${match.params.class}/${currentChapter.id}/${currentLesson.video}`}
          />
          <main className="flex-1">
            <div className="px-16">
              <section className="flex flex-col mt-8">
                <h1 className="text-4xl text-gray-900 font-medium">
                  {currentLesson?.name ?? "Lesson name"}
                </h1>
                <p className="text-lg text-gray-600">
                  Materi bagian dari {currentChapter?.name ?? "Chapter name"}
                </p>
              </section>
              <section className="flex flex-col mt-8">
                <div className="flex justify-start items-center -mx-4">
                  <div className="w-full px-4">
                    <div className="relative">
                      <div className="video-wrapper">
                        {currentLesson?.video && (
                          <YouTube
                            videoId={currentLesson?.video}
                            id={currentLesson?.video}
                            opts={{
                              playerVars: {
                                autoplay: 1,
                                controls: 1,
                                showinfo: 0,
                                rel: 0,
                              },
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default withRouter(DetailsClass);
