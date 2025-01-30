"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState(0);
  const [imgPop, setImgPop] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/gallery.json"); // Fetch JSON from public folder
        const data = await response.json();
        setImages(data.gallery);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    fetchImages();
  }, []);

  const swipeImg = (moveType) => {
    if (!images.length) return;

    if (moveType === "prv") {
      setSelectedImg(selectedImg === 0 ? images.length - 1 : selectedImg - 1);
    }
    if (moveType === "nxt") {
      setSelectedImg(selectedImg === images.length - 1 ? 0 : selectedImg + 1);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {images.map((loc, i) => (
          <a
            key={i}
            onClick={() => {
              setSelectedImg(i);
              setImgPop(true);
            }}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 cursor-pointer hover:scale-110 transition-all ease-linear"
          >
            <Image
              src={`${loc.img}`}
              alt={loc.description}
              width={300}
              height={250}
              className="w-full h-64 object-cover"
            />
          </a>
        ))}
      </div>

      {imgPop && images.length > 0 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-between items-center gap-3">
          {/* Close Button */}
          <a
            onClick={() => setImgPop(false)}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              height="128"
              width="128"
              className="w-10 h-10"
            >
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#0F0F0F"
              />
            </svg>
          </a>
          {/* Previous Button */}
          <a
            onClick={() => swipeImg("prv")}
            className=" rounded-full ml-2 hover:translate-x-2 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="w-10 h-10 md:w-16 md:h-16 fill-white"
            >
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          {/* Image Preview */}
          <div>
            <Image
              src={`${images[selectedImg].img}`}
              alt={images[selectedImg].description}
              width={650}
              height={500}
              className="w-full max-w-[650px] h-auto"
            />
            <h3 className="text-center text-white font-bold uppercase text-3xl mt-3">
              {images[selectedImg].description}
            </h3>
          </div>

          {/* Next Button */}
          <a
            onClick={() => swipeImg("nxt")}
            className=" rounded-full mr-2 hover:-translate-x-2 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="w-10 h-10 md:w-16 md:h-16 fill-white"
            >
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
    </>
  );
};

export default Gallery;
