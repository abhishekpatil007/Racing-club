import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[675px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/imageAbout.png"
      />
      <section className="w-[1650px] flex flex-row items-start justify-start pt-0 px-10 pb-[476px] box-border max-w-full mq750:pb-[309px] mq750:box-border">
        <header className="self-stretch flex-1 flex flex-row items-start justify-between max-w-full gap-5">
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
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[70px]">
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
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[145px] box-border max-w-full text-left text-31xl text-white font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
          <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] inline-block max-w-full z-[1] font-[inherit] mq1050:text-21xl mq1050:leading-[48px] mq450:text-11xl mq450:leading-[36px]">
            <span>{`The `}</span>
            <span className="font-medium">Team Name</span>
            <span> will be shown here</span>
          </h1>
        </div>
      </section>
      <section className="flex flex-row items-start justify-start pt-0 px-10 pb-[143px] box-border max-w-full text-left text-8xl text-black font-roboto lg:pb-[93px] lg:box-border mq750:pb-[60px] mq750:box-border">
        <div className="flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
          <div className="w-[765px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-5 max-w-full">
            <div className="w-[241px] h-[22px] relative tracking-[0.01em] leading-[60px] font-medium flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
              About Team
            </div>
         
            <img className="self-stretch relative max-w-full overflow-hidden mb-[20px] max-h-full" loading="lazy" alt="Line" src="/line.svg" />
          </div>
          <div className="flex flex-row items-start justify-end py-0 pl-10 pr-0 box-border max-w-full text-lgi text-dimgray-200">
            <div className="flex flex-row items-start justify-start gap-[57px] max-w-full lg:flex-wrap mq750:gap-7">
              <img
                className="h-[906px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[435px] mq750:min-w-full"
                loading="lazy"
                alt=""
                src="/AboutTeam.png"
              />
              <div className="w-[545px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full lg:flex-1 mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
                  <div className="relative leading-[34px]">
                    Founded in 2005, Velocity Racers began as a small group of
                    local racers with a shared love for motorsports. Over the
                    years, we evolved from weekend warriors to a competitive
                    team recognized in national and regional championships. By
                    2010, we expanded our roster, added a dedicated support
                    crew, and invested in top-notch racing equipment. Our
                    breakthrough came in 2015, when we secured our first
                    championship win, putting us on the motorsports map. Since
                    then, we’ve grown in size and reputation, known for our
                    resilience, teamwork, and consistent track record in the
                    motorsports community
                  </div>
                  <div className="w-[533px] relative leading-[34px] flex items-center max-w-full">
                    Founded in 2005, Velocity Racers began as a small group of
                    local racers with a shared love for motorsports. Over the
                    years, we evolved from weekend warriors to a competitive
                    team recognized in national and regional championships. By
                    2010, we expanded our roster, added a dedicated support
                    crew, and invested in top-notch racing equipment. Our
                    breakthrough came in 2015, when we secured our first
                    championship win, putting us on the motorsports map. Since
                    then, we’ve grown in size and reputation, known for our
                    resilience, teamwork, and consistent track record in the
                    motorsports community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1595px] flex flex-row items-start justify-start pt-0 px-20 pb-[164px] box-border max-w-full text-left text-37xl text-darkslategray-100 font-roboto lg:pl-10 lg:pr-10 lg:pb-[107px] lg:box-border mq750:pb-[70px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[79px] max-w-full mq750:gap-[39px] mq450:gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
            <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] font-bold font-[inherit] inline-block max-w-full mq1050:text-26xl mq1050:leading-[48px] mq450:text-15xl mq450:leading-[36px]">
              Leadership Team
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full text-lgi">
              <div className="relative tracking-[0.19em] leading-[60px] uppercase font-medium inline-block max-w-full">{`Chief executive officer & chairman`}</div>
              <img className="self-stretch relative max-w-full overflow-hidden max-h-full" loading="lazy" alt="Line" src="/line.svg" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[612px] max-w-full mq1050:min-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-14 max-w-full lg:flex-wrap mq750:gap-7">
            <img
              className="h-[680px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[435px] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="w-[546px] flex flex-col items-start justify-start gap-14 max-w-full lg:flex-1 mq750:gap-7 mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
                <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] font-medium font-[inherit] inline-block max-w-full mq1050:text-26xl mq1050:leading-[48px] mq450:text-15xl mq450:leading-[36px]">
                  Michel Jones
                </h1>
                <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-lgi text-dimgray-200">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                    <div className="flex-1 relative leading-[34px] inline-block max-w-full">{`Founded in 2005, Velocity Racers began as a small group of local racers with a shared love for motorsports. Over the years, we evolved from weekend `}</div>
                  </div>
                  <div className="relative leading-[34px]">
                    Founded in 2005, Velocity Racers began as a small group of
                    local racers with a shared love for motorsports. Over the
                    years, we evolved from weekend warriors to a competitive
                    team recognized in national and regional championships. By
                    2010, we expanded our roster, added a dedicated support
                    crew, and invested in top-notch racing equipment. Our
                    breakthrough came in 2015, when we secured our first
                    championship win, putting us on the motorsports map. Since
                    then, we’ve grown in size and reputation, known for our
                    resilience, teamwork, and consistent track record in the
                    motorsports community
                  </div>
                </div>
              </div>
              <div className="w-[535px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-lgi text-dimgray-200">
                <div className="flex-1 relative leading-[34px] inline-block max-w-full">
                  Founded in 2005, Velocity Racers began as a small group of
                  local racers with a shared love for motorsports. Over the
                  years, we evolved from weekend warriors to a competitive team
                  recognized in national and regional championships. By 2010, we
                  expanded our roster, added a dedicated support crew, and
                  invested in top-notch racing equipment. Our breakthrough came
                  in 2015, when we secured our first championship win, putting
                  us on the motorsports map. Since then, we’ve grown in size and
                  reputation, known for our resilience, teamwork, and consistent
                  track record in the motorsports community
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="w-[1595px] flex flex-row items-start justify-start pt-0 px-20 pb-[164px] box-border max-w-full text-left text-lgi text-darkslategray-100 font-roboto lg:pl-10 lg:pr-10 lg:box-border mq750:pb-[70px] mq750:box-border mq1050:pb-[107px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[79px] max-w-full mq750:gap-[39px] mq450:gap-5">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
            <div className="relative tracking-[0.19em] leading-[60px] uppercase font-medium">
              TEAM PARTNER
            </div>
            <img className="self-stretch relative max-w-full overflow-hidden max-h-full" loading="lazy" alt="Line" src="/line.svg" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[804px] max-w-full mq1050:min-w-full">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/vector-6.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-14 max-w-full text-37xl lg:flex-wrap mq750:gap-7">
            <img
              className="h-[680px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[435px] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/MJ.png"
            />
            <div className="w-[546px] flex flex-col items-start justify-start gap-[39px] max-w-full lg:flex-1 mq750:gap-[19px] mq750:min-w-full">
              <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] font-medium font-[inherit] inline-block max-w-full mq1050:text-26xl mq1050:leading-[48px] mq450:text-15xl mq450:leading-[36px]">
                Michel Jones
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-lgi text-dimgray-200">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                  <div className="flex-1 relative leading-[34px] inline-block max-w-full">{`Founded in 2005, Velocity Racers began as a small group of local racers with a shared love for motorsports. Over the years, we evolved from weekend `}</div>
                </div>
                <div className="relative leading-[34px]">
                  Founded in 2005, Velocity Racers began as a small group of
                  local racers with a shared love for motorsports. Over the
                  years, we evolved from weekend warriors to a competitive team
                  recognized in national and regional championships. By 2010, we
                  expanded our roster, added a dedicated support crew, and
                  invested in top-notch racing equipment. Our breakthrough came
                  in 2015, when we secured our first championship win, putting
                  us on the motorsports map. Since then, we’ve grown in size and
                  reputation, known for our resilience, teamwork, and consistent
                  track record in the motorsports community
                </div>
                <div className="w-[533px] relative leading-[34px] flex items-center max-w-full">
                  Founded in 2005, Velocity Racers began as a small group of
                  local racers with a shared love for motorsports. Over the
                  years, we evolved from weekend warriors to a competitive team
                  recognized in national and regional championships. By 2010, we
                  expanded our roster, added a dedicated support crew, and
                  invested in top-notch racing equipment. Our breakthrough came
                  in 2015, when we secured our first championship win, putting
                  us
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1595px] flex flex-row items-start justify-start pt-0 px-20 pb-[352px] box-border max-w-full text-left text-lgi text-darkslategray-100 font-roboto lg:pl-10 lg:pr-10 lg:pb-[229px] lg:box-border mq750:pb-[149px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[79px] max-w-full mq750:gap-[39px] mq450:gap-5">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full">
            <div className="relative tracking-[0.19em] leading-[60px] uppercase font-medium">
              President
            </div>
            <img className="self-stretch relative max-w-full overflow-hidden max-h-full" loading="lazy" alt="Line" src="/line.svg" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[837px] max-w-full mq1050:min-w-full">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/vector-6-1.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-14 max-w-full text-37xl lg:flex-wrap mq750:gap-7">
            <img
              className="h-[680px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[435px] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="/Presi.png"
            />
            <div className="w-[546px] flex flex-col items-start justify-start gap-[39px] max-w-full lg:flex-1 mq750:gap-[19px] mq750:min-w-full">
              <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] font-medium font-[inherit] inline-block max-w-full mq1050:text-26xl mq1050:leading-[48px] mq450:text-15xl mq450:leading-[36px]">
                Michel Jones
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-lgi text-dimgray-200">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                  <div className="flex-1 relative leading-[34px] inline-block max-w-full">{`Founded in 2005, Velocity Racers began as a small group of local racers with a shared love for motorsports. Over the years, we evolved from weekend `}</div>
                </div>
                <div className="relative leading-[34px]">
                  Founded in 2005, Velocity Racers began as a small group of
                  local racers with a shared love for motorsports. Over the
                  years, we evolved from weekend warriors to a competitive team
                  recognized in national and regional championships. By 2010, we
                  expanded our roster, added a dedicated support crew, and
                  invested in top-notch racing equipment. Our breakthrough came
                  in 2015, when we secured our first championship win, putting
                  us
                </div>
                <div className="w-[533px] relative leading-[34px] flex items-center max-w-full">
                  Founded in 2005, Velocity Racers began as a small group of
                  local racers with a shared love for motorsports. Over the
                  years, we evolved from weekend warriors to a competitive team
                  recognized in national and regional championships. By 2010, we
                  expanded our roster, added a dedicated support crew, and
                  invested in top-notch racing equipment. Our breakthrough came
                  in 2015, when we secured our first championship win, putting
                  us
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-deepskyblue overflow-hidden flex flex-row items-start justify-start pt-[0.5px] px-[283px] pb-[0.5px] relative text-left text-499xl text-darkslateblue font-roboto mq900:pl-[70px] mq900:pr-[70px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pl-[141px] mq1275:pr-[141px] mq1275:box-border">
        <img
          src="/Frame84.svg"
          alt="Frame 84"
          className="self-stretch w-[80%] h-[auto] max-h-[200px]"
        />
      </section>
      <footer className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[63px] px-[103px] pb-[41px] box-border gap-[68px] max-w-full z-[1] text-left text-7xl text-black font-roboto lg:pl-[51px] lg:pr-[51px] lg:box-border mq750:gap-[34px] mq750:pt-[41px] mq750:px-[25px] mq750:pb-[27px] mq750:box-border mq450:gap-[17px]">
        <div className="w-[1416px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[874px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
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
            <div className="w-[829px] flex flex-row items-start justify-start flex-wrap content-start gap-[188px] max-w-full mt-[-26px] mq1050:gap-[94px] mq450:gap-[47px]">
              <div className="flex-1 flex flex-row items-start justify-between min-w-[317px] max-w-full gap-5 mq450:flex-wrap">
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
                    <a className="mt-[-26px] [text-decoration:none] relative tracking-[0.01em] leading-[67px] text-[inherit] inline-block shrink-0">
                      Children of members
                    </a>
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
        <div className="w-[1422px] flex flex-row items-start justify-between max-w-full gap-5 text-mini text-dimgray-200 mq1050:flex-wrap mq1050:justify-center">
          <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq750:gap-[33px] mq750:flex-wrap mq450:gap-[17px]">
            <div className="relative leading-[34px]">
              © 2024 Autosport Holding Company, IND
            </div>
            <div className="relative [text-decoration:underline] leading-[34px] inline-block min-w-[89px]">{`Terms of use ` }</div>
            <a className="[text-decoration:underline] relative leading-[34px] text-[inherit] inline-block min-w-[93px]">
              Privacy policy
            </a>
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

export default AboutUs;
