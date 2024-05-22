import { Sidebar } from './Sidebar'
import { FiGithub } from 'react-icons/fi'
import { useEffect,useState,useRef } from 'react';


export const Navigation = () => {
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

  return (
    <nav className="flex items-center justify-between px-5 py-2 border-b-2 border-zinc-800  bg-violet-600">
      <div className="flex items-center gap-3	">
        <Sidebar />
        <p>Animated Sidebar</p>
      </div>
      {/* <a
        className="flex items-center gap-2 px-4 py-2 text-orange-400 bg-orange-700/20 rounded-xl"
        href=""
      >
        <FiGithub className="text-lg" />
        Source Code
      </a> */}
       <div className="hlrhr">
            <h3>
              {currentTime}             
            <span>{currentDate}</span>
            </h3>
          </div>
    </nav>
  )
}