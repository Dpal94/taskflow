'use client';

import ArrowDownSVG from '@/app/lib/icons/arrow-down';
import {useState, useRef, useEffect} from 'react';

type Options = {
  label: string;
  icon?: any;
  onClick?: () => void;
};

type Props = {
  children?: React.ReactNode;
  options: Options[];
};

const Dropdown = ({children, options}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-sm text-gray-300 font-medium gap-3 justify-between rounded-lg hover:outline-none hover:bg-gray-700 px-3 py-2 cursor-pointer"
      >
        {children}
        <div
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ArrowDownSVG />
        </div>
      </button>

      <div
        className={`
          absolute right-0 mt-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50
          transform transition-all duration-200
          ${
            isOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }
        `}
      >
        <div className="py-1">
          {options.map((option) => (
            <button
              key={option.label}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 cursor-pointer"
              onClick={() => {
                option.onClick?.();
                setIsOpen(false);
              }}
            >
              <span className="mr-3">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
