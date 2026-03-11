import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedSections() {
  return (
    <section className="space-y-5">
      <div className="space-y-3 arabic-rtl arabic-align">
        <div className="flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300 font-semibold arabic-semibold">
          <i>
            <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 10.435c0-.256.051-.512.153-.758.233-.56.854-1.046 2.095-2.018l6.206-4.856c1.241-.972 1.862-1.458 2.577-1.64.63-.16 1.308-.16 1.938 0 .715.183 1.336.668 2.577 1.64l6.206 4.856c1.241.972 1.862 1.458 2.095 2.018.102.246.153.502.153.758v3.13c0 .256-.051.512-.153.758-.233.56-.854 1.046-2.095 2.017l-6.206 4.857c-1.241.972-1.862 1.457-2.577 1.64-.63.16-1.308.16-1.938 0-.715-.183-1.336-.668-2.577-1.64L2.248 16.34C1.007 15.37.386 14.883.153 14.323A1.971 1.971 0 0 1 0 13.565v-3.13Z" />
            </svg>
          </i>
          <h2 className="capitalize">Featured Sections</h2>
        </div>
        <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center arabic-rtl arabic-align">
          Explore everything I've crafted, contributed, and accomplished.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 arabic-rtl arabic-align">
        {/* Projects Showcase Card */}
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 p-0! md:col-span-2 grid grid-cols-2 gap-2 from-pink-500 to-rose-500">
          <div className="flex flex-col px-6 pt-6 pb-3 item-start">
            <Link href="/projects" className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <svg height="22" width="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z" />
              </svg>
            </Link>
            <h2 className="mb-1 mt-3 text-base text-neutral-800 dark:text-neutral-300 arabic-semibold font-semibold">
              Projects Showcase
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 arabic-text-xs">
              A selection of real apps built to solve real problems.
            </p>
          </div>
          <div className="relative w-fit">
            <div className="max-h-[300px] overflow-y-auto p-4 scrollbar-hide">
              <div className="mb-4 cursor-pointer">
                <Link href="/projects/my-personal-portfolio-v1">
                  <div className="rounded-xl bg-neutral-300 p-[3px] dark:bg-neutral-800">
                    <div className="overflow-hidden">
                      <Image
                        alt="Portfolio Project"
                        width={150}
                        height={50}
                        className="rounded-lg shadow-xl"
                        src="https://res.cloudinary.com/dmringwwj/image/upload/v1766921746/portfolio1_sdqaz2.png"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Card */}
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 p-0! md:col-span-1 flex flex-col from-indigo-500 to-purple-500">
          <div className="flex flex-col px-6 pt-6 pb-3 items-center text-center">
            <Link href="/about" className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <svg height="22" width="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
              </svg>
            </Link>
            <h2 className="mb-1 mt-3 text-base text-neutral-800 dark:text-neutral-300 arabic-semibold font-semibold">
              About Me
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 arabic-text-xs">
              Who I am and what I do.
            </p>
          </div>
          <div className="flex items-center justify-center pb-2">
            <div className="relative" style={{ width: '100px', height: '150px' }}>
              <div className="overflow-hidden rounded-2xl border-4 border-neutral-300 dark:border-neutral-700 shadow-2xl" style={{ width: '100px', height: '150px' }}>
                <Image
                  alt="Hussain App Developer"
                  fill
                  className="object-cover"
                  src="https://res.cloudinary.com/dmringwwj/image/upload/v1765126011/hussainappdeveloper1_xha3bc.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Tools Card */}
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 p-0! md:col-span-1 flex flex-col from-emerald-400 to-green-600">
          <div className="flex flex-col px-6 pt-6 pb-3 items-center text-center">
            <Link href="/" className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <svg height="22" width="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
              </svg>
            </Link>
            <h2 className="mb-1 mt-3 text-base text-neutral-800 dark:text-neutral-300 arabic-semibold font-semibold">
              Skills & Tools
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 arabic-text-xs">
              Covering mobile, web, AI, and UI/UX technologies.
            </p>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 p-0! md:col-span-1 flex flex-col from-yellow-400 to-orange-500">
          <div className="flex flex-col px-6 pt-6 pb-3 items-center text-center">
            <Link href="/achievements" className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <svg height="22" width="22" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128,136a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,136Zm-8-40H72a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm112,65.47V224A8,8,0,0,1,220,231l-24-13.74L172,231A8,8,0,0,1,160,224V200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V86.53a51.88,51.88,0,0,1,0,74.94ZM160,184V161.47A52,52,0,0,1,216,76V56H40V184Zm56-12a51.88,51.88,0,0,1-40,0v38.22l16-9.16a8,8,0,0,1,7.94,0l16,9.16Zm16-48a36,36,0,1,0-36,36A36,36,0,0,0,232,124Z" />
              </svg>
            </Link>
            <h2 className="mb-1 mt-3 text-base text-neutral-800 dark:text-neutral-300 arabic-semibold font-semibold">
              Achievements
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 arabic-text-xs">
              Milestones from programs, projects, and communities.
            </p>
          </div>
        </div>

        {/* Chat Room Card */}
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 p-0! md:col-span-1 flex flex-col from-gray-700 to-gray-900">
          <div className="flex flex-col px-6 pt-6 pb-3 items-center text-center">
            <Link href="/chat" className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <svg height="22" width="22" viewBox="0 0 256 256" fill="currentColor">
                <path d="M132,20A104.11,104.11,0,0,0,28,124v84a20,20,0,0,0,20,20h84a104,104,0,0,0,0-208Zm0,184H52V124a80,80,0,1,1,80,80Zm-8-76a16,16,0,1,1-16-16A16,16,0,0,1,124,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,172,128Z" />
              </svg>
            </Link>
            <h2 className="mb-1 mt-3 text-base text-neutral-800 dark:text-neutral-300 arabic-semibold font-semibold">
              Chat Room
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 arabic-text-xs">
              Open space to talk and collaborate.
            </p>
          </div>
          <div className="flex flex-col gap-2 px-2 py-2 force-ltr">
            <div className="max-w-[80%] self-start rounded-2xl rounded-tl-none bg-neutral-200 px-4 py-3 dark:bg-neutral-800 dark:text-neutral-50">
              <p className="text-sm arabic-text-rtl">Hi, is this your website?</p>
            </div>
            <div className="max-w-[80%] self-end rounded-2xl rounded-tr-none brand-bg px-4 py-3 text-white">
              <p className="text-sm arabic-text-rtl">Yes, I built it myself.</p>
            </div>
          </div>
        </div>

        {/* Services Card */}
        <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 p-0! md:col-span-2 grid grid-cols-2 gap-2 from-cyan-400 to-blue-600">
          <div className="flex flex-col px-6 pt-6 pb-3 item-start">
            <Link href="/" className="bg-neutral-200 rounded-lg w-fit p-3 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
              <svg height="22" width="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z" />
              </svg>
            </Link>
            <h2 className="mb-1 mt-3 text-base text-neutral-800 dark:text-neutral-300 arabic-semibold font-semibold">
              Services
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 arabic-text-xs">
              End-to-end solutions in web, mobile, AI, and design.
            </p>
          </div>
          <div className="flex h-full items-center justify-center px-8 py-6">
            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <span className="relative cursor-pointer text-[1.8rem] font-black">Web</span>
              <span className="relative cursor-pointer text-[1.8rem] font-black">Mobile</span>
              <span className="relative cursor-pointer text-[1.8rem] font-black">AI</span>
              <span className="relative cursor-pointer text-[1.8rem] font-black">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
