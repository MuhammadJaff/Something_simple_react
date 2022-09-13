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
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quos, eligendi, autem deleniti neque ex consequuntur repellat ratione sunt pariatur consequatur quaerat deserunt dignissimos voluptatibus ut incidunt adipisci esse earum, numquam nesciunt vel.",
        image:school,
        period:"2010-2019",
        title:"school"
      },
      {
        id:2,
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quos, eligendi, autem deleniti neque ex consequuntur repellat ratione sunt pariatur consequatur quaerat deserunt dignissimos voluptatibus ut incidunt adipisci esse earum, numquam nesciunt vel.",
        image:lyceum,
        period:"2019-2021",
        title:"lyceum"
      },
      {
        id:3,
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quos, eligendi, autem deleniti neque ex consequuntur repellat ratione sunt pariatur consequatur quaerat deserunt dignissimos voluptatibus ut incidunt adipisci esse earum, numquam nesciunt vel.",
        image:gapyear,
        period:"2021-2022",
        title:"gap year"
      },
      {
        id:4,
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quos, eligendi, autem deleniti neque ex consequuntur repellat ratione sunt pariatur consequatur quaerat deserunt dignissimos voluptatibus ut incidunt adipisci esse earum, numquam nesciunt vel.",
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