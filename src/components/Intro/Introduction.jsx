import React from 'react'
import WEBASITESS from '../../assets/Website.png'
import INTRO from '../../Video/intro.mp4'

function Introduction() {
  return (
    
    <div class=" lg:my-8 md:px-6 pt-8" id="about">
  <section class="mb-8 text-center lg:text-left">
    <div class="lg:py-8 lg:ml-[-230px] md:px-6">
      <div class="container mx-auto xl:px-32">
        <div class="flex grid items-center lg:grid-cols-2 space-x-24">
          <div class="mb-8 md:mt-12 lg:mt-0 lg:mb-0 w-[400px] lg:h-[600px]">
            <div
              class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 class="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
              About Me
              </h2>
              <p class="mb-4 font-semibold"> Web Developer</p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              
I am a full-stack developer and software engineer with a master's degree in computer science. I have a strong passion for building innovative and user-friendly web applications. I am also skilled in a variety of programming languages and technologies, including Python(Django), JavaScript, React,Next js, and SQL.

I am a highly motivated and results-oriented individual with a proven track record of success. I am also a team player and I am always eager to learn new things. I am confident that my skills and experience would be a valuable asset to any company.

              <ul class="flex justify-center lg:justify-start">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
              </p>
              
            </div>
          </div>

          <div class="md:mb-12 lg:mb-0 w-[600px]">
            
              
              <video controls autostart autoPlay src={INTRO}  width='5800' height='12900'  type="video/mp4" class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20 ml-[-100px] lg:ml-0"  />

          </div>
          
        </div>
      </div>
    </div>
  </section>
  
</div>

  )
}

export default Introduction
