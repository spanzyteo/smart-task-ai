import { FaCalendarAlt } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { MdNotificationsActive } from 'react-icons/md'
import { GoWorkflow } from 'react-icons/go'
import { MdOutlineSecurity } from 'react-icons/md'
import { SiBlockchaindotcom } from 'react-icons/si'

const FourthBody = () => {
  return (
    <div className="second-body-gradient lg:mt-[8rem] mt-[6rem] flex flex-col items-center">
      <div className="flex flex-col lg:mt-20 mt-10 font-mono items-center">
        <h1 className="lg:font-semibold font-bold lg:text-4xl text-2xl text-center">
          Key Features
        </h1>
        <div className="flex flex-col mt-8 ml-4 lg:ml-0 gap-4">
          <div className="flex items-center gap-6">
            <FaCalendarAlt className="h-[40px] w-[40px]" />
            <h1 className="lg:text-3xl text-xl font-mono">Calender</h1>
          </div>
          <div className="flex items-center gap-6">
            <GiArtificialIntelligence className="h-[40px] w-[40px]" />
            <h1 className="lg:text-3xl text-xl font-mono">AI Automation</h1>
          </div>
          <div className="flex items-center gap-6">
            <MdNotificationsActive className="h-[40px] w-[40px] " />
            <h1 className="lg:text-3xl text-xl font-mono">
              Intelligent Notification
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <GoWorkflow className="h-[40px] w-[40px] " />
            <h1 className="lg:text-3xl text-xl font-mono">
              Adaptive Workflow
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <MdOutlineSecurity className="h-[40px] w-[40px]" />
            <h1 className="lg:text-3xl text-xl font-mono">
              Security & Privacy
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <SiBlockchaindotcom className="h-[40px] w-[40px]" />
            <h1 className="lg:text-3xl text-xl font-mono">
              Blockchain Verification
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[50px] bg-[#0477bf] w-full mt-10 marquee-container overflow-hidden flex items-center">
        <h1 className="marquee-text lg:text-3xl text-xl font-mono whitespace-nowrap text-white">
          Procrastination Alerts provide motivational prompts or suggest
          alternative strategies to help you tackle and complete tasks you've
          been putting off.
        </h1>
        <h1 className="marquee-text lg:text-3xl text-xl font-mono whitespace-nowrap text-white">
          Procrastination Alerts provide motivational prompts or suggest
          alternative strategies to help you tackle and complete tasks you've
          been putting off.
        </h1>
      </div>
    </div>
  )
}

export default FourthBody
