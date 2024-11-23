import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-end justify-start gap-20 leading-[normal] tracking-[normal] mq450:gap-5 mq900:gap-10">
      <section className="self-stretch flex flex-col items-start justify-start pt-[50px] px-10 pb-0 box-border relative gap-[476px] max-w-full text-left text-31xl text-white font-roboto mq1275:pt-8 mq1275:box-border mq450:gap-[119px] mq900:gap-[238px] mq900:pt-[21px] mq900:box-border">
        <img
          className="w-full h-[675px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/image@2x.png"
        />
        <header className="w-[1570px] flex flex-row items-start justify-between gap-5 max-w-full mq900:w-[853px]">
          <img
            className="h-[45px] w-[125px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
         <nav className="m-0 self-stretch rounded-lg bg-darkgray border-white border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[75px] gap-11 max-w-full z-[1] text-left text-mid text-white font-roboto mq750:hidden mq750:gap-[22px] mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
            <div className="flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 relative gap-2.5">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded" />
              <button
              className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] z-[1] bg-transparent border-none cursor-pointer"
           
              onClick={() => navigate('/')}
            >
              Home
            </button>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[70px]"
              onClick={() => navigate('/about')}
              >
                About us
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <button
              className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] bg-transparent border-none cursor-pointer"
              onClick={() => navigate('/members')}
            >
                Members 
              </button>
            </div>
            <div className="rounded bg-silver flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 gap-[9px]">
              <div className="h-[35px] w-[106px] relative rounded bg-silver hidden" />
              <a className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] inline-block min-w-[53px] z-[1]"
              onClick={() => navigate('/events')}
              >
                Events
              </a>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[55px]"
              onClick={() => navigate('/gallery')}
              >
                Gallery
              </a>
            </div>
          </nav>
        </header>
        <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-5 mq1650:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[196px] max-w-full mq1275:min-w-full mq450:gap-[49px] mq900:gap-[98px] mq1650:flex-1">
                <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] z-[1] font-[inherit] mq450:text-11xl mq450:leading-[36px] mq900:text-21xl mq900:leading-[48px]">
                  <span>{`The `}</span>
                  <span className="font-medium">Team Name</span>
                  <span> will be shown here</span>
                </h1>
                <div className="w-[489px] flex flex-row items-start justify-start py-0 pl-10 pr-[39px] box-border max-w-full text-mini text-tomato-100">
                  <div className="flex-1 relative tracking-[0.7em] leading-[29.9px] font-semibold inline-block max-w-full">
                    FMSCI MOTORSPORTS
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[25px] mq900:flex-wrap">
                  <button className="cursor-pointer border-white border-[1px] border-solid py-1.5 px-[37px] bg-dimgray-500 h-[46px] rounded box-border flex flex-row items-start justify-start z-[1] hover:bg-gray-900 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-3xl leading-[29.9px] font-semibold font-roboto text-white text-left inline-block min-w-[64px] mq450:text-lg mq450:leading-[24px]">
                      Venue
                    </div>
                  </button>
                  <button className="cursor-pointer border-white border-[1px] border-solid py-1.5 px-6 bg-dimgray-500 h-[46px] rounded box-border flex flex-row items-start justify-start z-[1] hover:bg-gray-900 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-3xl leading-[29.9px] font-semibold font-roboto text-white text-left inline-block min-w-[90px] mq450:text-lg mq450:leading-[24px]">
                      Calendar
                    </div>
                  </button>
                  <button className="cursor-pointer border-white border-[1px] border-solid py-1.5 pl-[38px] pr-[35px] bg-dimgray-500 h-[46px] rounded box-border flex flex-row items-start justify-start z-[1] hover:bg-gray-900 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-3xl leading-[29.9px] font-semibold font-roboto text-white text-left mq450:text-lg mq450:leading-[24px]">
                      Status
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1549px] flex flex-row items-start justify-start py-0 pl-10 pr-[39px] box-border max-w-full text-34xl text-darkslategray-100">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[61px] uppercase font-bold font-[inherit] inline-block max-w-full mq450:text-13xl mq450:leading-[37px] mq900:text-23xl mq900:leading-[49px]">
              2024 Blueband Sports FMSCI Indian National Rally Championship (4W)
            </h1>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start pt-0 pb-[229px] pl-5 pr-0 box-border gap-[116px] max-w-full text-left text-6xl text-white font-roboto mq1275:pb-[97px] mq1275:box-border mq450:gap-[29px] mq900:gap-[58px] mq900:pb-[63px] mq900:box-border">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[101px] box-border max-w-full mq900:pb-[66px] mq900:box-border">
          <img
            className="h-[544px] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/carimg.png"
          />
        </div>
        <div className="w-[1384px] flex flex-row items-start justify-start flex-wrap content-start gap-[50px] max-w-full mq900:gap-[25px]">
          <div className="flex-1 rounded-8xs bg-[#E1AB21] flex flex-row items-start justify-start pt-[17px] px-[49px] pb-[18px] box-border min-w-[263px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[123px] w-[428px] relative rounded-8xs bg-[#E1AB21] hidden max-w-full" />
            <div className="relative leading-[43px] z-[1] mq450:text-lg mq450:leading-[34px]">
              <p className="m-0 font-extrabold">Status :</p>
              <ul className="m-0 text-3xl pl-[29px] text-dimgray-300">
                <li>
                  <span className="text-black font-medium">National Championship</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-8xs bg-[#E1AB21] flex flex-row items-start justify-start pt-[17px] px-[49px] pb-[18px] box-border min-w-[263px] max-w-full">
            <div className="h-[123px] w-[428px] relative rounded-8xs bg-[#E1AB21] hidden max-w-full" />
            <div className="relative leading-[43px] z-[1] mq450:text-lg mq450:leading-[34px]">
              <p className="m-0 font-extrabold">Categories :</p>
              <ul className="m-0 text-3xl pl-[29px] text-dimgray-300">
                <li>
                  <span className="text-black font-medium">4 Wheeler</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-8xs bg-[#E1AB21] flex flex-row items-start justify-start pt-[17px] px-[49px] pb-[18px] box-border min-w-[263px] max-w-full">
            <div className="h-[123px] w-[428px] relative rounded-8xs bg-[#E1AB21] hidden max-w-full" />
            <div className="relative leading-[43px] z-[1] mq450:text-lg mq450:leading-[34px]">
              <p className="m-0 font-extrabold">Types :</p>
              <ul className="m-0 text-3xl pl-[29px] text-dimgray-300">
                <li>
                  <span className="text-black font-medium">Stage Rally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[92px] max-w-full text-37xl text-darkslategray-200 mq450:gap-[23px] mq900:gap-[46px]">
          <h1 className="m-0 relative text-inherit leading-[28.9px] font-medium font-[inherit] mq450:text-15xl mq450:leading-[17px] mq900:text-26xl mq900:leading-[23px]">
            Schedule
          </h1>
          <div className="flex flex-col items-end justify-start gap-20 max-w-full text-3xl text-dimgray-100 mq450:gap-5 mq900:gap-10">
            <div className="w-[1600px] overflow-x-auto flex flex-row items-start justify-start gap-6 max-w-full mq900:gap-[18px]">
              {events.map((event) => (
                <div key={event._id}>
                  <div className="mb-4 text-2xl font-bold text-black">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="w-[626px] shrink-0 flex flex-col items-start justify-start gap-[20px] max-w-full border-2 border-white rounded-lg p-4 bg-white">
                    <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[15px] max-w-full">    
                      <div className="relative leading-[15px] font-semibold mq450:text-lg mq450:leading-[12px] bg-[#E13421] text-white p-[25px]  rounded-lg w-full"> 
                        {event.name}
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[296px] max-w-full">
                        <img
                          className="self-stretch relative max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/icons.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2.5 box-border relative gap-[20px] max-w-full text-6xl">
                      <div className="self-stretch rounded-lg bg-tomato-200 flex flex-row items-start justify-start py-[25px] px-[18px] box-border max-w-full z-[1] border-[3px] border-red-500">
                        <div className="relative leading-[15px] font-extrabold z-[2] mq450:text-xl mq450:leading-[12px] text-white">
                        {/*  {event.name} */}
                        </div>
                      </div>
                      <div className="w-[606px] flex flex-row items-start justify-end py-0 px-[9px] box-border max-w-full text-4xl text-black">
                        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[45px] font-medium font-[inherit] z-[1] text-black mq450:text-lg mq450:leading-[36px]">
                              Organizer -
                            </h3>
                            <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[45px] font-medium font-[inherit] z-[1] text-black mq450:text-lg mq450:leading-[36px]">
                              Contact -
                            </h3>
                            <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[45px] font-medium font-[inherit] z-[1] text-black mq450:text-lg mq450:leading-[36px]">
                              Venue -
                            </h3>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[294px] max-w-full text-mid text-gray-600">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] mq450:gap-[17px]">
                              <div className="relative leading-[28.9px] z-[1] text-gray-600">
                                {event.organizer}
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                                <div className="relative leading-[28.9px] z-[1] text-gray-600">
                                  {event.contact}
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                                  <div className="flex flex-col items-start justify-start pt-[25px] px-0 pb-0">
                                    <div className="relative leading-[28.9px] z-[1] text-gray-600">
                                      {event.venue}
                                    </div>
                                  </div>
                                  <div className="rounded-lg bg-[#FFE6E3] flex flex-col items-start justify-start pt-[12.8px] px-4 pb-[19px] gap-[12.3px] z-[1] text-sm text-dimgray-100 border border-pink-200 shadow-md">
                                    <div className="flex flex-row items-start justify-start pt-0 pb-[6.6px] pl-0 pr-5">
                                      <div className="relative leading-[15px] inline-block min-w-[72px] z-[1] font-semibold">
                                        Next Race :
                                      </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[26px] gap-5 text-6xl text-gray-200">
                                      <div className="relative leading-[15px] font-extrabold inline-block min-w-[45px] z-[1] mq450:text-xl mq450:leading-[12px]">
                                        117
                                      </div>
                                      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
                                        <div className="relative leading-[15px] font-extrabold z-[1] mq450:text-xl mq450:leading-[12px]">
                                          17
                                        </div>
                                      </div>
                                      <div className="relative leading-[15px] font-extrabold z-[1] mq450:text-xl mq450:leading-[12px]">
                                        17
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start py-0 pl-1 pr-0">
                                      <div className="w-[187px] flex flex-row items-start justify-between gap-5 text-xs">
                                        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                                          <div className="relative leading-[15px] z-[1] text-gray-600">
                                            Days
                                          </div>
                                        </div>
                                        <div className="relative leading-[15px] z-[1] text-gray-600">
                                          Hours
                                        </div>
                                        <div className="relative leading-[15px] inline-block min-w-[52px] z-[1] text-gray-600">
                                          Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-start justify-end py-0 px-20 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex flex-row items-start justify-start gap-[25px]">
                <img
                  className="h-[55px] w-[55px] relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/group-6@2x.png"
                />
                <img
                  className="h-[55px] w-[55px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer Section */}
      <footer className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[63px] px-[103px] pb-[41px] box-border gap-[68px] max-w-full z-[1] text-left text-7xl text-black font-roboto mq1275:pl-[51px] mq1275:pr-[51px] mq1275:box-border mq450:gap-[17px] mq900:gap-[34px] mq900:pt-[41px] mq900:px-[25px] mq900:pb-[27px] mq900:box-border">
        <div className="w-[1416px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[874px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1275:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                  Contact Us
                </h3>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] shrink-0 mq450:text-2xl mq450:leading-[54px]">
                  Members
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 text-lgi text-gray-100">
                  <div className="mt-[-14px] relative tracking-[0.01em] leading-[67px] shrink-0">
                    Founding members
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">{`News & Media`}</h3>
                <div className="w-[125px] h-[23px] relative text-lgi tracking-[0.01em] leading-[67px] text-gray-100 flex items-center shrink-0">
                  Video
                </div>
              </div>
            </div>
            <div className="w-[829px] flex flex-row items-start justify-start flex-wrap content-start gap-[188px] max-w-full mt-[-26px] mq450:gap-[47px] mq900:gap-[94px]">
              <div className="flex-1 flex flex-row items-start justify-between min-w-[317px] max-w-full gap-5 mq900:flex-wrap">
                <div className="w-[136px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                    <h3 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      About Us
                    </h3>
                    <h3 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      Events
                    </h3>
                    <h3 className="m-0 self-stretch h-[30px] relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-2xl mq450:leading-[54px]">
                      Gallery
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-lgi text-gray-100">
                  <div className="relative tracking-[0.01em] leading-[67px] shrink-0">
                    Live members
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                    <div className="mt-[-26px] relative tracking-[0.01em] leading-[67px] shrink-0">
                      Children of members
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                    <div className="mt-[-26px] relative tracking-[0.01em] leading-[67px] shrink-0">
                      Reporting members
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                    <div className="mt-[-26px] relative tracking-[0.01em] leading-[67px] shrink-0 z-[1]">
                      Temporary members
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[124px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border text-lgi text-gray-100">
                <div className="self-stretch h-[23px] relative tracking-[0.01em] leading-[67px] flex items-center shrink-0">
                  News
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1422px] flex flex-row items-start justify-between max-w-full gap-5 text-mini text-dimgray-200 mq1650:flex-wrap mq1650:justify-center">
          <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq1275:flex-wrap mq450:gap-[17px] mq900:gap-[33px]">
            <div className="relative leading-[34px]">
              © 2024 Autosport Holding Company, IND
            </div>
            <div className="relative [text-decoration:underline] leading-[34px] inline-block min-w-[89px]">{`Terms of use `}</div>
            <div className="relative [text-decoration:underline] leading-[34px] inline-block min-w-[93px]">
              Privacy policy
            </div>
          </div>
          <div className="w-[214.6px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/instagram-icon.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
                <img
                  className="w-6 h-[19.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/twitter.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
                <img
                  className="w-[22px] h-[20.8px] relative"
                  loading="lazy"
                  alt=""
                  src="/linkedin-icon.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[10.9px] h-[22px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[25.7px] h-[18px] relative"
                  loading="lazy"
                  alt=""
                  src="/subtract.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;
  