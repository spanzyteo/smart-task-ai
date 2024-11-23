import img1 from '../assets/todo-image6.avif'
import img2 from '../assets/todo-image7.avif'
const ThirdBody = () => {
  return (
    <div className="third-body-gradient lg:mt-[8rem] mt-[6rem] flex flex-col items-center">
      <div className="flex flex-col lg:mt-20 mt-10 font-mono items-center">
        <div className="w-[80%] lg:w-[100%]">
          <h1 className="text-le text-xl lg:text-2xl font-mono lg:font-semibold font-bold text-gray-500">
            Focus on priorities
          </h1>
        </div>
        <h1 className="lg:font-semibold font-bold lg:text-4xl text-xl md:w-auto w-[80%] text-center whitespace-nowrap mt-4">
          Optimize your productivity
        </h1>
        <h1 className="lg:text-xl text-md w-[80%] lg:w-[620px] text-left font-mono mt-6 text-gray-700">
          Sort and prioritize your daily tasks using custom filters. Focus on
          what you need and get it done with focus mode.
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 items-center mt-10">
        <div className="lg:h-[374px] h-[271px] lg:w-[388px] w-[282px]">
          <img
            src={img1}
            alt="img"
            className="w-full h-full rounded-2xl shadow-xl"
          />
        </div>
        <div className="lg:h-[298px] h-[202px] lg:w-[452px] w-[306px]">
          <img
            src={img2}
            alt="img"
            className="h-full w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default ThirdBody
