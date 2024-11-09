import img1 from '../assets/todo-image5.avif'
import img2 from '../assets/todo-image4.avif'
import img3 from '../assets/todo-image3.avif'
const SecondBody = () => {
  return (
    <div className="second-body-gradient lg:mt-[12rem] flex flex-col items-center">
      <div className="flex flex-col lg:mt-20 mt-10 font-mono items-center">
        <h1 className="lg:font-semibold font-bold lg:text-4xl text-2xl text-center">
          Organize your daily tasks
        </h1>
        <h1 className="lg:text-xl text-md w-[80%] lg:w-auto text-center font-mono mt-10">
          The calendar view gives users a broad overview of their tasks across
          days, weeks, or months.
        </h1>
      </div>
      <div className="hidden flex-row lg:flex gap-10 mt-16">
        <div className="h-[580px] w-[603px]">
          <img
            src={img1}
            alt="img"
            className="h-[100%] w-[100%] object-cover rounded-xl"
          />
        </div>
        <div className="h-[580px] w-[464px]">
          <img
            src={img2}
            alt="img"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
      <div className='lg:hidden block mt-10 h-[515px] w-[290px]'>
        <img src={img3} alt="img" className='rounded-xl shadow-xl' />
      </div>
    </div>
  )
}

export default SecondBody