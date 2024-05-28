


import { useRef} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import { AiOutlineRollback, AiOutlineLogout, AiOutlineKey, AiOutlineApi, AiOutlineEdit, AiOutlineHome } from 'react-icons/ai';
import { BiHomeSmile, BiUser, BiCog, BiShieldQuarter } from 'react-icons/bi';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { FiSettings, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const ref = useRef(null);
  useClickAway(ref, () => isOpen && toggleSidebar()); // Close sidebar when clicking outside

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-white rounded-xl text-white"
        aria-label="toggle sidebar"
      >
        <GiHamburgerMenu />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 top-0 z-40 backdrop"
            ></motion.div>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 bottom-0 left-0 z-50 w-[12%] h-screen max-w-sm border-r-2 border-zinc-800 bg-zinc-900 overflow-y-auto"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
                <span className='text-white'><Link to='/'>Dashboard</Link></span>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 text-white border-zinc-800 rounded-xl"
                  aria-label="close sidebar"
                >
                  <AiOutlineRollback />
                </button>
              </div>
              <ul>
                {items.map((item, idx) => {
                  const { title, href, Icon } = item
                  return (
                    <li key={title}>
                      <a
                        onClick={toggleSidebar}
                        href={href}
                        className="flex items-center text-white justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                      >
                        <span>{title}</span>
                        <div>
                          <Icon className="text-2xl text-white" />
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const items = [
  { title: 'Home', Icon: AiOutlineHome, href: '#' },
  { title: 'Settings', Icon: BiCog, href: '#' },
  { title: 'Api Settings', Icon: AiOutlineApi, href: '#' },
  { title: 'DSR Edit Requests', Icon: AiOutlineEdit, href: '#' },
  { title: 'Data Validation', Icon: BiShieldQuarter, href: '#' },
  { title: 'Change Password', Icon: AiOutlineKey, href: '#' },
  { title: 'Logout', Icon: AiOutlineLogout, href: '#' },
];