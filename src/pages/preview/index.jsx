import React from 'react'
import { banner3, profile } from '../../assets'
import { Linkedin } from 'lucide-react';

const Preview = () => {
  return (
    <div className='w-full bg-black text-[white]'>
      <div>
        <img className='h-full bg-cover' src={banner3} alt="" />
      </div>
      <div className='flex flex-row justify-evenly '>
        <div className="bg-[yellow] border p-4 w-1/4 ml-[-270px] text-[black] rounded">
          <img className="w-30 h-[150px] rounded-full mb-4 ml-[80px]" src={profile} alt="Profile" />
          <div className="mb-4 flex flex-col text-center">
            <h1 className="text-xl font-bold">Charles Adu-Sarkodie</h1>
            <p>Web Designer</p>
            <p>Accra, Ghana</p>
            <div className="flex mt-2 flex-col gap-2">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-[40px]">Follow</button>
              <button className="bg-green-500 text-white py-1 px-3 rounded-[40px]">Message</button>
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-between">
            <div>
              <p>Project Views</p>
              <p>Liked</p>
              <p>Followers</p>
            </div>
            <div>
              <p>10000</p>
              <p>3000</p>
              <p>500</p>
            </div>
          </div>
          <div className="mb-4">
            <p>On the Web</p>
            <div className='flex flex-row gap-3 border-[1px] border-black rounded-md'>
              <a className="text-blue-600 h-auto mt-[2px]" href="#"><Linkedin /></a>
              <p className='text-[20px]'>LinkedIn</p>
            </div>
            {/* <div>
            <a className="text-blue-600 h-auto mt-[2px]" href="#"><Instagram /></a>
            <p className='text-[20px]'>Instagram</p>
            </div> */}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p>This is a 2 line about you as a Website Developer</p>
            <p>Email</p>
            <p>+233 249134165</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Tools & Languages</h2>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>MongoDB</p>
          </div>
          <div>
            <span className="block text-red-500 cursor-pointer">Report</span>
            <span className="block text-red-500 cursor-pointer">Block</span>
          </div>
        </div>
        <div>
          <div className='flex flex-row mt-[50px] gap-[40px] py-[18px] px-[9px] mb-[25px]'>
            <button>E-Commerce</button>
            <button>Tourism</button>
            <button>Coporate</button>
          </div>
          <div>
            <h3>Project</h3>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Preview