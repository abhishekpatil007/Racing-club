import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-36 box-border max-w-full text-left text-mini text-tomato font-roboto mq900:pl-10 mq900:pr-10 mq900:pb-[94px] mq900:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
        <div className="w-[409px] flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch relative tracking-[0.7em] leading-[29.9px] font-semibold">
            FMSCI MOTORSPORTS
          </div>
          <h1 className="m-0 self-stretch relative text-34xl tracking-[0.01em] leading-[60px] uppercase font-bold font-[inherit] text-darkslategray-100 mq900:text-23xl mq900:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
            Members
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-6xl text-white mq1625:flex-wrap">
          <div className="h-[415px] flex-1 flex flex-row items-start justify-start py-[30px] px-[25px] box-border relative gap-[17px] max-w-full mq900:min-w-full mq450:flex-wrap mq1625:flex-1">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-11@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <img
                className="w-[34px] h-3 relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <h2 className="m-0 relative text-inherit leading-[29.9px] font-medium font-[inherit] z-[1] mq450:text-xl mq450:leading-[24px]">
              Meet The Members
            </h2>
          </div>
          <div className="flex-[0.9842] flex flex-row items-start justify-between pt-[30px] pb-[277px] pl-[23px] pr-[38px] box-border bg-cover bg-no-repeat bg-[top] max-w-full gap-5 mq900:flex-wrap mq900:min-w-full mq450:pt-5 mq450:pb-[180px] mq450:box-border mq1625:flex-1">
            <img
              className="h-[415px] w-[745px] relative object-cover hidden max-w-full"
              alt=""
              src="/image.png"
            />
            <h2 className="m-0 relative text-inherit leading-[29.9px] font-medium font-[inherit] inline-block min-w-[105px] z-[1] mq450:text-xl mq450:leading-[24px]">
              Schedule
            </h2>
            <div className="rounded-8xs bg-linen-200 flex flex-col items-start justify-start pt-[12.8px] px-2.5 pb-[19px] gap-[12.3px] z-[1] text-sm text-dimgray-100">
              <div className="w-[211px] h-[108px] relative rounded-8xs bg-linen-200 hidden" />
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[6.6px]">
                <div className="relative leading-[15px] inline-block min-w-[72px] z-[1]">
                  Next Race :
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[27px] text-6xl text-gray-200">
                <div className="flex-1 relative leading-[15px] font-extrabold inline-block min-w-[45px] z-[1] mq450:text-xl mq450:leading-[12px]">
                  117
                </div>
                <div className="flex-[0.7895] flex flex-col items-start justify-start py-0 pl-0 pr-2">
                  <div className="relative leading-[15px] font-extrabold z-[1] mq450:text-xl mq450:leading-[12px]">
                    17
                  </div>
                </div>
                <div className="relative leading-[15px] font-extrabold z-[1] mq450:text-xl mq450:leading-[12px]">
                  17
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-1 pr-0">
                <div className="w-[187px] flex flex-row items-start justify-between gap-5">
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                    <div className="relative leading-[15px] z-[1]">Days</div>
                  </div>
                  <div className="relative leading-[15px] z-[1]">Hours</div>
                  <div className="relative leading-[15px] inline-block min-w-[52px] z-[1]">
                    Minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
