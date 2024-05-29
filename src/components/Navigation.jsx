import { Sidebar } from './Sidebar'
import { FiGithub } from 'react-icons/fi'
import { useEffect,useState,useRef } from 'react';

import '../index.css'

export const Navigation = () => {
  const homeRef = useRef(null);

  function useAnimationFrame(callback) {

    const requestRef = useRef();
    const previousTimeRef = useRef();

    const animate = (time) => {

    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
};

useEffect(() => {
  requestRef.current = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(requestRef.current);
}, []); // Run only once when component mounts

return requestRef; // Optionally, you can return the requestRef if you need to cancel the animation frame manually
}

const [currentDate, setCurrentDate] = useState('');
const [currentTime, setCurrentTime] = useState('');

useAnimationFrame(() => {
const now = new Date();
setCurrentDate(now.toLocaleDateString());
setCurrentTime(now.toLocaleTimeString());
});


const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


  useEffect(() => {
    if (homeRef.current) {
      if (sidebarOpen) {
        homeRef.current.style.marginLeft = '250px'; // Adjust the value based on your sidebar width
      } else {
        homeRef.current.style.marginLeft = '0';
      }
    }
  }, [sidebarOpen, homeRef.current]); // Include homeRef.current in the dependency array
  

  return (
    <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800 bg-violet-600">
    <div className="flex items-center gap-3">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div><img className='hind' src='/hindlab.png' alt='logo' /></div>
    </div>
    <div className="flex-grow text-center">
      <div className='text-white text-lg'>HCS CENTRAL DATA REPOSITORY</div>
    </div>
    <div className="text-right text-white">
      <h3>
        {currentTime}             
        <span className="block">{currentDate}</span>
      </h3>
    </div>
  </nav>
  )
}


// import { Sidebar } from './Sidebar'
// import { useEffect, useState, useRef } from 'react';
// import '../index.css'

// export const Navigation = () => {
//   const homeRef = useRef(null);
//   const [currentDate, setCurrentDate] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const now = new Date();
//     setCurrentDate(now.toLocaleDateString());
//     setCurrentTime(now.toLocaleTimeString());
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(prev => !prev);
//   };

//   useEffect(() => {
//     if (homeRef.current) {
//       if (sidebarOpen) {
//         homeRef.current.classList.add('sidebar-open');
//       } else {
//         homeRef.current.classList.remove('sidebar-open');
//       }
//     }
//   }, [sidebarOpen]);

//   return (
//     <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800 bg-violet-600">
//       <div className="flex items-center gap-3">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//         <p>Animated Sidebar</p>
//       </div>
//       <div className="hlrhr">
//         <h3>
//           {currentTime}             
//           <span>{currentDate}</span>
//         </h3>
//       </div>
//     </nav>
//   );
// };



