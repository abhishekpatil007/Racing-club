import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MembersPage = () => {
  const navigate = useNavigate();

  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;
    const accItem = element.closest("[data-acc-item]") || element;
    const isOpen = accItem.hasAttribute("data-acc-open");

    if (element.closest("[data-acc-header]") && !isOpen) {
      // Navigate to FoundingMembers page when "Founding members" is clicked
      if (element.textContent.includes("Founding members")) {
        navigate('/founding-members');
      }
    }

    // Existing accordion logic...
  }, [navigate]);

  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[162px] box-border gap-[177px] leading-[normal] tracking-[normal] mq450:gap-11 mq1050:gap-[88px]">
      <section className="self-stretch h-[675px] flex flex-row items-start justify-end py-[50px] px-[70px] box-border relative max-w-full mq1050:pl-[35px] mq1050:pr-[35px] mq1050:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="absolute top-[50px] left-[40px] w-[125px] h-[45px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <nav className="m-0 w-[717px] rounded-lg bg-darkgray border-white border-[0.5px] border-solid box-border flex flex-row items-start justify-between py-1.5 pl-[75px] pr-[76px] top-[0] z-[99] sticky gap-5 max-w-full text-left text-mid text-white font-roboto mq750:pl-[37px] mq750:pr-[38px] mq750:box-border">
          <div className="flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 relative gap-2.5">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded" />
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-semibold text-[inherit] inline-block min-w-[52px] z-[1] bg-transparent border-none cursor-pointer"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] bg-transparent border-none cursor-pointer"
              onClick={() => navigate('/about')}
            >
              About us 
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <button
              className="[text-decoration:none] relative leading-[29.9px] font-medium text-[inherit] bg-transparent border-none cursor-pointer"
              onClick={() => navigate('/members')}
            >
              Members
            </button>
          </div>
          <div className="rounded bg-silver flex flex-row items-end justify-start pt-[3px] pb-0.5 pl-[18px] pr-4 gap-2.5">
            <div className="h-[35px] w-[106px] relative rounded bg-silver hidden" />
            <div className="relative leading-[29.9px] font-semibold z-[1]"
            onClick={() => navigate('/events')}
            >
              Events
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-3">
             
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="relative leading-[29.9px] font-medium inline-block min-w-[55px]"
            onClick={() => navigate('/gallery')}
            >
              Gallery
            </div>
          </div>
        </nav>
      </section>
      <section className="w-[1662px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-8xl text-gray-200 font-roboto">
        <div className="flex flex-row items-start justify-start gap-[156px] max-w-full lg:gap-[78px] lg:flex-wrap mq750:gap-[39px] mq450:gap-[19px]">
          <div
            className="flex flex-col items-start justify-start gap-[50px] max-w-full lg:flex-1 mq750:min-w-full"
            data-acc-group
          >
            <div
              className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                  Founding members
                </h3>
                <img
                  className="h-6 w-[40.3px] relative shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
              <img
                className="w-[602px] h-px relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <div
              className="w-[624px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                  <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                    Founding members
                  </h3>
                  <img
                    className="h-6 w-[40.3px] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <img
                  className="w-[602px] h-px relative max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[624px] grid flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                  Live members
                </h3>
                <img
                  className="h-6 w-[40.3px] relative shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-1-1.svg"
                />
              </div>
              <img
                className="w-[602px] h-px relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-3-1.svg"
              />
            </div>
            <div
              className="w-[624px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                  <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                    Live members
                  </h3>
                  <img
                    className="h-6 w-[40.3px] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <img
                  className="w-[602px] h-px relative max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[624px] grid flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                  Children of member
                </h3>
                <img
                  className="h-6 w-[40.3px] relative shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-1-2.svg"
                />
              </div>
              <img
                className="w-[602px] h-px relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-3-2.svg"
              />
            </div>
            <div
              className="w-[624px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                  <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                    Children of member
                  </h3>
                  <img
                    className="h-6 w-[40.3px] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <img
                  className="w-[602px] h-px relative max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[624px] grid flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                  Reporting members
                </h3>
                <img
                  className="h-6 w-[40.3px] relative shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-1-3.svg"
                />
              </div>
              <img
                className="w-[602px] h-px relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-3-3.svg"
              />
            </div>
            <div
              className="w-[624px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                  <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                    Reporting members
                  </h3>
                  <img
                    className="h-6 w-[40.3px] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <img
                  className="w-[602px] h-px relative max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[624px] grid flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                  Temporary members
                </h3>
                <img
                  className="h-6 w-[40.3px] relative shrink-0"
                  loading="lazy"
                  alt=""
                  src="/group-1-4.svg"
                />
              </div>
              <img
                className="w-[602px] h-px relative max-h-full"
                loading="lazy"
                alt=""
                src="/vector-3-4.svg"
              />
            </div>
            <div
              className="w-[624px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[624px] h-[54px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="h-6 flex flex-row items-start justify-start gap-[116px]">
                  <h3 className="m-0 h-5 w-[410px] relative text-inherit tracking-[0.01em] leading-[60px] uppercase font-medium font-[inherit] flex items-center shrink-0 mq450:text-3xl mq450:leading-[48px]">
                    Temporary members
                  </h3>
                  <img
                    className="h-6 w-[40.3px] relative shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
                <img
                  className="w-[602px] h-px relative max-h-full"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[624px] grid flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border gap-[30px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[439px] max-w-full mq750:min-w-full">
            <img
              className="self-stretch h-[415px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
          </div>
        </div>
      </section>  
    </div>
  );
};

export default MembersPage;