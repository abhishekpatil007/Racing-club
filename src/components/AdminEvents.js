import { useCallback } from "react";
import { Link } from "react-router-dom";

const AdminEvents = () => {
  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-darkorange overflow-hidden flex flex-row items-start justify-start py-[25px] px-10 sticky top-[0] z-[99] text-left text-499xl font-roboto">
        <img
          className="h-[45px] w-[125px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </header>
      <footer className="w-[1619px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-20 max-w-full text-left text-mini text-white font-roboto mq925:pl-5 mq925:box-border mq450:gap-5 mq700:gap-10">
        <div className="w-[242px] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.07)] bg-black flex flex-col items-start justify-start pt-[52px] px-0 pb-[720px] box-bor
        der gap-5 mq925:hidden mq700:pt-[22px] mq700:pb-[304px] mq700:box-border mq950:pt-[34px] mq950:pb-[468px] mq950:box-border">
          {/* Side Navbar Content */}
          <div className="flex flex-row items-start justify-start py-0 px-[29px]">
            <div className="flex flex-row items-end justify-start gap-5">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/squares-four.svg"
              />
             <Link to="" className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[75px] z-[1]">
                Homepage
              </Link>
            </div>
          </div> 
          <div className="self-stretch bg-gainsboro-200 flex flex-row items-end justify-start py-[11px] px-[29px] gap-5 z-[1]">
            <img
              className="h-10 w-[242px] relative hidden"
              alt=""
              src="/rectangle-34624382.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/User.svg"
            />
            <Link to="/admin-members" className="[text-decoration:none] relative capitalize font-medium text-white inline-block min-w-[58px] z-[2]">{`Member `}</Link>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[29px]">
            <div className="flex flex-col items-start justify-start gap-[31px]">
              <div className="flex flex-row items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/clipboard.svg"
                  />
                </div>
                <Link to="/admin-events" className="[text-decoration:none] relative capitalize font-medium text-[inherit] z-[1]">
                  Events
                </Link>
              </div>
              <div className="flex flex-row items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-4 h-4 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/clipboard2.svg"
                  />
                </div>
                <Link to="/gallery" className="[text-decoration:none] relative capitalize font-medium text-[inherit] z-[1]">
                  Gallery
                </Link>
              </div>
              {/* Add any other missing links here */}
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-2 box-border max-w-[calc(100%_-_322px)] text-left text-mini text-darkslategray-800 font-roboto mq925:max-w-full mq700:pt-8 mq700:box-border">
          {/* Added Content Area from AdminMembers */}
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
            <div className="flex justify-between items-center w-full">
              <div className="relative capitalize text-black font-medium whitespace-pre-wrap">{`Events     >     New Event`}</div>
              <button className="cursor-pointer [border:none] py-[9.5px] px-[37px] bg-red-500 rounded-md flex flex-row items-start justify-start hover:bg-red-700">
                <Link to="/admin-add-events" className="[text-decoration:none] relative text-mid font-medium font-roboto text-white text-left">
                  + Add New Event
                </Link>
              </button>
            </div>
            <div className="self-stretch h-[22px] relative text-8xl tracking-[0.01em] leading-[60px] font-medium text-black flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">{` Events `}</div>
            
            {/* Card Implementation */}
            <div className={`w-[382px] rounded-xl bg-white border-lightseagreen border-[2px] border-solid box-border max-w-full flex flex-col items-start justify-start pt-[17px] pb-[19px] pl-3.5 pr-2 gap-[21px] min-h-[141px] leading-[normal] tracking-[normal] text-left text-xl text-darkorange font-roboto`}>
              <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-1.5 gap-5">
                <div className="w-60 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <a className="[text-decoration:none] self-stretch h-[22px] relative tracking-[0.01em] leading-[60px] font-medium text-[inherit] flex items-center shrink-0">
                    Event 1
                  </a>
                </div>
                <img
                  className="h-6 w-[23px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/edit.svg"
                />
              </div>
              <div className="relative text-mid leading-[160%] text-black">
                2024 Blueband Sports FMSCI Indian National Rally Championship (4W)
              </div>
            </div>
            {/* End of Card Implementation */}
          </div>
          {/* Blank Content Area */}
        </section>
      </footer>
    </div>
  );
};

export default AdminEvents;
