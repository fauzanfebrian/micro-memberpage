import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, ListClassItem, Loading, Empty } from "parts";
import { courses } from "consts";
import { fetchCourses, statusCourses, messageCourses } from "store/actions";

export default function MyClass() {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusCourses("loading"));
    courses
      .mine()
      .then((res) => dispatch(fetchCourses(res.data)))
      .catch((err) =>
        dispatch(messageCourses(err?.response?.data?.message ?? "error"))
      );
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-16">
          {COURSES.status === "loading" && <Loading />}
          {COURSES.status === "error" && COURSES.message}
          {COURSES.status === "ok" &&
            (COURSES.total > 0 ? (
              <>
                <section className="flex flex-col mt-8">
                  <h1 className="text-4xl text-gray-900 text-medium">
                    My Class
                  </h1>
                  <p className="text-lg text-gray-600">
                    Continue learning to pursue your dream
                  </p>
                </section>
                <div className="flex-col mt-8">
                  <div className="flex flex-wrap justify-start items-start -mx-4">
                    {Object.values(COURSES.data)?.map?.((item, index) => (
                      <ListClassItem data={item} key={index} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Empty />
            ))}
        </div>
      </main>
    </div>
  );
}
