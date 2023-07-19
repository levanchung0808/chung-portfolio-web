import { lstSkills } from "@/global/constants";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex w-full h-screen px-12 bg-about bg-cover bg-center overflow-hidden h-[1500px] md:flex-row md:justify-start md:px-10">
      <div className="flex flex-1 h-full gap-4 relative">
        <div className="w-0.5 h-full bg-main rounded-full relative top-[2%]">
          <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
        </div>
        <div className="flex flex-1 flex-col relative top-[1%]">
          <h1 className="text-18 font-medium text-moon_mist font-stm">
            About/&gt;
          </h1>

          <div className="flex flex-col gap-2 absolute top-[4%]">
            <p className="text-16 text-moon_mist font-bold font-stm">
              <span className="text-comment left-[-50px] top-0 relative">
                1
              </span>
              <span className="text-main">function</span>{" "}
              <span className="text-moon_mist">createLeVanChung() &#123;</span>
            </p>

            <p className="text-16 text-moon_mist font-bold font-stm ">
              <span className="text-comment left-[-50px] top-0 relative">
                2
              </span>
              <span className="opacity-0 hidden sm:inline">...</span>
              <span className="text-comment">{"//"} I can, because I did.</span>
            </p>

            <p className="text-16 text-moon_mist font-bold font-stm ">
              <span className="text-comment left-[-50px] top-0 relative">
                3
              </span>
              <span className="opacity-0 hidden sm:inline">...</span>
              <span className="text-comment">
                {"//"} My vast variety of skills is continuously expanding.
              </span>
            </p>

            <p className="text-16 text-moon_mist font-bold font-stm ">
              <span className="text-comment left-[-50px] top-0 relative">
                4
              </span>
              <span className="opacity-0 hidden sm:inline">...</span>
              <span className="text-main">return </span>
              <span className="text-moon_mist">{"{"}</span>
            </p>

            <div className="text-16 text-moon_mist font-bold font-stm">
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                name ={" "}
                <span className="text-green font-normal">
                  {"'"}Le Van Chung{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                dayOfBirth ={" "}
                <span className="text-green font-normal">
                  {"'"}2003-08-08{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                email ={" "}
                <span className="text-green font-normal">
                  {"'"}levanchung.it@gmail.com{"'"}
                </span>
                ,
              </p>
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                phone ={" "}
                <span className="text-green font-normal">
                  {"'"}0378484047{"'"}
                </span>
                ,
              </p>

              {/* WORK EXPERIENCE */}
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                <span className="text-orange">
                  workExperience <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">.........</span>
                <span className="text-main">return </span>
                <span className="text-moon_mist">{"["}</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">............</span>
                <span className="text-moon_mist">{"{"}</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">company : </span>
                <span className="text-green font-normal">
                  {"'"}TinVietSoft human resource management{"'"}
                </span>
                ,
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">position : </span>
                <span className="text-green font-normal">
                  {"'"}Full-stack Developer{"'"}
                </span>
                ,
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">from : </span>
                <span className="text-green font-normal">
                  {"'"}Feb 2023{"'"}
                </span>
                ,<span className="text-moon_mist"> from : </span>
                <span className="text-green font-normal">
                  {"'"}July 2023{"'"}
                </span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">............</span>
                <span className="text-moon_mist">{"}"},</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">............</span>
                <span className="text-moon_mist">{"{"}</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">project : </span>
                <span className="text-green font-normal">
                  {"'"}SevenShop - E-commerce{"'"}
                </span>
                ,
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">position : </span>
                <span className="text-green font-normal">
                  {"'"}Leader{"'"}
                </span>
                ,
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">from : </span>
                <span className="text-green font-normal">
                  {"'"}Jan 2023{"'"}
                </span>
                ,<span className="text-moon_mist"> from : </span>
                <span className="text-green font-normal">
                  {"'"}April 2023{"'"}
                </span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">description : </span>
                <span className="text-green font-normal">
                  {"'"}Build a app/website for selling products online{"'"}
                </span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">............</span>
                <span className="text-moon_mist">{"}"},</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>

              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                <span>{"}"}</span>,
              </p>

              {/* EDUCATION */}
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                <span className="text-orange">
                  education <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">.........</span>
                <span className="text-main">return </span>
                <span className="text-moon_mist">{"["}</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">............</span>
                <span className="text-moon_mist">{"{"}</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">name : </span>
                <span className="text-green font-normal">
                  {"'"}FPT Polytechnic{"'"}
                </span>
                ,
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">major : </span>
                <span className="text-green font-normal">
                  {"'"}Mobile Developer (React Native){"'"}
                </span>
                ,
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">
                  ...............
                </span>
                <span className="text-moon_mist">time : </span>
                <span className="text-green font-normal">
                  {"'"}Jan 2021{"'"}
                </span>
                ,<span className="text-moon_mist"> from : </span>
                <span className="text-green font-normal">
                  {"'"}May 2023{"'"}
                </span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">............</span>
                <span className="text-moon_mist">{"}"},</span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>

              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                <span>{"}"}</span>,
              </p>

              {/* SKILLS */}
              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                <span className="text-orange">
                  skills <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">.........</span>
                <span className="text-main">return </span>
                <span className="text-moon_mist">{"["} </span>
                <span className="text-moon_mist">
                  {lstSkills.map((item, index) => {
                    return (
                      <span key={index} className="text-green">
                        {"'" + item + "'"}
                        {index !== lstSkills.length - 1 && (
                          <span className="text-moon_mist">, </span>
                        )}
                      </span>
                    );
                  })}
                </span>
              </p>

              <p className="text-16 text-moon_mist font-bold font-stm ">
                <span className="opacity-0 hidden sm:inline">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>

              <p>
                <span className="opacity-0 hidden sm:inline">......</span>
                <span>{"}"}</span>,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
