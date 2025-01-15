import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="p-4">
      <section className="bg-sky-50 py-8 antialiased md:py-16">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">
              Limited Time Offer!
              <br />
              Up to 50% OFF!
            </h1>
            <p className="mb-4 max-w-2xl text-gray-800 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">
              A thrilling and impressive mystery novel that will take you on the
              bounciest roller coaster ride of your life!
            </p>
            <Link
              to="/listing"
              className="inline-block rounded-lg bg-black px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Available Now
            </Link>
          </div>
          <div className="hidden md:col-span-5 md:mt-0 md:flex">
            <img src="/assets/hanley.png" alt="bookstore ads" />
          </div>
        </div>
      </section>

      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            alt="background image of people sitting in a conference room"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                About The Author
              </h2>
              <p className="mt-8 text-pretty text-sm font-medium text-gray-300 sm:text-xl/8">
                Having been raised in the public eye at an early age, M.Y.
                Storie receded into the shadows as an adult – finding anonymity
                to be freeing and adventurous. To that end, the writer’s
                identity has remained as mysterious as the mysteries penned
                under the pseudonym “M.S. Storie.” In an online interview,
                Storie once said, “As a writer, I love that I can be anyone, at
                any place or time in history. All I have to do is put myself in
                my character’s shoes. I never know what will happen next, and
                it’s exhilarating.” Traveling around the globe with scientists
                for parents provided a unique upbringing and perspective on life
                and the world. Spending so much time in exotic, unfamiliar
                locations helped the enigmatic writer form many creative ideas,
                characters, and stories. Family and friends were unwavering
                sources of encouragement for Storie to share this talent with
                the world. A few years ago, when the unknown mystery writer
                decided to “officially” put words on paper, the result was the
                mesmerizing debut, The Summer Heist, followed by the widely
                praised sophomore release of Whispers of a Town Called Luna. And
                now, the highly anticipated Losing Hanley Manor is available at
                bookstores everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-2xl text-center py-10">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Find your next favorite book!</h1>
        <div className="mt-10">
          <Link
            to="/listing"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Go to Book Listing
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;