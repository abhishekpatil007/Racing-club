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
                <Link to="/admin-gallery" className="[text-decoration:none] relative capitalize font-medium text-[inherit] z-[1]">
                  Gallery
                </Link>
              </div>
              {/* Add any other missing links here */}
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-2 box-border max-w-[calc(100%_-_322px)] text-left text-mini text-darkslategray-800 font-roboto mq925:max-w-full mq700:pt-8 mq700:box-border mt-5 h-[800px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="relative capitalize text-black font-medium whitespace-pre-wrap mb-4">{`Gallery     >     Upload Image`}</div>
            <div className="flex gap-4 items-center">
              <button className="cursor-pointer [border:none] py-[9.5px] px-[29px] bg-white rounded-md flex flex-row items-start justify-start hover:bg-gainsboro-100">
                <span className="[text-decoration:none] relative text-mid font-medium font-roboto text-red-500 text-left inline-block min-w-[54px]">Cancel</span>
              </button>
              <button className="cursor-pointer [border:none] py-[9.5px] px-[37px] bg-red-500 rounded-md flex flex-row items-start justify-start hover:bg-red-700">
                <span className="[text-decoration:none] relative text-mid font-medium font-roboto text-white text-left">Save</span>
              </button>
            </div>
          </div>
          <div className="text-black font-bold text-2xl mb-4">Gallery</div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-5 pl-[40px] pb-[95px] box-border gap-[20.5px] max-w-full text-lg text-darkslategray-700 mq700:pb-[29px] mq700:box-border mt-5 h-[800px]">
            <div className="flex flex-row items-start justify-center py-0 mt-[40px]">
              <div className="flex flex-row items-start justify-start gap-[9px] ml-[50px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <label className="relative text-black font-medium text-lg whitespace-nowrap inline-block min-w-[101px] z-[1] cursor-pointer flex flex-col items-center border-dotted border-2 border-gray-400 p-6 w-[300px] h-[150px]">
                    <img
                      className="h-20 w-20 mb-4"
                      loading="lazy"
                      alt="Plus Icon"
                      src="/Plus.svg"
                    />
                    <div className="flex items-center text-lg">
                      Upload Image
                      <img
                        className="h-6 w-6 ml-1"
                        loading="lazy"
                        alt="Upload Icon"
                        src="/upload.svg"
                      />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        console.log(file);
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <textarea
              className="mt-4 p-2 border border-gray-300 rounded w-[90%] h-12"
              placeholder="Description"
            />
            {/* Blank Content Area */}
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AdminEvents;
