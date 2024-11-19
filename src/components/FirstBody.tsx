import todo1 from '../assets/todo-image2.avif'
import todo2 from '../assets/todo-image1.avif'
import img from '../assets/logo SMART TASK AI.png'
const FirstBody = () => {
  return (
    <>
      <div className="first-body-gradient flex flex-col lg:mt-[70px]">
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="lg:text-6xl text-2xl font-mono lg:font-semibold font-bold">
              Organize your life
            </h1>
            <h1 className="lg:text-6xl text-2xl font-mono lg:font-semibold font-bold">
              Schedule your task
            </h1>
            <h1 className="lg:text-6xl text-2xl font-mono lg:font-semibold font-bold">
              Stop procrastinating
            </h1>
            <h1 className="mt-4 lg:text-xl text-md text-center w-[75%] lg:w-auto font-mono text-gray-700">
              An A.I powered task manager for you and your team.
            </h1>
          </div>
          <div>
            <img
              className="lg:h-[300px] h-[200px] lg:w-[300px] w-[200px]"
              src={img}
              alt="img"
            />
          </div>
        </div>
        <div className="mx-auto">
          <button className="gradient-button1 font-semibold mt-10 text-xl shadow-2xl">
            Get started
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-16">
          <h1 className="text-center text-2xl lg:text-4xl font-mono lg:font-semibold font-bold">
            Plan your day with AI automation
          </h1>
          <h1 className="text-center mt-4 text-lg w-[80%] lg:w-[450px] font-mono text-gray-700">
            Chat with AI using simple texts and schedule your tasks for you and
            your team with smart notifications
          </h1>
          <div className="relative mt-16 lg:block hidden h-[572px]">
            <img
              src={todo1}
              alt="img"
              className="rounded-2xl h-[100%] shadow-xl"
            />
            <div className="absolute top-0 right-0 h-[572px] mt-16 mr-[-5rem]">
              <img
                src={todo2}
                alt="img"
                className="h-[100%] rotate-12 rounded-2xl shadow-xl"
              />
            </div>
          </div>
          <div className="mt-16 lg:hidden block h-[572px] w-[254px]">
            <img
              src={todo2}
              alt="img"
              className="rounded-2xl rotate-12 shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstBody
