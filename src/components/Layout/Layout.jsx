import Link from 'next/link'
import React from 'react'

const Layout = ({children, className= ''}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32
        dark:bg-dark sm:p-8 md:p-12 lg:p-16 ${className} `} >
             {children}
        </div>
    )
}

export default Layout;