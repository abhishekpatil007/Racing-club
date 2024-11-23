import { useNavigate } from 'react-router-dom';

const FoundingMembers = () => {
  const navigate = useNavigate();

  
  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-base text-darkslategray-200 font-roboto">
      <div className="absolute !m-[0] top-[2097px] right-[129px] leading-[28.9px] font-medium inline-block min-w-[55px]">
        Mysore
      </div>
      <div className="absolute !m-[0] top-[2097px] right-[547px] leading-[28.9px] inline-block min-w-[86px]">
        Nationality :
      </div>
      <div className="absolute !m-[0] top-[2142px] right-[129px] leading-[28.9px] font-medium inline-block min-w-[101px]">
        Chikmanglore
      </div>
      <div className="absolute !m-[0] top-[2142px] right-[546px] leading-[28.9px] inline-block min-w-[87px]">
        Hometown :
      </div>
      <div className="absolute !m-[0] top-[2187px] right-[129px] leading-[28.9px] font-medium">
        December 11,1999
      </div>
      <h1 className="!m-[0] absolute top-[1971px] right-[129px] text-37xl leading-[28.9px] font-medium font-[inherit] mq1050:text-26xl mq1050:leading-[23px] mq450:text-15xl mq450:leading-[17px]">
        Robert James
      </h1>
      <div className="absolute !m-[0] top-[2315px] right-[512.1px] leading-[28.9px] inline-block min-w-[36px]">
        Wins
      </div>
      <div className="absolute !m-[0] top-[2354px] right-[524px] text-27xl leading-[28.9px] inline-block min-w-[26px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
        2
      </div>
      <div className="absolute !m-[0] top-[2315px] right-[427px] leading-[28.9px] inline-block min-w-[41px]">
        Top 3
      </div>
      <div className="absolute !m-[0] top-[2354px] right-[441px] text-27xl leading-[28.9px] inline-block min-w-[27px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
        0
      </div>
      <div className="absolute !m-[0] top-[2315px] right-[335px] leading-[28.9px] inline-block min-w-[50px]">
        Top 10
      </div>
      <div className="absolute !m-[0] top-[2354px] right-[358px] text-27xl leading-[28.9px] inline-block min-w-[27px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
        1
      </div>
      <img
        className="w-[503px] h-px absolute !m-[0] top-[2132px] right-[130px]"
        alt=""
        src="/info-row.svg"
      />
      <img
        className="w-[503px] h-px absolute !m-[0] top-[2177px] right-[130px]"
        alt=""
        src="/info-row.svg"
      />
      <img
        className="w-full h-[675px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/image@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[476px] box-border max-w-full mq750:pb-[309px] mq750:box-border">
        <header className="self-stretch w-[1570px] flex flex-row items-start justify-between gap-5 max-w-full mq750:w-[853px]">
          <img
            className="h-[45px] w-[125px] relative object-contain z-[1]"
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
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[141px] box-border max-w-full text-left text-31xl text-white font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq750:gap-[27px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
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
          <div className="w-[765px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-5 max-w-full text-8xl text-black">
            <div className="w-[241px] h-[22px] relative tracking-[0.01em] leading-[60px] font-medium flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
              About Team
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[234px] pl-5 pr-40 box-border max-w-full text-left text-37xl text-darkslategray-100 font-roboto lg:pr-20 lg:box-border mq750:pr-10 mq750:pb-[152px] mq750:box-border">
        <div className="w-[1162px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch bg-white flex flex-row items-start justify-start pt-[158px] pb-20 pl-[3px] pr-0 box-border max-w-full mq450:pt-[103px] mq450:pb-[52px] mq450:box-border">
              <div className="h-[397px] w-[401px] relative bg-white hidden max-w-full" />
              <img
                className="h-[159px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/27_upadte_614.png"
              />
            </div>
          </div>
          <div className="w-[546px] flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px] mq750:min-w-full mq1050:flex-1">
            <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] font-medium font-[inherit] inline-block max-w-full mq1050:text-26xl mq1050:leading-[48px] mq450:text-15xl mq450:leading-[36px]">{`Founding Members `}</h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-lgi text-dimgray-200">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                <div className="flex-1 relative leading-[34px] inline-block max-w-full">{`Founded in 2005, Velocity Racers began as a small group of local racers with a shared love for motorsports. Over the years, we evolved from weekend `}</div>
              </div>
              <div className="relative leading-[34px]">
                Founded in 2005, Velocity Racers began as a small group of local
                racers with a shared love for motorsports. Over the years, we
                evolved from weekend warriors to a competitive team recognized
                in national and regional championships. By 2010, we expanded our
                roster, added a dedicated support crew, and invested i
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1620px] flex flex-col items-end justify-start pt-0 pb-[218.9px] pl-5 pr-0 box-border gap-[136px] max-w-full text-left text-37xl text-darkslategray-100 font-roboto lg:gap-[68px] lg:pb-[92px] lg:box-border mq750:gap-[34px] mq750:pb-[60px] mq750:box-border mq450:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[1490px] flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-5 box-border gap-[55px] max-w-full mq750:gap-[27px]">
            <h1 className="m-0 relative text-inherit tracking-[0.01em] leading-[60px] font-bold font-[inherit] mq1050:text-26xl mq1050:leading-[48px] mq450:text-15xl mq450:leading-[36px]">
              Members
            </h1>
            <div className="flex-1 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[762px] max-w-full mq1050:min-w-full">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[88px] max-w-full text-239xl text-darkslategray-200 lg:flex-wrap mq750:gap-11 mq450:gap-[22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[111px] min-w-[430px] max-w-full mq750:gap-[55px] mq750:min-w-full mq450:gap-7">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="absolute !m-[0] top-[215px] left-[-252px] tracking-[-0.01em] leading-[60px] uppercase [text-shadow:1px_0_0_#022169,_0_1px_0_#022169,_-1px_0_0_#022169,_0_-1px_0_#022169] mq1050:text-84xl mq1050:leading-[36px] mq450:text-45xl mq450:leading-[24px]">
                26
              </div>
              <img
                className="h-[634px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/membersimg.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="absolute !m-[0] top-[215px] left-[-252px] tracking-[-0.01em] leading-[60px] uppercase [text-shadow:1px_0_0_#022169,_0_1px_0_#022169,_-1px_0_0_#022169,_0_-1px_0_#022169] mq1050:text-84xl mq1050:leading-[36px] mq450:text-45xl mq450:leading-[24px]">
                27
              </div>
              <img
                className="h-[634px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="absolute !m-[0] top-[215px] left-[-252px] tracking-[-0.01em] leading-[60px] uppercase [text-shadow:1px_0_0_#022169,_0_1px_0_#022169,_-1px_0_0_#022169,_0_-1px_0_#022169] mq1050:text-84xl mq1050:leading-[36px] mq450:text-45xl mq450:leading-[24px]">
                28
              </div>
              <img
                className="h-[634px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[93px] px-0 pb-0 box-border min-w-[633px] max-w-full text-xl lg:flex-1 lg:pt-[39px] lg:box-border mq750:pt-[25px] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[62px] max-w-full mq750:gap-[31px] mq450:gap-[15px]">
              <div className="relative leading-[28.9px] mq450:text-base mq450:leading-[23px]">
                No. 26 James
              </div>
              <div className="self-stretch flex flex-row items-end justify-start gap-3 max-w-full text-base">
                <div className="h-[1902.1px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start relative">
                    <h1 className="!m-[0] absolute top-[71px] right-[-42px] text-27xl leading-[28.9px] font-normal font-[inherit] inline-block min-w-[107px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                      Stats
                    </h1>
                    <img
                      className="h-px w-[503px] absolute !m-[0] top-[35px] right-[-438px]"
                      alt=""
                      src="/vector-9.svg"
                    />
                    <div className="absolute !m-[0] top-[655px] right-[-21px] leading-[28.9px] inline-block min-w-[86px] z-[2]">
                      Nationality :
                    </div>
                    <div className="absolute !m-[0] top-[700px] right-[-22px] leading-[28.9px] inline-block min-w-[87px] z-[2]">
                      Hometown :
                    </div>
                    <h1 className="!m-[0] absolute top-[816px] right-[-42px] text-27xl leading-[28.9px] font-normal font-[inherit] inline-block min-w-[107px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                      Stats
                    </h1>
                    <div className="absolute !m-[0] top-[406px] right-[-60px] text-xl leading-[28.9px] inline-block min-w-[125px] z-[2] mq450:text-base mq450:leading-[23px]">
                      No. 26 James
                    </div>
                    <div className="absolute !m-[0] right-[-21px] bottom-[257px] leading-[28.9px] inline-block min-w-[86px] z-[2]">
                      Nationality :
                    </div>
                    <div className="absolute !m-[0] right-[-22px] bottom-[212px] leading-[28.9px] inline-block min-w-[87px] z-[2]">
                      Hometown :
                    </div>
                    <h1 className="!m-[0] absolute right-[-42px] bottom-[96px] text-27xl leading-[28.9px] font-normal font-[inherit] inline-block min-w-[107px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                      Stats
                    </h1>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[99px]">
                      <div className="relative leading-[28.9px] inline-block min-w-[66px]">
                        Resides :
                      </div>
                      <div className="self-stretch h-[518px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-2.5">
                        <div className="relative leading-[28.9px]">Starts</div>
                        <div className="relative text-27xl leading-[28.9px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          0
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[450px] gap-[99px] mq750:pb-[292px] mq750:box-border">
                        <div className="relative leading-[28.9px] inline-block min-w-[66px]">
                          Resides :
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[22px] gap-2.5">
                          <div className="relative leading-[28.9px]">
                            Starts
                          </div>
                          <div className="relative text-27xl leading-[28.9px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[99px]">
                        <div className="relative leading-[28.9px] inline-block min-w-[66px]">
                          Resides :
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[22px] gap-2.5">
                          <div className="relative leading-[28.9px]">
                            Starts
                          </div>
                          <div className="relative text-27xl leading-[28.9px] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                            0
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute !m-[0] right-[-60px] bottom-[506px] text-xl leading-[28.9px] inline-block min-w-[125px] z-[2] mq450:text-base mq450:leading-[23px]">
                      No. 26 James
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-[216px] px-[9px] pb-[216.1px] box-border relative gap-[333px] min-h-[2150px] max-w-[calc(100%_-_77px)] lg:pt-[140px] lg:pb-[140px] lg:box-border mq1050:pt-[91px] mq1050:pb-[91px] mq1050:box-border mq450:gap-[166px] mq450:pt-[59px] mq450:pb-[59px] mq450:box-border">
                  <img
                    className="w-[743.5px] h-full absolute !m-[0] top-[0px] right-[-187.5px] bottom-[0px] max-h-full object-contain z-[1]"
                    loading="lazy"
                  //  alt=""
                //    src="/vector-10.svg"
                  />
                  <div className="w-[437px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-[98px] max-w-full mq450:gap-[49px]">
                    <div className="self-stretch flex flex-row items-start justify-end text-37xl">
                      <h1 className="m-0 relative text-inherit leading-[28.9px] font-medium font-[inherit] z-[2] mq1050:text-26xl mq1050:leading-[23px] mq450:text-15xl mq450:leading-[17px]">
                        Robert James
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end">
                      <div className="flex flex-col items-start justify-start relative gap-4">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <div className="relative leading-[28.9px] font-medium inline-block min-w-[55px] z-[2]">
                            Mysore
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-9 pr-0">
                          <div className="relative leading-[28.9px] font-medium z-[2]">
                            Chikmanglore
                          </div>
                        </div>
                        <div className="relative leading-[28.9px] font-medium z-[2]">
                          December 11,1999
                        </div>
                        <img
                          className="w-[503px] h-px absolute !m-[0] top-[35px] left-[-367px] z-[2]"
                          alt=""
                          src="/vector-7-1.svg"
                        />
                        <img
                          className="w-[503px] h-px absolute !m-[0] bottom-[38px] left-[-367px] z-[2]"
                          alt=""
                          src="/vector-8-1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[211px] flex flex-col items-start justify-start gap-2.5">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5">
                        <div className="relative leading-[28.9px] inline-block min-w-[37px] z-[2]">
                          Wins
                        </div>
                        <div className="relative leading-[28.9px] z-[2]">
                          Top 3
                        </div>
                        <div className="relative leading-[28.9px] z-[2]">
                          Top 10
                        </div>
                      </div>
                      <div className="w-[188px] flex flex-row items-start justify-between gap-5 text-27xl">
                        <div className="relative leading-[28.9px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          2
                        </div>
                        <div className="relative leading-[28.9px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          0
                        </div>
                        <div className="relative leading-[28.9px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          1
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[503px] h-px absolute !m-[0] bottom-[160px] left-[-86px] z-[2]"
                      alt=""
                      src="/vector-9-1.svg"
                    />
                  </div>
                  <div className="w-[437px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border relative gap-[98px] max-w-full mq450:gap-[49px]">
                    <div className="self-stretch flex flex-row items-start justify-end text-37xl">
                      <h1 className="m-0 relative text-inherit leading-[28.9px] font-medium font-[inherit] z-[2] mq1050:text-26xl mq1050:leading-[23px] mq450:text-15xl mq450:leading-[17px]">
                        Robert James
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end">
                      <div className="flex flex-col items-start justify-start relative gap-4">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <div className="relative leading-[28.9px] font-medium inline-block min-w-[55px] z-[2]">
                            Mysore
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-9 pr-0">
                          <div className="relative leading-[28.9px] font-medium z-[2]">
                            Chikmanglore
                          </div>
                        </div>
                        <div className="relative leading-[28.9px] font-medium z-[2]">
                          December 11,1999
                        </div>
                        <img
                          className="w-[503px] h-px absolute !m-[0] top-[35px] left-[-367px] z-[2]"
                          alt=""
                          src="/vector-7-2.svg"
                        />
                        <img
                          className="w-[503px] h-px absolute !m-[0] bottom-[38px] left-[-367px] z-[2]"
                          alt=""
                          src="/vector-8-2.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[211px] flex flex-col items-start justify-start gap-2.5">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5">
                        <div className="relative leading-[28.9px] inline-block min-w-[37px] z-[2]">
                          Wins
                        </div>
                        <div className="relative leading-[28.9px] z-[2]">
                          Top 3
                        </div>
                        <div className="relative leading-[28.9px] z-[2]">
                          Top 10
                        </div>
                      </div>
                      <div className="w-[188px] flex flex-row items-start justify-between gap-5 text-27xl">
                        <div className="relative leading-[28.9px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          2
                        </div>
                        <div className="relative leading-[28.9px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          0
                        </div>
                        <div className="relative leading-[28.9px] z-[2] mq1050:text-18xl mq1050:leading-[23px] mq450:text-9xl mq450:leading-[17px]">
                          1
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[503px] h-px absolute !m-[0] bottom-[160px] left-[-86px] z-[2]"
                      alt=""
                      src="/vector-9-2.svg"
                    />
                  </div>
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
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                  Contact Us
                </h2>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] shrink-0 mq450:text-2xl mq450:leading-[54px]">
                  Members
                </h2>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 text-lgi text-gray-100">
                  <div className="mt-[-14px] relative tracking-[0.01em] leading-[67px] shrink-0">
                    Founding members
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h2 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">{`News & Media`}</h2>
                <div className="w-[125px] h-[23px] relative text-lgi tracking-[0.01em] leading-[67px] text-gray-100 flex items-center shrink-0">
                  Video
                </div>
              </div>
            </div>
            <div className="w-[829px] flex flex-row items-start justify-start flex-wrap content-start gap-[188px] max-w-full mt-[-26px] mq1050:gap-[94px] mq450:gap-[47px]">
              <div className="flex-1 flex flex-row items-start justify-between min-w-[317px] max-w-full gap-5 mq450:flex-wrap">
                <div className="w-[136px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      About Us
                    </h2>
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      Events
                    </h2>
                    <h2 className="m-0 self-stretch h-[30px] relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-2xl mq450:leading-[54px]">
                      Gallery
                    </h2>
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
        <div className="w-[1422px] flex flex-row items-start justify-between max-w-full gap-5 text-mini text-dimgray-200 mq1050:flex-wrap mq1050:justify-center">
          <div className="flex flex-row items-start justify-start gap-[67px] max-w-full mq750:gap-[33px] mq750:flex-wrap mq450:gap-[17px]">
            <div className="relative leading-[34px]">
              © 2024 Autosport Holding Company, IND
            </div>
            <div className="relative [text-decoration:underline] leading-[34px] inline-block min-w-[89px]">{`Terms of use `}</div>
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

export default FoundingMembers;
