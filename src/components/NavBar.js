import { useNavigate } from "react-router-dom"; // Import useNavigate

const NavBar = ({ fMSCIStyle, aboutUsStyle, historyStyle, eventsStyle, galleryStyle }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <nav className="m-0 self-stretch rounded-lg bg-darkgray border-white border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-1.5 px-[75px] gap-11 max-w-full z-[1] text-left text-mid text-white font-roboto">
      <div className="flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 relative gap-2.5">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded" />
        <button
          className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] z-[1] bg-transparent border-none cursor-pointer"
          style={fMSCIStyle}
          onClick={() => navigate('/')} // Redirect to Home page
        >
          FMSCI
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
          className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[70px] bg-transparent border-none cursor-pointer"
          style={aboutUsStyle}
          onClick={() => navigate('/about')} // Redirect to About page
        >
          About us
        </button>
      </div>
      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
        <button
          className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] bg-transparent border-none cursor-pointer"
          style={historyStyle}
          onClick={() => navigate('/members')} // Redirect to Members page
        >
          Members
        </button>
      </div>
      <div className="rounded bg-silver flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 gap-2.5">
        <div className="h-[35px] w-[106px] relative rounded bg-silver hidden" />
        <button
          className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] inline-block min-w-[53px] z-[1] bg-transparent border-none cursor-pointer"
          style={eventsStyle}
          onClick={() => navigate('/events')} // Redirect to Events page
        >
          Events
        </button>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
          <img
            className="w-2.5 h-[5px] relative z-[1]"
            alt=""
            src="/icon-1.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
        <button
          className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] inline-block min-w-[55px] bg-transparent border-none cursor-pointer"
          style={galleryStyle}
          onClick={() => navigate('/gallery')} // Redirect to Gallery page
        >
          Gallery
        </button>
      </div>
    </nav>
  );
};

export default NavBar; 