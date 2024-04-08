import React from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
    "Categories",
    "Sale",
    "Clearance",
    "New stock",
    "Trending"
]

function Header() {
  return (
    <div className='h-24 bg-white mt-3'>
        <nav className='flex flex-1 justify-end'>
            <ul className='flex'>
                <li className='text-textBlack text-sm'><Link href={"/"}>Help</Link></li>
                <li className='text-textBlack mx-5 text-sm'><Link href={"/"}>Orders & Returns</Link></li>
                <li className='text-textBlack mr-10 text-sm'><Link href={"/"}>Hi, John</Link></li>
            </ul>
        </nav>

        <nav className='mx-10 flex flex-1 my-5 justify-between items-end'>
            <h1 className='text-black font-bold text-3xl'>
                <Link href={"/"}>ECOMMERCE</Link>
            </h1>

            <ul className='flex'>
                {CATEGORIES.map(categoryItem => <li key={categoryItem} className="font-semibold text-black mr-8"><Link href={"/"}>{categoryItem}</Link></li>)}
            </ul>

            <ul className='flex'>
                <Link href={"/"}><li className='mx-4'><Search style={{ color: "#333333"}} size={20} strokeWidth={1.25} /></li></Link>
                <Link href={"/"}><li className='ml-4'><ShoppingCart style={{ color: "#333333"}} size={20} strokeWidth={1.25} /></li></Link>
            </ul>
        </nav>

        <div className='flex flex-1 bg-offWhite justify-center items-center py-2.5'>
            <ChevronLeft size={18} strokeWidth={1.25} />
            <p className='text-black text-sm font-medium mx-6'>Get 10% off on business sign up</p>
            <ChevronRight size={18} strokeWidth={1.25} />
        </div>
    </div>
  )
}

export default Header