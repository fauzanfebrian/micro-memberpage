import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, ListClassItem, Loading } from "parts";
import { courses } from "consts";
import { fetchCourses, statusCourses, messageCourses } from "store/actions";

function Empty() {
  return (
    <section className="flex items-center h-screen">
      <div className="text-center py-12 mx-auto w-5/12">
        <img src="/images/il-404.jpg" alt="oops we lost" className="-mt-10" />
        <h1 className="text-3xl text-gray-900 mt-12">Time to invest</h1>
        <p className="text-lg text-gray-600 mt-4 text-center mx-auto mb-8">
          It seems you don’t have any class yet so let’s get them and grow your
          skills
        </p>
        <a
          href={`${process.env.REACT_APP_FRONTPAGE_URL}/library`}
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cari kelas
        </a>
      </div>
    </section>
  );
}

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
                  <div className="flex flex-wrap justify-start items-center -mx-4">
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
