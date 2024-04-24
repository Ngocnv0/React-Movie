import React from 'react';

function NavIcon(props) {
  return (
    <>
      <svg
        fill='#EBEBF599'
        width='24px'
        height='24px'
        viewBox='0 -2 28 28'
        xmlns='http://www.w3.org/2000/svg'
        onClick={props.toggleCollapse}
      >
        <g id='SVGRepo_bgCarrier' strokeWidth={0} />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          <path d='m5.216 11.998c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z' />
          <path d='m5.216 2.608c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z' />
          <path d='m5.216 21.389c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z' />
          <path d='m9.794 0h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z' />
          <path d='m9.794 9.39h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z' />
          <path d='m9.794 18.781h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z' />
        </g>
      </svg>
      <span
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          props.isCollapsed ? 'w-0' : 'w-full transition-all ease-in-out'
        }`}
      >
        Papaya
      </span>
    </>
  );
}

export default NavIcon;
