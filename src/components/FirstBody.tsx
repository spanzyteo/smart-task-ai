import img1 from '../assets/todo-anime2.png'
import img2 from '../assets/todo-anime6.png'
import todo1 from '../assets/todo-image2.avif'
import todo2 from '../assets/todo-image1.avif'
const FirstBody = () => {
  return (
    <>
      <div className="first-body-gradient flex flex-col lg:mt-[70px]">
        <div className="flex justify-between items-center mt-10">
          <div className="">
            <img
              className="h-[350px] w-[200px] lg:block hidden object-cover"
              src={img1}
              alt="image"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="lg:text-5xl text-2xl font-mono lg:font-semibold font-bold">
              Organize your life
            </h1>
            <h1 className="lg:text-5xl text-2xl font-mono lg:font-semibold font-bold">
              Schedule your task
            </h1>
            <h1 className="lg:text-5xl text-2xl font-mono lg:font-semibold font-bold">
              Stop procrastinating
            </h1>
            <h1 className="mt-4 lg:text-xl text-md text-center w-[75%] lg:w-auto font-mono">
              An A.I powered task manager for you and your team.
            </h1>
            <button className="gradient-button1 font-semibold mt-10 text-xl shadow-2xl">
              Get started
            </button>
          </div>
          <div className="">
            <img
              className="h-[350px] w-[200px] mr-6 lg:block hidden object-contain"
              src={img2}
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-16">
          <h1 className="text-center text-2xl lg:text-4xl font-mono lg:font-semibold font-bold">
            Plan your day with AI automation
          </h1>
          <h1 className="text-center mt-4 text-lg w-[80%] lg:w-[450px] font-mono">
            AI automation is the central hub where users interact with their
            tasks. Here's a breakdown of what the task view could look like:
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
