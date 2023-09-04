import { Meteors } from "./meteor"

export const MeteorPreview = ({
  title,
  content,
  meteors,
}: {
  title: string
  content: string
  meteors: number
}) => {
  return (
    <div className=" h-fit">
      <div className=" relative h-3/4 max-w-sm md:h-1/2">
        <div className="absolute inset-0 h-full w-full scale-[0.80] rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start  justify-end overflow-hidden rounded-2xl border border-gray-800 bg-slate-200 px-4 py-8 shadow-xl dark:bg-black">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-900 dark:text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="relative z-50 mb-0 mt-4 text-xl font-bold text-black dark:text-white">
            {title}
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            {content}
          </p>

          <button className="rounded-lg border border-gray-500 px-4 py-1  !text-sm text-gray-900 dark:text-gray-300">
            Explore &rarr;
          </button>

          <Meteors number={meteors} />
        </div>
      </div>
    </div>
  )
}
