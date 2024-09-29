import React from 'react'
import TopPart from '../components/Our Fleet/Top part/TopPart'
import MidPart from '../components/Our Fleet/MidPart/MidPart'

const OurFleet = () => {
  const data = [
    {
      title: "Twin Pistons",
      description: "Very economical and wonderful for small runways and short distances, which is why it is the most popular charter airplane choice for the Islands of the Bahamas and the Caribbean….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image24.jpg"
    },
    {
      title: "Turbo Props",
      description: "Fixed-wing turboprops are a great alternative to light jets, perfect for short trips for 6-9 passengers, depending on the model….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image25.jpg"
    }, {
      title: "Very Light Jets",
      description: "A very light jet, entry-level jet or personal jet, previously known as a MicroJets, is a category of small jet aircraft approved for single-pilot operation….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image26.jpg"
    }, {
      title: "Light Jets",
      description: "Light jets are the perfect Aircraft for business travel, quick day trips or a fun weekend trip….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image27.jpg"
    }, {
      title: "Midsize Jets",
      description: "Midsize jets are one of the most popular sized aircraft available, small enough to be cost efficient….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image28.jpg"
    }, {
      title: "Super Midsize Jets",
      description: "Super mid-size jets are known to be the fastest, most fuel efficient business jets in the sky today...",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image29.jpg"
    }, {
      title: "Heavy Jets",
      description: "Heavy jets are known for their spacious and luxurious interiors, making it easy to see why these are the favored choice for business travel….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image30.jpg"
    }, {
      title: "Long Range BBJs",
      description: "Boeing Business Jet Charter Flights – Jumbo Jet The Boeing Business Jet Private Jet Aircraft series are factory conversions of Boeing airliners for the corporate jet….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image31.jpg"
    }, {
      title: "Jumbo Jets",
      description: "Jumbo jets are the biggest option for flying privately. Varied cabin configuration offers standard commercial seating up to 500 people or plush business class chairs for 50 or more….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image32.jpg"
    }, {
      title: "Twin Pistons",
      description: "Very economical and wonderful for small runways and short distances, which is why it is the most popular charter airplane choice for the Islands of the Bahamas and the Caribbean….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image24.jpg"
    }, {
      title: "Helicopters",
      description: "Charter Jet One Award Winning Helicopter Charter The “One” for Helicopters!….",
      image: "https://charterjetone.com/wp-content/uploads/2016/02/image33.jpg"
    },
  ]
  return (
    <div>
      <TopPart />
      {/* Middle Cards  */}
      <div className='  lg:py-12 lg:px-8   w-full h-full  flex   '>
        <div className='w-full lg:w-[60%] h-fit lg:ml-8 text-start flex-row px-10'>
          <h1 className='text-3xl py-4 lg:px-10 font-normal'>Private Plane Fleet</h1>
          <h1 className='text-3xl py-4 lg:px-10 font-normal text-orange-500'>CHARTER JET ONE CATALOG</h1>
          <div className='grid grid-flow-row lg:pl-12  w-full '>
            {data.map((item, index) => (
              <MidPart data={item} key={index} />
            ))}
          </div>
        </div>
        <div className='lg:w-[30%] h-fit pr-8    lg:block hidden  '>
          <h1 className='text-2xl font-normal text-left text-gray-500  '>Our Fleets</h1>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base  cursor-pointer  ' >Twin Pistons</p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Turbo Props</p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Very Light Jets</p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Midsize jets </p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Super Midsize Jets</p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Heavy Jets </p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Boeing Business Jets (BBJs)</p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Jumbo Jets</p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Helicopters </p>
          <hr className='my-2' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
        </div>
      </div>
    </div>
  )
}

export default OurFleet