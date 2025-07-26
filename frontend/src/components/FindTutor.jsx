import { useState, useEffect } from 'react'
import {
  FaBook, FaLanguage, FaCode, FaLaptopCode, FaFlask, FaPaintBrush,
  FaChess, FaAtom, FaUserGraduate, FaUtensils, FaCalculator, FaGlobe, FaPenNib
} from 'react-icons/fa';

function FindTutor() {
    const [index, setIndex] = useState(0);
    const placeholder = [
        'Try "Math"', 'Try "French"', 'Try "Arabic"', 'Try "Coding"', 'Try "Cooking"'
    ];

    const subjects = [
        { label: 'Arabic', icon: FaLanguage },
        { label: 'French', icon: FaGlobe },
        { label: 'English', icon: FaBook },
        { label: 'Math', icon: FaCalculator },
        { label: 'Physics', icon: FaAtom  },
        { label: 'Chemistry', icon: FaFlask },
        { label: 'Coding', icon: FaCode },
        { label: 'Web Development', icon: FaLaptopCode },
        { label: 'Cooking', icon: FaUtensils },
        { label: 'Drawing', icon: FaPaintBrush },
        { label: 'Chess', icon: FaChess },
    ];
  
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % placeholder.length)
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
    <div className="flex flex-col items-center mx-auto mt-10 w-[90%] bg-inherit py-10 px-6">
        <h2 className="text-2xl font-semibold mb-6">Find Your Tutor</h2>
        <input
            type="search"
            className="w-full max-w-lg border px-4 py-3 rounded-full text-lg focus:outline-none"
            placeholder={placeholder[index]}
        />
      
        <div className="flex flex-row items-center space-x-5 mt-10 p-5 rounded-full shadow-lg">
            {subjects.map(({label, icon: Icon}, i) => (
                <div key={i} className="flex flex-col items-center w-28">
                    <Icon className="text-gray-800 text-xl" />
                    <span className="text-sm font-semibold py-2 text-center">{label}</span>
                </div>
            ))}
        </div>
    </div> 
  )
}

export default FindTutor