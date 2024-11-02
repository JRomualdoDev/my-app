
export default function Home() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <div
        className="mx-auto overflow-hidden mt-10 mb-2 bg-green-900 shadow-lg border rounded-lg w-[400px]"
      >
        <div
          className="p-2"
        >
          <div className="p-5 text-white text-center text-3x1 bg-green-900">
            Calculator
          </div>
          <div
            className="p-5 text-white text-end text-3x1 bg-green-800"
          >
            2000 + 100
          </div>
          <div
            className="p-5 text-white text-end text-3x1 bg-green-800"
          >
            =
            <span
              className="text-green-200 ms-2"
            >
              2100
            </span>
          </div>

          <div
            className="flex items-stretch bg-green-900 h-24 mt-2"
          >
            <div
              className="flex-1 px-2 py-2 justify-center flex - items-center text-black text-2x1 font-semibold"
            >
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                %
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                (
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                )
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                ÷
              </div>
            </div>
          </div>

          <div
            className="flex items-stretch bg-green-900 h-24"
          >
            <div
              className="flex-1 px-2 py-2 justify-center flex - items-center text-black text-2x1 font-semibold"
            >
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                7
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                8
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                9
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                X
              </div>
            </div>
          </div>

          <div
            className="flex items-stretch bg-green-900 h-24"
          >
            <div
              className="flex-1 px-2 py-2 justify-center flex - items-center text-black text-2x1 font-semibold"
            >
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                4
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                5
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                6
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                -
              </div>
            </div>
          </div>

          <div
            className="flex items-stretch bg-green-900 h-24"
          >
            <div
              className="flex-1 px-2 py-2 justify-center flex - items-center text-black text-2x1 font-semibold"
            >
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                1
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                2
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                3
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                +
              </div>
            </div>
          </div>

          <div
            className="flex items-stretch bg-green-900 h-24"
          >
            <div
              className="flex-1 px-2 py-2 justify-center flex - items-center text-black text-2x1 font-semibold"
            >
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                +-
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                0
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                .
              </div>
              <div
                className="rounded-2x1 h-20 w-20 flex items-center bg-green-200 justify-center shadown-lg border-2 border-green-700 hover:border-3 hover:border-black focus:outline-none"
              >
                =
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
