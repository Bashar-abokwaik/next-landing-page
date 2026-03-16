"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { campaigns } from "@/Data/dummyData";

function HeroCampaignSlider() {
  
  return (
    <div className="w-full h-[500px]">
      <Swiper spaceBetween={0} slidesPerView={1} loop autoplay={{ delay: 5000 }}>
        {campaigns.map((campaign) => (
          <SwiperSlide key={campaign.id}>
            <a href={campaign.link} className="relative block w-full h-[500px]">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCampaignSlider;