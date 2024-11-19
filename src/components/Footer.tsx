import { IoLogoLinkedin } from 'react-icons/io5'
import { RiTwitterXFill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import { FaPhone } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="mt-10 bg-[#0477bf] h-[70px] flex items-center justify-between">
      <div className="flex flex-col ml-6 gap">
        <h1 className="text-[#999999] font-semibold sm:text-sm text-xs">
          © 2024 LAMINI CONSULTS
        </h1>
        <h1 className="text-[#999999] font-semibold sm:text-sm text-xs">
          All rights reserved
        </h1>
      </div>
      <div className="flex items-center gap-3 md:gap-4 mr-6">
        <IoLogoLinkedin className="md:h-[25px] h-[20px] md:w-[25px] w-[20px] text-white" />
        <RiTwitterXFill className="md:h-[25px] h-[20px] md:w-[25px] w-[20px] text-white" />
        <SiGmail className="md:h-[25px] h-[20px] md:w-[25px] w-[20px] text-white" />
        <FaPhone className="md:h-[25px] h-[20px] md:w-[25px] w-[20px] text-white" />
      </div>
    </div>
  )
}

export default Footer
