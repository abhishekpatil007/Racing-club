import PropTypes from "prop-types";

const PrizeFans = ({ className = "", image, gainbridgePrize }) => {
  return (
    <div
      className={`w-[705px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[25px] shrink-0 max-w-full text-left text-9xl text-darkslategray-100 font-roboto ${className}`}
    >
      <img
        className="self-stretch h-[415px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <h2 className="m-0 self-stretch relative text-inherit leading-[35px] font-bold font-[inherit] mq450:text-3xl mq450:leading-[28px]">
        {gainbridgePrize}
      </h2>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-4.svg"
      />
    </div>
  );
};

PrizeFans.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  gainbridgePrize: PropTypes.string,
};

export default PrizeFans;
