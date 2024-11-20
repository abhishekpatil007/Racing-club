const Gallery = () => {
  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-start justify-start gap-[313px] leading-[normal] tracking-[normal] mq450:gap-[78px] mq1050:gap-[156px]">
      <section className="self-stretch flex flex-col items-end justify-start gap-[114px] max-w-full mq450:gap-7 mq1050:gap-[57px]">
        <header className="self-stretch bg-darkorange overflow-hidden flex flex-row items-start justify-between pt-[50px] pb-10 pl-10 pr-[70px] box-border sticky top-[0] z-[99] max-w-full gap-5 text-left text-499xl font-roboto mq1050:pr-[35px] mq1050:box-border">
          
          <img
            className="h-[45px] w-[125px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <nav className="m-0 self-stretch rounded-lg bg-dimgray-300 border-white border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[75px] gap-11 max-w-full z-[1] text-left text-mid text-white font-roboto mq750:hidden mq750:gap-[22px] mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
            {/* Navigation items */}
            <div className="flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 relative gap-2.5">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded" />
              <a className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] inline-block min-w-[52px] z-[1]">
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
            {/* Other navigation links */}
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[70px]">
                About us
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit]">
                Members
              </a>
            </div>
            <div className="rounded bg-silver-200 flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 gap-2.5">
              <div className="h-[35px] w-[106px] relative rounded bg-silver-200 hidden" />
              <a className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] z-[1]">
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
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full">
          <div className="w-[1459px] flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
            <div className="self-stretch grid flex-row items-start justify-start gap-[23px] max-w-full grid-cols-[repeat(4,_minmax(261px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(261px,_452px))] mq750:grid-cols-[minmax(261px,_1fr)]">
              {/* Gallery images */}
              <img
                className="relative max-w-full overflow-hidden max-h-full object-cover mq750:w-full"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="relative max-w-full overflow-hidden max-h-full object-cover mq750:w-full"
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <img
                className="relative max-w-full overflow-hidden max-h-full object-cover mq750:w-full"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <img
                className="relative max-w-full overflow-hidden max-h-full object-cover mq750:w-full"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[23px] max-w-full">
              <div className="w-[348px] flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
                <img
                  className="self-stretch h-[230px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
                <img
                  className="self-stretch h-[257px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
              <div className="w-[347px] flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[467px] max-w-full mq750:gap-5 mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full mq750:flex-wrap">
                  <img
                    className="h-[230px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[226px]"
                    loading="lazy"
                    alt=""
                    src="/image-9@2x.png"
                  />
                  <img
                    className="h-[230px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[226px]"
                    loading="lazy"
                    alt=""
                    src="/image-10@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full mq750:flex-wrap">
                  <img
                    className="h-[271px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[226px]"
                    loading="lazy"
                    alt=""
                    src="/image-111@2x.png"
                  />
                  <img
                    className="h-[271px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[226px]"
                    loading="lazy"
                    alt=""
                    src="/image-12@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full mq750:flex-wrap">
                  <img
                    className="h-[257px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[226px]"
                    loading="lazy"
                    alt=""
                    src="/image-13@2x.png"
                  />
                  <img
                    className="h-[257px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[226px]"
                    loading="lazy"
                    alt=""
                    src="/image-14@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-499xl text-darkslateblue font-roboto">
      <section className="self-stretch bg-deepskyblue overflow-hidden flex flex-row items-start justify-start pt-[0.5px] px-[283px] pb-[0.5px] relative text-left text-499xl text-darkslateblue font-roboto mq900:pl-[70px] mq900:pr-[70px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pl-[141px] mq1275:pr-[141px] mq1275:box-border">
        <img
          src="/Frame84.svg"
          alt="Frame 84"
          className="self-stretch w-[80%] h-[auto] max-h-[200px]"
        />
      </section>
        <footer className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start pt-[63px] px-[103px] pb-[41px] box-border gap-[68px] max-w-full z-[1] text-left text-7xl text-black font-roboto lg:pl-[51px] lg:pr-[51px] lg:box-border mq750:gap-[34px] mq750:pt-[41px] mq750:px-[25px] mq750:pb-[27px] mq750:box-border mq450:gap-[17px]">
          <div className="w-[1416px] flex flex-row items-start justify-center max-w-full">
            <div className="w-[874px] flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                <div className="w-[148px] flex flex-col items-start justify-start pt-[18px] pb-0 pl-0 pr-3 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                    <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      Contact Us
                    </h3>
                    <h3 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      About Us
                    </h3>
                    <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[67px] text-[inherit] mq450:text-2xl mq450:leading-[54px]">
                      Events
                    </a>
                    <h3 className="m-0 self-stretch h-[30px] relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-2xl mq450:leading-[54px]">
                      Gallery
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">
                    Members
                  </h3>
                  <div className="flex flex-col items-start justify-start mt-[-14px] text-lgi text-gray-100">
                    <div className="relative tracking-[0.01em] leading-[67px] shrink-0">
                      Founding members
                    </div>
                    <div className="relative tracking-[0.01em] leading-[67px] shrink-0 mt-[-26px]">
                      Live members
                    </div>
                    <div className="relative tracking-[0.01em] leading-[67px] shrink-0 mt-[-26px]">
                      Children of members
                    </div>
                    <div className="relative tracking-[0.01em] leading-[67px] shrink-0 mt-[-26px]">
                      Reporting members
                    </div>
                    <div className="relative tracking-[0.01em] leading-[67px] shrink-0 z-[1] mt-[-26px]">
                      Temporary members
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                  <h3 className="m-0 relative text-inherit tracking-[0.01em] leading-[67px] font-normal font-[inherit] mq450:text-2xl mq450:leading-[54px]">{`News & Media`}</h3>
                  <div className="w-[124px] flex flex-col items-start justify-start gap-[18px] text-lgi text-gray-100">
                    <div className="self-stretch h-[23px] relative tracking-[0.01em] leading-[67px] flex items-center shrink-0">
                      Video
                    </div>
                    <div className="self-stretch h-[23px] relative tracking-[0.01em] leading-[67px] flex items-center shrink-0">
                      News
                    </div>
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

export default Gallery;
