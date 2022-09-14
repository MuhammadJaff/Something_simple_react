import './History.scss'
import { Pagination } from 'swiper';
import school from './../../images/school.webp'
import marmara from './../../images/marmara.png'
import lyceum from './../../images/lyceum.jpg'
import gapyear from './../../images/gapyear.jfif'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const History = () => {

  const data= [
      {
        id:1,
        text:"Remembering school years sometimes usually makes me smile. Being a little boy with no money but big heart who always dreamt about growing up without knowing how growing up would be",
        image:school,
        period:"2010-2019",
        title:"school"
      },
      {
        id:2,
        text:"Academic lyceum of WIUT. Probably one of the most significant changes in my life started after I was accepted to this lyceum. New friends, atmosphere, imagination, and a great stimulus to start learning how to code. A few witty and kind teachers had give us life long advices and memories",
        image:lyceum,
        period:"2019-2021",
        title:"lyceum"
      },
      {
        id:3,
        text:"The first time when I heard the term of 'gap year' I thought that is not for me and I would keep on my studies without a break. But life offers us unexpected invitations that could alter our way to 180 degrees. And now I am sure to say 'gap year' could be extremely helpful from anyone before going into a university",
        image:gapyear,
        period:"2021-2022",
        title:"gap year"
      },
      {
        id:4,
        text:"After a few days I should fly to Istanbul and start my studies at Marmara University as a Computer engineering major. I hope and believe and attempt with my all energy to learn lots of beneficial new knowledge",
        image:marmara,
        period:"2022-2026",
        title:"university"
      }
  ]

  return (
    <section id='history' >
        <h5>Review my life</h5>
        <h2>History</h2>
        <Swiper className='container history_container'
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {
            data.map(({id,image,text,period,title})=>{
              return(
                <SwiperSlide key={id} className="history_item">
                  <img src={image} alt={title} />
                  <div>
                      <h3 className='period'>{period}</h3>
                      <h5>{text}</h5>
                  </div>
                </SwiperSlide>
              )
              
            })
          }
        </Swiper>
          {/* <article>
            <img src={school} alt="" />
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Aspernatur vero asperiores vel adipisci. Harum, ipsum?</h3>
          </article> */}
    </section>
  )
}

export default History