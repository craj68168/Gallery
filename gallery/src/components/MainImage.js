import React, { Fragment, useEffect, useState } from "react";
import { SingleImage } from "./SingleImage";
import "./MainImages.css";
// import useScroll from "../utils/hooks/useScroll";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchImages from "../utils/hooks/useFetchImages";
import Loading from "./Loading";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";

export const MainImage = () => {
  // const scrollPosition = useScroll();
  const [page, setPage] = useState(0);
  const [searchData, setSearchData] = useState(null);
  const [images, setImages, loading, errors] = useFetchImages(page, searchData); // passing page no t0 useFetchImages custom hooks
  const [showPreview, setShowPreview] = useState(null);
  // scrollposition will be scrolly = scrollY pixels and scrollX = x axis pixels document.body.offsetheight will be exact size of full page and window.innerHeight means calculating with terminal with that height
  // useEffect(() => {
  //   if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
  //     setPage(page + 1);
  //   }
  // }, [scrollPosition]);

  let removeImg = i =>
    setImages(
      images.filter((img, index) => {
        return index !== i;
      })
    );

  // mapping images we got from api axios

  const handleChange = e => {
    setTimeout(() => {
      setSearchData(e.target.value);
    }, 1500);
  };

  return (
    <section style={{ textAlign: "center" }}>
      {errors.length > 0 ? (
        <h3>{errors}</h3>
      ) : (
        <Fragment>
          <div style={{ textAlign: "center" }}>
            {loading ? <Loading /> : <h1> Images {images.length}</h1>}
          </div>
          <div className="p-2  ">
            <input
              className="w-half border rounded shadow outline-none"
              type="text"
              placeholder="Enter the data"
              onChange={handleChange}
            />
          </div>
          <div className="" style={{ columnCount: 4 }}>
            <AnimateSharedLayout>
              <InfiniteScroll
                dataLength={images.length}
                next={() => setPage(page + 1)}
                hasMore={true}
              >
                {images.map((img, i) => (
                  <motion.div
                    className="my-2 border flex justify-center flex-wrap"
                    key={i}
                    // layoutId={img.urls.raw}
                  >
                    <SingleImage
                      img={img.urls.raw}
                      show={() => setShowPreview(img.urls.raw)} // passing function to component and its triger when click
                      i={i}
                      removeImg={removeImg}
                    />
                  </motion.div>
                ))}
              </InfiniteScroll>
              <AnimatePresence>
                {showPreview && (
                  <motion.section
                    // exit={{ opacity: 0, rotate: 360 }}
                    // layoutId={showPreview}
                    // onClick={() => setShowPreview(false)}
                    className="fixed w-full h-full flex justify-center top-0 left-0 items-center"
                    style={{ zIndex: "10000" }}
                  >
                    <div
                      className="bg-white"
                      style={{
                        border: "3.5px solid gray",
                        borderRadius: "10px",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={showPreview}
                        width="400"
                        height="auto"
                        className=" relative border rounded shadow outline-none"
                        onClick={() => setShowPreview(false)}
                      />
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </AnimateSharedLayout>
          </div>
        </Fragment>
      )}
    </section>
  );
};
