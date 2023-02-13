import React from "react";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="container mx-auto">
      <div className="container px-64 py-9">
        <div className="main flex  items-center justify-between py-5">
          <div className="logo flex items-center space-x-5">
            <Image src="/assets/logo.svg" width={45} height={45} alt="" />
            <h1 className="text-2xl font-bold">Jhone Doy</h1>
          </div>
          <ul className="flex space-x-5 font-bold text-xl">
            <li>
              <a href="intro">Intro</a>
            </li>
            <li>
              <a href="intro">Blog</a>
            </li>
            <li>
              <a href="intro">Uses</a>
            </li>
            <li>
              <a href="intro">Contact</a>
            </li>
          </ul>
        </div>

        <div className="heroSection pt-32">
          <Image
            className="block"
            src="/assets/profilePic.jpg"
            width={60}
            height={60}
            alt="logo.png"
          />
          <h5 className="text-6xl font-bold mt-6">Hi, I’m Samir Shaikh.</h5>
          <p className="block text-2xl w-10/12 mt-4 ">
            A software engineer and open-source advocate enjoying the sunny life
            in Barcelona, Spain.
          </p>

          <button className="text-3xl mt-9 bg-gray-800 p-4 rounded-md font-bold text-white">
            Say Hello!
          </button>
        </div>
        <div className="my-story flex items-start flex-col pt-60 space-y-4">
          <div className="storySEction flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className="text-6xl"
                d="M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"
              ></path>
            </svg>
            <h3 className="text-3xl m-4 font-bold">My Story</h3>
          </div>
          <div className="lecture text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestie. Et leo duis ut diam. Sit amet tellus
            cras adipiscing enim eu turpis. Adipiscing at in tellus integer
            feugiat. Maecenas accumsan lacus vel facilisis. Eget egestas purus
            viverra accumsan in nisl nisi scelerisque eu. Non tellus orci ac
            auctor augue mauris augue neque gravida. Auctor augue mauris augue
            neque gravida in fermentum et sollicitudin. Tempus urna et pharetra
            pharetra massa massa ultricies mi quis. Amet mauris commodo quis
            imperdiet massa. Integer vitae justo eget magna fermentum iaculis eu
            non.
          </div>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>
        <div className="loops py-9">
          <span className="p-1  rounded-full text-center bg-sky-300 ">
            category
          </span>
          <p className="font-bold pt-4 text-2xl">
            Quis hendrerit dolor magna eget est lorem ipsum dolor sit
          </p>
          <span className="font-light pt-4">July 19, 2020 // 4 min read</span>
        </div>

        <div className="projec">
          <hr />
          <div className="headline flex items-center space-x-3 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 3c-1.654 0-3 1.346-3 3 0 .502.136.968.354 1.385l-1.116 1.302A3.976 3.976 0 0 0 13 8c-.739 0-1.425.216-2.02.566L9.566 7.152A3.449 3.449 0 0 0 10 5.5C10 3.57 8.43 2 6.5 2S3 3.57 3 5.5 4.57 9 6.5 9c.601 0 1.158-.166 1.652-.434L9.566 9.98A3.972 3.972 0 0 0 9 12c0 .997.38 1.899.985 2.601l-1.692 1.692.025.025A2.962 2.962 0 0 0 7 16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.476-.121-.919-.318-1.318l.025.025 1.954-1.954c.421.15.867.247 1.339.247 2.206 0 4-1.794 4-4a3.96 3.96 0 0 0-.439-1.785l1.253-1.462c.364.158.764.247 1.186.247 1.654 0 3-1.346 3-3s-1.346-3-3-3zM7 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5 5.5C5 4.673 5.673 4 6.5 4S8 4.673 8 5.5 7.327 7 6.5 7 5 6.327 5 5.5zm8 8.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
            </svg>
            <h2
              className="text-2xl
             font-bold"
            >
              My Projects
            </h2>
          </div>
          <div className="sopa space-y-3">
          <div className="divfirst px-8 py-2 flex items-center roundmd bg-pink-100">
            <div className="div">
              <h3 className="font-bold text-xl ">TAILWINDCSS</h3>
              <p className="text-lg py-2">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quo
                neque suscipit libero officiis cumque cupiditate aspernatur
                dicta quod quidem sit, adipisci numquam iste veniam enim natus
                quos ab ducimus?
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
          <div className="divfirst px-8 py-2 flex items-center roundmd bg-pink-100">
            <div className="div">
              <h3 className="font-bold text-xl ">TAILWINDCSS</h3>
              <p className="text-lg py-2">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quo
                neque suscipit libero officiis cumque cupiditate aspernatur
                dicta quod quidem sit, adipisci numquam iste veniam enim natus
                quos ab ducimus?
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
          <div className="divfirst px-8 py-2 flex items-center roundmd bg-pink-100">
            <div className="div">
              <h3 className="font-bold text-xl ">TAILWINDCSS</h3>
              <p className="text-lg py-2">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quo
                neque suscipit libero officiis cumque cupiditate aspernatur
                dicta quod quidem sit, adipisci numquam iste veniam enim natus
                quos ab ducimus?
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
          <div className="divfirst px-8 py-2 flex items-center roundmd bg-pink-100">
            <div className="div">
              <h3 className="font-bold text-xl ">TAILWINDCSS</h3>
              <p className="text-lg py-2">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quo
                neque suscipit libero officiis cumque cupiditate aspernatur
                dicta quod quidem sit, adipisci numquam iste veniam enim natus
                quos ab ducimus?
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
