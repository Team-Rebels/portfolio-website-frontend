import React from 'react'
import { banner2, profile, website, website4, website5 } from '../../assets'
import { Github, Linkedin, Twitter } from 'lucide-react';


const Preview = () => {
  return (
    <div className='w-full bg-[#212A31] text-[white] '>
      <div>
        <img className='h-[50vh] w-full bg-cover' src={banner2} alt="" />
      </div>
      <div className='flex flex-row justify-center gap-[40px] ml-[90px]'>
        <div className="bg-[#124E66] border p-4 w-1/4 ml-[-200px] text-[white] rounded-lg -translate-y-[26vh]">
          <img className="w-30 h-[150px] rounded-full mb-4 ml-[70px]" src={profile} alt="Profile" />
          <div className="mb-4 flex flex-col text-center">
            <h1 className="text-xl font-bold">Charles Adu-Sarkodie</h1>
            <p>Web Designer</p>
            <p>Accra, Ghana</p>
            <div className="flex mt-2 flex-col gap-2">
              <button className="bg-blue-500 text-white py-1 px-3 rounded-[40px]">Follow</button>
              <button className="bg-green-500 text-white py-1 px-3 rounded-[40px] ">Message</button>
            </div>
          </div>
          <div className="mb-4 flex flex-row justify-between">
            <div>
              <p>Location</p>
              <p>Phone</p>
              <p>Email</p>
            </div>
            <div>
              <p>Accra,Ghana</p>
              <p>+233249134165</p>
              <p>eduprince16@gmail.com</p>
            </div>
          </div>
          <div className="mb-4 flex flex-col justify-center">
            <p>On the Web</p>
            <div className='flex flex-row gap-3  rounded-md w-1/2 place-items-center '>
              <a className="text-blue-600 h-auto mt-[2px] ml-[5px]" href="#"><Linkedin /></a>
              <p className='text-[20px]'>LinkedIn</p>
            </div>
            <div className='flex flex-row gap-3  rounded-md w-1/2 place-items-center '>
              <a className="text-blue-600 h-auto mt-[2px] ml-[5px]" href="#"><Github /></a>
              <p className='text-[20px]'>Github</p>
            </div>
            <div className='flex flex-row gap-3  rounded-md w-1/2 place-items-center '>
              <a className="text-blue-600 h-auto mt-[2px] ml-[5px]" href="#"><Twitter /></a>
              <p className='text-[20px]'>Twitter</p>
            </div>
            {/* <div>
            <a className="text-blue-600 h-auto mt-[2px]" href="#"><Instagram /></a>
            <p className='text-[20px]'>Instagram</p>
            </div> */}
          </div>
          <div className="mb-4 flex flex-col justify-center">
            <h2 className="text-lg font-semibold">About me</h2>
            <p>This is a 2 line about you as a Website Developer</p>
          </div>
          <div className="mb-4 flex flex-col justify-center">
            <h2 className="text-lg font-semibold">Tools & Languages</h2>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>MongoDB</p>
          </div>
          <div className='flex flex-row gap-[20px] justify-center'>
            <span className="block text-black cursor-pointer border bg-white pl-[5px] pr-[5px] pb-[1px] rounded font-bold">Report</span>
            <span className="block text-red-500 cursor-pointer border bg-white pl-[5px] pr-[5px] pb-[1px] rounded font-bold">Block</span>
          </div>
        </div>
        <div className='mr-[-100px] ml-[60px] font-bold text-[20px]'>
          <div className='flex flex-row mt-[50px] gap-[60px] py-[18px] px-[9px] mb-[25px] '>
            <div class="dropdown relative inline-block">
              <div>
                <select className="w-[170px] p-2 rounded-lg text-black">
                  <option value="Category" disabled selected hidden>Why Hire Me</option>
                  <option value="category1">Education</option>
                  <option value="category2">Achievements</option>
                  <option value="category3">Skills</option>
                  <option value="category3">Volunteering</option>
                </select>
              </div>
            </div>
            <button className='hover:bg-[#124E66] hover:border rounded-full pl-[5px] pr-[5px]'>E-Commerce</button>
            <button className='hover:bg-[#124E66]  hover:border rounded-full pl-[5px] pr-[5px]'>Tourism</button>
            <button className='hover:bg-[#124E66] p-1 hover:border rounded-full pl-[5px] pr-[5px]'>Corporate</button>
          </div>
          <div>
            <h3 className='mb-5'>Project</h3>
            <div className='w-[750px] grid grid-cols-2 gap-[40px]'>
              <img src={website} alt="" />
              <img src={website4} alt="" />
              <img src={website4} alt="" />
              <img src={website5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview