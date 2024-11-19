import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/SMART TASK AI.png'
import { IoMenuSharp } from 'react-icons/io5'
import { MdOutlineCancel } from 'react-icons/md'
const Navbar = () => {
  const [sideOpen, setSideOPen] = useState<any>(false)
  return (
    <>
      <div className="lg:fixed top-0 left-0 right-0 flex flex-col bg-white z-50">
        <div className="h-[70px] flex items-center justify-between ">
          <div>
            <img className="h-[60px] w-[100px] ml-4 object-cover" src={logo} alt="logo" />
          </div>
          <div className="lg:flex hidden items-center gap-8 mr-4 text-[1.1rem]">
            <h1>Features</h1>
            <h1>Sign In</h1>
            <button className="gradient-button font-semibold">
              Get started
            </button>
          </div>
          {sideOpen ? (
            <div className="lg:hidden flex mr-4">
              <MdOutlineCancel
                className="h-[40px] w-[40px]"
                onClick={() => setSideOPen(false)}
              />
            </div>
          ) : (
            <div className="lg:hidden flex mr-4">
              <IoMenuSharp
                className="h-[40px] w-[40px]"
                onClick={() => setSideOPen(true)}
              />
            </div>
          )}
        </div>
        <AnimatePresence>
          {sideOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="mt-4 ml-4 flex flex-col items-start gap-4 text-2xl pb-4"
            >
              <h1>Features</h1>
              <h1>Sign In</h1>
              <button className="gradient-button font-semibold">
                Get started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar
