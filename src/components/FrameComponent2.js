import { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const FrameComponent2 = ({
  className = "",
  fMSCITextDecoration,
  aboutUsTextDecoration,
  historyTextDecoration,
  eventsTextDecoration,
  galleryTextDecoration,
}) => {
  const navigate = useNavigate();

  const fMSCIStyle = useMemo(() => {
    return {
      textDecoration: fMSCITextDecoration,
    };
  }, [fMSCITextDecoration]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: aboutUsTextDecoration,
    };
  }, [aboutUsTextDecoration]);

  const historyStyle = useMemo(() => {
    return {
      textDecoration: historyTextDecoration,
    };
  }, [historyTextDecoration]);

  const eventsStyle = useMemo(() => {
    return {
      textDecoration: eventsTextDecoration,
    };
  }, [eventsTextDecoration]);

  const galleryStyle = useMemo(() => {
    return {
      textDecoration: galleryTextDecoration,
    };
  }, [galleryTextDecoration]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[476px] box-border max-w-full mq900:pb-[309px] mq900:box-border ${className}`}
    >
      <header className="self-stretch w-[1570px] flex flex-row items-start justify-between gap-5 max-w-full mq900:w-[853px]">
        <img
          className="h-[45px] w-[125px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <nav className="m-0 self-stretch rounded-lg bg-darkgray border-white border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[75px] gap-11 max-w-full z-[1] text-left text-mid text-white font-roboto mq900:hidden mq900:gap-[22px] mq900:pl-[37px] mq900:pr-[37px] mq900:box-border">
          <div className="flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 relative gap-2.5">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded" />
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] z-[1] bg-transparent border-none cursor-pointer"
              style={fMSCIStyle}
              onClick={() => navigate('/')}
            >
              Home
            </button>
            {/* Removed the dropdown icon div */}
            {/* <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
              <img
                className="w-2.5 h-[5px] relative z-[1]"
                alt=""
                src="/icon.svg"
              />
            </div> */}
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[70px] bg-transparent border-none cursor-pointer"
              style={aboutUsStyle}
              onClick={() => navigate('/about')}
            >
              About us
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] bg-transparent border-none cursor-pointer"
              style={historyStyle}
              onClick={() => navigate('/members')}
            >
              Members
            </button>
          </div>
          <div className="rounded bg-silver flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 gap-[9px]">
            <div className="h-[35px] w-[106px] relative rounded bg-silver hidden" />
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] inline-block min-w-[53px] z-[1] bg-transparent border-none cursor-pointer"
              style={eventsStyle}
              onClick={() => navigate('/events')}
            >
              Events
            </button>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
              <img
                className="w-2.5 h-[5px] relative z-[1]"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[55px] bg-transparent border-none cursor-pointer"
              style={galleryStyle}
              onClick={() => navigate('/gallery')}
            >
              Gallery
            </button>
          </div>
        </nav>
      </header>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  fMSCITextDecoration: PropTypes.string,
  aboutUsTextDecoration: PropTypes.string,
  historyTextDecoration: PropTypes.string,
  eventsTextDecoration: PropTypes.string,
  galleryTextDecoration: PropTypes.string,
};

export default FrameComponent2;
