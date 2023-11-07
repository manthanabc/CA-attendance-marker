import Image from 'next/image'

export default function Home() {

return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <head>
        <title>Domains API</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="flex flex-col items-center justify-top w-full flex-1 sm:px-20 text-center my-10">
        <h1 className="text-4xl sm:text-6xl font-bold">C.A Attendance Marker</h1>

        <form
         className="flex justify-between space-x-4 px-5 w-full max-w-2xl h-10 mt-10"
        >
          <input
            type="text"
            name="domain"
            autoComplete="off"
            placeholder="https://form.google.com/xyz"
            required
            className="rounded-md border text-black border-gray-300 focus:ring-0 focus:border-black px-4 flex-auto min-w-0 sm:text-sm"
          />
          <button
            type="submit"
            className={`${false && 
                'bg-black text-white border-black hover:text-black hover:bg-white'
            } py-2 w-28 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
          >
            Submit
          </button>
        </form>

        {false && (
          <div className="text-red-500 text-left w-full max-w-2xl mt-5 text-sm flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              shapeRendering="geometricPrecision"
              style={{ color: '#f44336' }}
            >
              <circle cx="12" cy="12" r="10" fill="white" />
              <path d="M12 8v4" stroke="#f44336" />
              <path d="M12 16h.01" stroke="#f44336" />
            </svg>
            <p>
              Cannot add <b>{error.domain}</b> since it&apos;s already assigned
              to another project.
            </p>
          </div>
        )}

      <div className="w-full max-w-2xl mx-auto pt-16 mt-16">
        <div className="text-2xl font-bold mb-4">Marking Attendance for</div>
        <ul className="mt-7">
          {[14, 68, 73, 74].map((domain, index) => {
            return (
              <li className="text-lg py-2 border-b border-gray-300 text-gray-400" key={index}>
                Roll no. {domain}
              </li>
            );
          })}
        </ul>
      </div>   
      <div className="flex w-full text-center items-start pt-16 mt-16 justify-center">
        <form
         className="flex justify-start space-x-4 px-5 w-full max-w-2xl h-10 mt-10"
        >
          <input
            type="text"
            name="domain"
            autoComplete="off"
            placeholder="68"
            required
            className="rounded-md border max-w-xs text-black border-gray-300 focus:ring-0 focus:border-black px-4 flex-auto min-w-0 sm:text-sm"
          />
          <button
            type="submit"
            disabled
            className={`${false && 
                'bg-black text-white border-black hover:text-black hover:bg-white'
            } py-2 w-28 text-sm rounded-md focus:outline-none bg-red-500 hover:bg-red-100 transition-all ease-in-out duration-150`}
          >
            Add me {'>'}
          </button>
        </form>
      </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noreferrer"
        >
          Powered by { "<3" }
          <div className="flex ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={71} height={16} />
          </div>
        </a>
      </footer>
    </div>
  ) 
}
