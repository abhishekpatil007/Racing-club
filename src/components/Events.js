import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/admin/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

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
          <nav className="m-0 self-stretch rounded-lg bg-darkgray border-white border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[75px] gap-11 max-w-full z-[1] text-left text-mid text-white font-roboto mq900:hidden mq900:gap-[22px] mq900:pl-[37px] mq900:pr-[37px] mq900:box-border">
            <div className="flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 relative gap-2.5">
              <a className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] z-[1]">
                Home
              </a>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
                <img
                  className="w-2.5 h-[5px] relative z-[1]"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[70px]">
                About us
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit]">
                History
              </a>
            </div>
            <div className="rounded bg-silver-200 flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 gap-[9px]">
              <div className="h-[35px] w-[106px] relative rounded bg-silver-200 hidden" />
              <a className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] inline-block min-w-[53px] z-[1]">
                Events
              </a>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
                <img
                  className="w-2.5 h-[5px] relative z-[1]"
                  alt=""
                  src="/icon-1.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[55px]">
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
                <div className="w-[489px] flex flex-row items-start justify-start py-0 pl-10 pr-[39px] box-border max-w-full text-mini text-red-500">
                  <div className="flex-1 relative tracking-[0.7em] leading-[29.9px] font-semibold inline-block max-w-full">
                    FMSCI MOTORSPORTS
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[25px] mq900:flex-wrap">
                  <button className="cursor-pointer border-white border-[1px] border-solid py-1.5 px-[37px] bg-transparent backdrop-blur-md h-[46px] rounded box-border flex flex-row items-start justify-start z-[1] hover:bg-transparent hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-3xl leading-[29.9px] font-semibold font-roboto text-white text-left inline-block min-w-[64px] mq450:text-lg mq450:leading-[24px]">
                      Venue
                    </div>
                  </button>
                  <button className="cursor-pointer border-white border-[1px] border-solid py-1.5 px-6 bg-transparent backdrop-blur-md h-[46px] rounded box-border flex flex-row items-start justify-start z-[1] hover:bg-transparent hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-3xl leading-[29.9px] font-semibold font-roboto text-white text-left inline-block min-w-[90px] mq450:text-lg mq450:leading-[24px]">
                      Calendar
                    </div>
                  </button>
                  <button className="cursor-pointer border-white border-[1px] border-solid py-1.5 pl-[38px] pr-[35px] bg-transparent backdrop-blur-md h-[46px] rounded box-border flex flex-row items-start justify-start z-[1] hover:bg-transparent hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
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
          {events.map(event => (
            <div key={event._id} className="flex-1 rounded-8xs bg-[#E1AB21] flex flex-row items-start justify-start pt-[17px] px-[49px] pb-[18px] box-border min-w-[263px] max-w-full">
              <div className="h-[123px] w-[428px] relative rounded-8xs bg-[#E1AB21] hidden max-w-full" />
              <div className="relative leading-[43px] z-[1] mq450:text-lg mq450:leading-[34px]">
                <p className="m-0 font-extrabold">{event.name}</p>
                <ul className="m-0 text-3xl pl-[29px] text-dimgray-300">
                  <li>
                    <span className="font-medium">{event.description}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
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
      </section>
    </div>
  );
};

export default Events;
  