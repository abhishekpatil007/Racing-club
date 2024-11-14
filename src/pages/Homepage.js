import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full relative bg-linen-100 overflow-hidden flex flex-col items-end justify-start pt-[50px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[800px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/image@2x.png"
      />
      <FrameComponent2
        fMSCITextDecoration="unset"
        aboutUsTextDecoration="unset"
        historyTextDecoration="unset"
        eventsTextDecoration="unset"
        galleryTextDecoration="unset"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[69px] pb-52 box-border max-w-full text-left text-mini text-white font-roboto mq900:pl-[34px] mq900:pr-[34px] mq900:box-border mq450:pb-[135px] mq450:box-border">
        <div className="w-[409px] flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch relative tracking-[0.7em] leading-[29.9px] z-[1]">
            PERFORMANCE
          </div>
          <h1 className="m-0 relative text-34xl tracking-[0.01em] leading-[60px] uppercase font-bold font-[inherit] text-darkorange z-[1] mq900:text-23xl mq900:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
            Hitting the apex Head on
          </h1>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[198px] box-border relative max-w-full text-left text-mini text-tomato font-roboto mq900:pl-10 mq900:pr-10 mq900:box-border mq450:pb-[129px] mq450:box-border">
        <div className="w-[591px] flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="w-[409px] flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="self-stretch relative tracking-[0.7em] leading-[29.9px] font-semibold">
              FMSCI MOTORSPORTS
            </div>
            <button className="m-0 self-stretch relative text-34xl tracking-[0.01em] leading-[60px] uppercase font-bold font-[inherit] text-darkslategray-100 mq900:text-23xl mq900:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
              <Link to="/about" className="text-darkslategray-100 hover:underline">
                About us
              </Link>
            </button>
          </div>
          <div className="relative text-mid leading-[28.9px] text-darkslategray-200">
            Our team includes seasoned racers, technical wizards, and young
            talent eager to make their mark on the track. Together, we combine
            decades of experience, cutting-edge technology, and an unyielding
            drive to push the limits of speed and performance. Whether on the
            track or off, we’re united by our commitment to excellence, safety,
            and the pursuit of adrenaline-fueled challenges."
          </div>
        </div>
        <img
          className="h-[419.9px] w-[749px] absolute !m-[0] right-[159px] bottom-[-19.9px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[135px] box-border max-w-full text-left text-[303px] text-whitesmoke font-roboto mq900:pb-[88px] mq900:box-border mq1275:pl-10 mq1275:pr-10 mq1275:box-border">
        <div className="w-[1336px] flex flex-col items-start justify-start gap-[90px] max-w-full mq900:gap-[45px] mq450:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-end">
            <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[60px] uppercase font-extrabold font-[inherit] mq900:text-[121px] mq900:leading-[36px] mq450:text-[76px] mq450:leading-[24px]">
              JIACS
            </h1>
          </div>
          <div className="w-[745px] flex flex-col items-start justify-start gap-6 max-w-full text-mini text-tomato">
            <div className="w-[409px] flex flex-col items-start justify-start gap-[7px] max-w-full">
              <div className="self-stretch relative tracking-[0.7em] leading-[29.9px] font-semibold">
                FMSCI MOTORSPORTS
              </div>
              <h1 className="m-0 self-stretch relative text-34xl tracking-[0.01em] leading-[60px] uppercase font-bold font-[inherit] text-darkslategray-100 mq900:text-23xl mq900:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
                Team History
              </h1>
            </div>
            <div className="relative text-mid leading-[28.9px] text-darkslategray-200">
              Founded in 2005, Velocity Racers began as a small group of local
              racers with a shared love for motorsports. Over the years, we
              evolved from weekend warriors to a competitive team recognized in
              national and regional championships. By 2010, we expanded our
              roster, added a dedicated support crew, and invested in top-notch
              racing equipment. Our breakthrough came in 2015, when we secured
              our first championship win, putting us on the motorsports map.
              Since then, we’ve grown in size and reputation, known for our
              resilience, teamwork, and consistent track record in the
              motorsports community
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent5 />
      <section className="self-stretch bg-deepskyblue overflow-hidden flex flex-row items-start justify-start pt-[0.5px] px-[283px] pb-[0.5px] relative text-left text-499xl text-darkslateblue font-roboto mq900:pl-[70px] mq900:pr-[70px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:pl-[141px] mq1275:pr-[141px] mq1275:box-border">
        <img
          src="/Frame84.svg"
          alt="Frame 84"
          className="self-stretch w-[80%] h-[auto] max-h-[200px]"
        />
      </section>
      <FrameComponent6 />
    </div>
  );
};

export default Homepage;
