import ItemWork from "@/components/ItemWork";
import { itemWorks } from "@/global/constants";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex w-full bg-background-start bg-cover relative overflow-hidden">
      <div className="w-0.5 bg-main h-full rounded-full absolute top-[4%] left-10 sm:left-[20%]">
        <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
      </div>
      <div className="work-container">
        <div className="flex flex-col pb-8 gap-2 sm:w-full ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-moon_mist sm: text-xl">Work/&gt;</h2>
            <p className="text-white">
              Selected UI web, mobile, video projects...
            </p>
          </div>
          <div className="list-work-experience">
            {itemWorks.map((item, index) => (
              <div
                key={item.id}
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className={`item-wrapper ${index % 2 == 1 ? "reverse" : ""}`}
              >
                <ItemWork id={item.id} title={item.title} image={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
