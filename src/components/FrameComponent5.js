import PrizeFans from "./PrizeFans";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1620px] flex flex-col items-end justify-start pt-0 pb-[265px] pl-5 pr-0 box-border gap-[59px] max-w-full text-left text-mini text-tomato font-roboto mq900:gap-[29px] mq900:pb-28 mq900:box-border mq450:pb-[73px] mq450:box-border mq1275:pb-[172px] mq1275:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[104.5px] max-w-full mq900:gap-[52px] mq450:gap-[26px]">
        <div className="w-[922px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-6 max-w-full">
          <div className="flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="w-[410px] relative tracking-[0.7em] leading-[29.9px] font-semibold flex items-center max-w-full">
              FMSCI MOTORSPORTS
            </div>
            <h1 className="m-0 relative text-34xl tracking-[0.01em] leading-[60px] uppercase font-bold font-[inherit] text-darkslategray-100 mq900:text-23xl mq900:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
              EXECUTIVE committee
            </h1>
          </div>
          <div className="relative text-mid leading-[28.9px] text-darkslategray-200">
            Founded in 2005, Velocity Racers began as a small group of local
            racers with a shared love for motorsports. Over the years, we
            evolved from weekend warriors to a competitive team recognized in
            national and regional championships. By 2010, we expanded our
            roster, added a dedicated support crew, and invested in top-notch
            racing equipment. Our breakthrough came in 2015, when we secured our
            first championship win, putting us on the motorsports map. Since
            then, we’ve grown in size and reputation, known for our resilience,
            teamwork, and consistent track record in the motorsports community
          </div>
        </div>
        <div className="w-[1537px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[78px] max-w-full mq900:gap-[39px] mq450:gap-[19px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[15px] max-w-full shrink-0">
            <div className="flex flex-col items-start justify-start gap-[7px] max-w-full">
              <div className="self-stretch relative tracking-[0.7em] leading-[29.9px] font-semibold">
                FMSCI MOTORSPORTS
              </div>
              <h1 className="m-0 relative text-34xl tracking-[0.01em] leading-[60px] uppercase font-bold font-[inherit] text-darkslategray-100 mq900:text-23xl mq900:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
                Role of honor
              </h1>
            </div>
            <div className="relative text-mid leading-[28.9px] text-gray-200">
              Top Achievements by the team Top Achievements by the team Top
              Achievements by the team
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full text-104xl text-darkslategray-100 mq900:gap-5 mq1625:flex-wrap">
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[59px] box-border max-w-full mq450:pr-5 mq450:box-border">
            <img
              className="m-0 w-[352px] h-[408px] relative"
              loading="lazy"
              alt="Get on the Inside"
              src="/text.svg"
            />
          </div>
          <PrizeFans
            image="/image-2@2x.png"
            gainbridgePrize="Gainbridge Prize "
          />
          <PrizeFans image="/image-31@2x.png" gainbridgePrize="Wall Of Fans" />
        </div>
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
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
