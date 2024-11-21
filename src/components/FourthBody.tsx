const FourthBody = () => {
  return (
    <div className="second-body-gradient lg:mt-[8rem] mt-[6rem] flex flex-col items-center">
      <div className="flex flex-col lg:mt-20 mt-10 font-mono items-center">
        <h1 className="lg:font-semibold font-bold lg:text-4xl text-2xl text-center">
          Key Features
        </h1>
        <div className="grid grid-cols-3 mt-8 gap-4 w-[95%] md:w-auto">
          <div>
            <h1 className="lg:text-2xl text-sm font-mono text-gray-700">
              Calender View
            </h1>
          </div>
          <div>
            <h1 className="lg:text-2xl text-sm font-mono text-gray-700">
              AI Automation
            </h1>
          </div>
          <div>
            <h1 className="lg:text-2xl text-sm font-mono text-gray-700">
              Intelligent Notification
            </h1>
          </div>
          <div>
            <h1 className="lg:text-2xl text-sm font-mono text-gray-700">
              Adaptive Workflow
            </h1>
          </div>
          <div>
            <h1 className="lg:text-2xl text-sm font-mono text-gray-700">
              Security & Privacy
            </h1>
          </div>
          <div>
            <h1 className="lg:text-2xl text-sm font-mono text-gray-700">
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
