import React from 'react'

const PreLoader = () => {
  return (
    <div className=''>
        <svg width="302" height="304" viewBox="0 0 302 304" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 303C0 303 301 303 301 -5"
            stroke="black"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{
              pathLength: 1,               // Animate pathLength to 1 (fully drawn)
              opacity: [1, 0],            // Animate opacity from 1 to 0
            }}
            transition={{
              pathLength: { duration: 1 }, // PathLength animation duration
              opacity: {
                duration: 1,             // Opacity animation duration
                ease: 'linear',          // Linear easing for constant disappearance rate
                delay: 0                // No delay to start with pathLength animation
              }
            }}
          />
        </svg>
      </div>
  )
}

export default PreLoader