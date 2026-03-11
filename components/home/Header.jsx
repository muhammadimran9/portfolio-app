import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="lg:w-1/5">
      <div className="sticky top-0 z-10 flex max-h-screen flex-col overflow-y-auto sidebar-scroll transition-all duration-300 lg:py-8">
        <div className="fixed z-20 w-full bg-neutral-50 p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-neutral-900 lg:relative lg:border-none lg:bg-transparent! lg:p-0 lg:shadow-none">
          <div className="flex items-center justify-between md:px-2 lg:flex-col lg:space-y-4">
            <div className="flex w-full grow items-center gap-4 lg:flex-col lg:gap-0.5">
              <button className="cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded-full">
                <div className="overflow-hidden rounded-full">
                  <Image
                    alt="Muhammad Hussain Web App Developer"
                    width={68}
                    height={68}
                    className="rounded-full border-2 border-neutral-400 dark:border-neutral-600"
                    src="https://res.cloudinary.com/dmringwwj/image/upload/v1772403313/hussainappdeveloper/ollcje7mxizuosqzpv23.jpg"
                  />
                </div>
              </button>
              
              <div className="mt-1 flex items-center gap-2 lg:mt-4">
                <Link href="/">
                  <h2 className="grow text-lg arabic-text-lg font-medium lg:text-xl lg:arabic-text-xl">
                    Muhammad Hussain
                  </h2>
                </Link>
                <div className="relative inline-block">
                  <svg className="text-blue-400" height="18" width="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                  </svg>
                </div>
              </div>
              
              <div className="hidden text-sm arabic-text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
                JavaScript Developer
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="my-4 border-t border-neutral-300 dark:border-neutral-700"></div>
          <div className="hidden lg:block">
            <nav className="flex flex-col gap-y-1">
              <Link href="/" className="flex items-center gap-2 py-2 px-4 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-200 rounded-lg group">
                <div className="transition-all duration-300 group-hover:-rotate-12 animate-pulse">
                  <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z" />
                  </svg>
                </div>
                <div className="grow">Home</div>
              </Link>

              <Link href="/about" className="flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg group hover:lg:bg-neutral-200 hover:dark:lg:bg-neutral-800">
                <div className="transition-all duration-300 group-hover:-rotate-12">
                  <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                  </svg>
                </div>
                <div className="grow">About</div>
              </Link>

              <Link href="/projects" className="flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg group hover:lg:bg-neutral-200 hover:dark:lg:bg-neutral-800">
                <div className="transition-all duration-300 group-hover:-rotate-12">
                  <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z" />
                  </svg>
                </div>
                <div className="grow">Projects</div>
              </Link>

              <Link href="/contact" className="flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg group hover:lg:bg-neutral-200 hover:dark:lg:bg-neutral-800">
                <div className="transition-all duration-300 group-hover:-rotate-12">
                  <svg height="20" width="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z" />
                  </svg>
                </div>
                <div className="grow">Contact</div>
              </Link>
            </nav>
          </div>
          
          <div className="my-4 border-t border-neutral-300 dark:border-neutral-700"></div>
          <div className="font-sora flex flex-wrap items-center justify-center gap-1 text-center text-sm text-neutral-600 dark:text-neutral-400">
            <p>COPYRIGHT © 2026</p>
            <p>Muhammad Hussain. All rights reserved.</p>
            <p className="brand-bg text-white border-2 border-neutral-400 dark:border-neutral-500 px-3 py-0.5 rounded-3xl">
              v 2.0
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
