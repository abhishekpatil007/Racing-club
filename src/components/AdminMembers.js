import { useCallback } from "react";
import { Link } from "react-router-dom";

const AdminMembers = () => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openClasses = ["grid-rows-[1fr]"];
    const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

    if (isOpen) {
      accContent?.classList.remove(...openClasses);
      accContent?.classList.add(...closeClasses);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        siblingAccContent?.classList.remove(...closeClasses);
        siblingAccContent?.classList.add(...openClasses);
      }, 1);
    }
  }, []);

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
        <div className="w-[242px] shadow-[0px_4px_14px_rgba(0,_0,_0,_0.07)] bg-black flex flex-col items-start justify-start pt-[52px] px-0 pb-[720px] box-border gap-5 mq925:hidden mq700:pt-[22px] mq700:pb-[304px] mq700:box-border mq950:pt-[34px] mq950:pb-[468px] mq950:box-border">
          <img
            className="self-stretch h-[937px] relative max-w-full overflow-hidden shrink-0 hidden"
            alt=""
            src="/rectangle-34624381.svg"
          />
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
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-2 box-border max-w-[calc(100%_-_322px)] text-left text-mini text-darkslategray-800 font-roboto mq925:max-w-full mq700:pt-8 mq700:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq700:flex-wrap">
              <div className="w-60 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
                  <div className="relative capitalize text-black font-medium whitespace-pre-wrap">{`Members     >     New member`}</div>
                  <div className="self-stretch h-[22px] relative text-8xl tracking-[0.01em] leading-[60px] font-medium text-black flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">{`Admin Members `}</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[35px] mq450:gap-[17px]">
                <button className="cursor-pointer [border:none] py-[9.5px] px-[29px] bg-white rounded-md flex flex-row items-start justify-start hover:bg-gainsboro-100">
                  <a className="[text-decoration:none] relative text-mid font-medium font-roboto text-red-500 text-left inline-block min-w-[54px]">
                    Cancel
                  </a>
                </button>
                <button className="cursor-pointer [border:none] py-[9.5px] px-[37px] bg-red-500 rounded-md flex flex-row items-start justify-start hover:bg-red-700">
                  <a className="[text-decoration:none] relative text-mid font-medium font-roboto text-white text-left">
                    Save
                  </a>
                </button>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-5 px-0 pb-[95px] box-border gap-[20.5px] max-w-full text-lg text-darkslategray-700 mq700:pb-[29px] mq700:box-border">
              <div className="self-stretch h-[530px] relative rounded-lg bg-white hidden" />
              <div className="w-[286px] flex flex-row items-start justify-start py-0 pl-[23px] pr-[22px] box-border">
                <div className="h-[22px] flex-1 relative tracking-[0.01em] text-black leading-[22px] font-medium flex items-center z-[1]">
                  Member details
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-12.svg"
              />
              <div className="w-[1129px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full text-mini text-black">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq950:flex-wrap">
                  <div
                    className="flex flex-col items-start justify-start gap-[21.8px] max-w-full mq925:min-w-full mq950:flex-1"
                    data-acc-group
                  >
                    <div
                      className="w-[606px] h-[63px] flex flex-col items-start justify-start gap-1.5 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
                      data-acc-item
                    >
                      <div>
                        <span className="font-medium text-black mb-1">Member name</span>
                        <input
                          className="w-[550px] h-[35px] rounded-md flex flex-row items-start justify-start z-[1] text-gray-300 border border-[#B6B6B6] border-opacity-60 mt-2"
                          placeholder="Enter name"
                          type="text"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-black mb-1">Designation</span>
                        <input
                          className="w-[550px] h-[35px] rounded-md flex flex-row items-start justify-start z-[1] text-gray-300 border border-[#B6B6B6] border-opacity-60 mt-2"
                          placeholder="Enter details"
                          type="text"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-black mb-1">Hometown</span>
                        <input
                          className="w-[550px] h-[35px] rounded-md flex flex-row items-start justify-start z-[1] text-gray-300 border border-[#B6B6B6] border-opacity-60 mt-2"
                          placeholder="Enter here"
                          type="text"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-black mb-1">Resides</span>
                        <input
                          className="w-[550px] h-[35px] rounded-md flex flex-row items-start justify-start z-[1] text-gray-300 border border-[#B6B6B6] border-opacity-60 mt-2"
                          placeholder="Enter here"
                          type="text"
                        />
                      </div>
                      <div>
                        <span className="font-medium text-black mb-1">Nationality</span>
                        <input
                          className="w-[550px] h-[35px] rounded-md flex flex-row items-start justify-start z-[1] text-gray-300 border border-[#B6B6B6] border-opacity-60 mt-2"
                          placeholder="Enter here"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[264px] flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border text-base mq950:flex-1">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3.5">
                      <div className="self-stretch flex-1 bg-ghostwhite flex flex-row items-start justify-start py-4 pl-[21px] pr-5 z-[1]">
                        <div className="h-[168px] w-[234px] relative bg-ghostwhite hidden" />
                        <div className="self-stretch flex-1 border-royalblue border-[1px] border-dashed flex flex-row items-start justify-start pt-9 px-[66px] pb-[37px] z-[2]">
                          <div className="h-[136px] w-[193px] relative border-royalblue border-[1px] border-dashed box-border hidden" />
                          <img
                            className="h-[59px] w-[59px] relative overflow-hidden shrink-0 z-[3]"
                            loading="lazy"
                            alt=""
                            src="/Plus.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[52px]">
                        <div className="flex flex-row items-start justify-start gap-[9px]">
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <label className="relative font-medium inline-block min-w-[101px] z-[1] cursor-pointer flex items-center">
                              Upload Image
                              <img
                                className="h-[21px] w-[21px] ml-1"
                                loading="lazy"
                                alt="Upload Icon"
                                src="/upload.svg"
                              />
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AdminMembers;
