import React, { useState } from 'react'

import '../components/Form/form.css'
import Ig from '../components/Form/FormImg/im2.jpg'
import Captcha from '../components/recaptcha/Captcha'
// const [isOneWay, setIsOneWay] = useState(true); 



const Form = () => {
  const [isOneWay, setIsOneWay] = useState(false); 

  const handleTripChange = (event) => {
      setIsOneWay(event.target.value === 'one way'); 
  };
  return (
    <>
      <div>
        <div className='relative w-full h-auto mb-4  '>
          <img src={Ig} alt="Private Jet" className='w-full ' />
          <div className='absolute left-0 top-0 p-4 items-center  justify-center  '>
            <h1 className='lg:text-6xl relative    text-white  sm:text-2xl  font-bold text-overlay lg:mt-20 lg:ml-8   '>
              Book a Private Jet Charter
            </h1>
          </div>
        </div>
      </div>
      {/* form part  */}
      <div className='Container mb-4 '>
      <div className='Box shadow-2xl  '>
        <div className='my-8 p-4 '>
          <h1 className='text-center text-4xl font-bold  text-[#0b2545] '>Request a Quote for a Private Jet Rental</h1>
          <p className='text-gray-600 mt-2 '>Please fill out the form below and a Luxosky representative will follow up shortly regarding your custom private jet Luxosky request..</p>
          <div className='lg:flex flex-col md:flex-row justify-between pt-4 p-4 box-border w-full'>
            <span className='text-xl bg-[#0b2545] text-white font-semibold w-full  h-10 flex items-center pl-3'>
              TRAVELER INFORMATION
            </span>
            <span className='bg-gray-300 text-lg text-gray-50 text-end font-normal  w-full md:w-3/5 h-10  items-center justify-end md:justify-start mt-2 md:mt-0'>
              <div className='  text-gray-400 text-end bg-gray-300'>*Requires Answer</div>
            </span>
          </div>
          <div className='grid lg:grid-rows-2  md:grid-rows-2  grid-cols-1  justify-between mb-2  '>
            <form action="#">
              <div>
                <input type="text" placeholder='First Name* ' className='rounded-md pl-2 ' />
                <input type="text" placeholder='Last Name* ' className='rounded-md pl-2 ' />
                <input type="text" placeholder='Company* ' className='rounded-md pl-2 ' />
              </div>
              <div className='input-box   '>
                <select id="Country">
                  <option selected>Country </option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option> Andorra </option>
                  <option> Angola </option>
                  <option> Argentina </option>
                  <option> Australia </option>
                  <option> Austria </option>
                  <option> Baden* </option>
                  <option >Bahamas</option>
                  <option>Bahrain</option>
                  <option>  Bangladesh</option>
                  <option >Barbados</option>
                  <option> Bolivia</option>
                  <option>Botswana</option>
                  <option > Brazil</option>
                  <option> Brunei </option>
                  <option> Cabo Verde </option>
                  <option> Cambodia </option>
                  <option> Cameroon </option>
                  <option> Canada </option>
                  <option> Cayman Islands </option>
                  <option> Chile </option>
                  <option> China </option>
                  <option> Colombia  </option>
                  <option> Democratic Republic of the Congo </option>
                  <option> Denmark </option>
                  <option> East Germany  </option>
                  <option> Ecuador </option>
                  <option> Egypt </option>
                  <option> Eritrea </option>
                  <option> Estonia </option>
                  <option> Finland </option>
                  <option> France </option>
                  <option> Gabon </option>
                  <option> Germany </option>
                  <option> Greece </option>
                  <option> Ghana  </option>
                  <option> Georgia </option>
                  <option> Haiti </option>
                  <option> Hanover </option>
                  <option> Heese </option>
                  <option> Hawaii* </option>
                  <option> Iceland  </option>
                  <option> India  </option>
                  <option> Indonesia  </option>
                  <option> Iran  </option>
                  <option> Iraq </option>
                  <option> Israel  </option>
                  <option> Italy </option>
                  <option> Japan </option>
                  <option> Jordan </option>
                  <option> Kenya </option>
                  <option> Korea </option>
                  <option> Kuwait  </option>
                  <option> Laos </option>
                  <option> Latvia </option>
                  <option> Lebanon </option>
                  <option> Malaysia </option>
                  <option> Maldives </option>
                  <option> Mali </option>
                  <option> Mexico  </option>
                  <option> Morocco </option>
                  <option> Nauru </option>
                  <option> Nepal  </option>
                  <option> Netherland  </option>
                  <option> New zealand  </option>
                  <option> Niger  </option>
                  <option> Norway  </option>
                  <option> Oman  </option>
                  <option> Palau  </option>
                  <option> Philippines  </option>
                  <option> Qatar  </option>
                  <option> Russia  </option>
                  <option> Romania  </option>
                  <option> South Africa  </option>
                  <option> South sudan  </option>
                  <option> Spain  </option>
                  <option> SriLanka  </option>
                  <option> Sweden  </option>
                  <option> Texas  </option>
                  <option> Thailand  </option>
                  <option> Turkey  </option>
                  <option> Uganda  </option>
                  <option> Ukraine  </option>
                  <option> Vietnam  </option>
                  <option> Wurtttemberg  </option>
                  <option> Yemen   </option>
                  <option> Zimbabwe  </option>
                </select>
                <input type="text" placeholder='Phone Number*' className='rounded-md pl-2 ' />
                <input type="text" placeholder='Email Id  ' className='rounded-md pl-2 ' />
              </div>
            </form>
            <div className='flex flex-col md:flex-row  pt-4 px-4 box-border w-full'>
              <span className='text-xl bg-[#0b2545] text-white font-semibold w-full md:w-2/5 h-10 flex items-center pl-3'>
                FLIGHTS INFORMATION
              </span>
              <span className='bg-gray-300 text-lg text-gray-50 text-end font-normal w-full md:w-3/5 h-10 pr-4  items-center justify-end md:justify-start  md:mt-0'>
                <div className=' md:block text-gray-400 '>*Requires Answer</div>
                <span className='md:hidden'>*</span>
              </span>
            </div>


            {/* Radio label  */}
            <div className='card-label justify-evenly md:top-0  '>
              <div className='radio-group'>
                <input type="radio" id="round-trip" name="trip-type" className='small-radio' value='round trip' onChange={handleTripChange} defaultChecked />
                <label htmlFor="round-trip" className='text-start'>Round Trip</label>
              </div>
              <div className='radio-group'>
                <input type="radio" id="one-way" name="trip-type" className='small-radio' value='one way'
                  onChange={handleTripChange} />
                <label htmlFor="one-way" className='text-start'>One Way</label>
              </div>
            </div>
            {/* second part of form  */}
            <section className='sections'>
              <form action="#">
                <div>
                  <input type="text" placeholder='Departure City* ' className='rounded-md pl-2 ' />
                  <input type="text" placeholder='Departure Date  ' className='rounded-md pl-2 ' />
                  <select id="returnTime" className='text-black'>
                    <option selected>Departure TIme </option>
                    <option value="00:00 AM">12:00 AM</option>
                    <option value="00:30 AM">12:30 AM</option>
                    <option value="01:00 AM">01:00 AM</option>
                    <option value="01:30 AM">01:30 AM</option>
                    <option value="02:00 AM">02:00 AM</option>
                    <option value="02:30 AM">02:30 AM</option>
                    <option value="03:00 AM">03:00 AM</option>
                    <option value="03:30 AM">03:30 AM</option>
                    <option value="04:00 AM">04:00 AM</option>
                    <option value="04:30 AM">04:30 AM</option>
                    <option value="05:00 AM">05:00 AM</option>
                    <option value="05:30 AM">05:30 AM</option>
                    <option value="06:00 AM">06:00 AM</option>
                    <option value="06:30 AM">06:30 AM</option>
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="07:30 AM">07:30 AM</option>
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="08:30 AM">08:30 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="01:30 PM">01:30 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                    <option value="09:30 PM">09:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="10:30 PM">10:30 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                    <option value="11:30 PM">11:30 PM</option>
                  </select>
                </div>
                {!isOneWay && (
                  <div className='input-box   '>
                    <input type="text" placeholder='Arrival City* ' className='rounded-md pl-2  ' />
                    <input type="text" placeholder='Arrival Date  ' className='rounded-md pl-2  ' />
                    <select id="returnTime" className='text-black' >
                      <option selected>Return Time</option>
                      <option value="00:00 AM">12:00 AM</option>
                      <option value="00:30 AM">12:30 AM</option>
                      <option value="01:00 AM">01:00 AM</option>
                      <option value="01:30 AM">01:30 AM</option>
                      <option value="02:00 AM">02:00 AM</option>
                      <option value="02:30 AM">02:30 AM</option>
                      <option value="03:00 AM">03:00 AM</option>
                      <option value="03:30 AM">03:30 AM</option>
                      <option value="04:00 AM">04:00 AM</option>
                      <option value="04:30 AM">04:30 AM</option>
                      <option value="05:00 AM">05:00 AM</option>
                      <option value="05:30 AM">05:30 AM</option>
                      <option value="06:00 AM">06:00 AM</option>
                      <option value="06:30 AM">06:30 AM</option>
                      <option value="07:00 AM">07:00 AM</option>
                      <option value="07:30 AM">07:30 AM</option>
                      <option value="08:00 AM">08:00 AM</option>
                      <option value="08:30 AM">08:30 AM</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="09:30 AM">09:30 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="06:30 PM">06:30 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                      <option value="07:30 PM">07:30 PM</option>
                      <option value="08:00 PM">08:00 PM</option>
                      <option value="08:30 PM">08:30 PM</option>
                      <option value="09:00 PM">09:00 PM</option>
                      <option value="09:30 PM">09:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                    </select>
                  </div>
                )}
              </form>

            </section>
          </div>

          <section className='mt-8 '>
            <form action="/">
              <select id="returnTime" className='text-black'>
                <option selected>Total Number of Passengers</option>
                <option value="# ">1</option>
                <option value="# ">2</option>
                <option value="# ">3</option>
                <option value="# ">4</option>
                <option value="# ">5</option>
                <option value="# ">6</option>
                <option value="# ">7</option>
                <option value="# ">8</option>
                <option value="# ">9</option>
                <option value="# ">10</option>
                <option value="# ">11</option>
                <option value="# ">12</option>
                <option value="# ">13</option>
                <option value="# ">14</option>
                <option value="# ">15</option>
                <option value="# ">16</option>
                <option value="# ">17</option>
                <option value="# ">18</option>
                <option value="# ">19</option>
                <option value="# ">20+</option>


              </select>
              <select name="Aircraft" id="">
                <option value="#">Preferred Craft</option>
                <option> Twins Pistons </option>
                <option> Light Jets  </option>
                <option> Very Light Jets </option>
                <option> Midsize Jets  </option>
                <option> Heavy Jets </option>
                <option> Super Midsize Jets  </option>
                <option> Long Range Bbj's </option>
                <option > Jumbo Jets </option>
                <option> Turbo Prop  </option>

              </select>
              <select name="travel" id="">
                <option value="#" selected>Have you ever Travelled </option>
                <option value="y">Yes</option>
                <option value="">No </option>
              </select>
            </form>
          </section>

          {/* Terms and condition  */}
          <div className='agree  flex-col text-end pr-4 mt-4 '>
            <div>
              <input type="checkbox" name="" id="" className='sizebox' />
              <label htmlFor="#" className='text-sm'> I agree to <span className='text-orange-500 text-sm '> the terms and conditions</span></label>
            </div>
            <div>
              <input type="checkbox" name="" id="" className='sizebox hover:font-bold ' />
              <label htmlFor="#" className='text-sm  '> I would like to opt in for occasional email offers </label>
              {/* <Captcha /> */}
            </div>
            <button className='w-80 h-12 bg-yellow-500 rounded-md  hover:bg-orange-600 text-white mt-8 z-0 '>
              Submit
            </button>
          </div>


        </div>
      </div>
    </div >
    </>
  )
}

export default Form