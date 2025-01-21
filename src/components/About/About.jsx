import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://imgs.search.brave.com/wmdB-tIPnPqXa2mQcRWE4ZlUxMEtLTqBjy_OvNmiYt0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ1LzQ1LzQ0/LzM2MF9GXzQ1NDU0/NDgwX04wb0RNeDhv/cTBRWTU1ZjRrUU1o/T0hXUjFrVktpN3J2/LmpwZw"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-8/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Sharing Stories, Insights, and More
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Welcome to my blog—a space where ideas come to life, stories are shared, and insights are explored. Whether it’s technology, lifestyle, creativity, or personal growth, this platform is designed to inspire, inform, and connect.Here, you’ll find a collection of thoughtfully curated articles, guides, and stories aimed at sparking curiosity and encouraging meaningful conversations. My goal is to create a community where ideas flow freely, and every visitor leaves with something valuable to reflect on or apply in their own journey.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Dive in, explore, and let’s embark on this blogging adventure together!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}