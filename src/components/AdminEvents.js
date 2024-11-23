import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/events');
        console.log('Response:', response);
        
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }
        
        // Convert response to text and then parse JSON
        const textData = await response.text();
        const data = JSON.parse(textData);
        console.log('Fetched events:', data);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
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
          {/* Side Navbar Content */}
          <div className="flex flex-row items-start justify-start py-0 px-[29px]">
            <div className="flex flex-row items-end justify-start gap-5">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/squares-four.svg"
              />
              <Link to="/" className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[75px] z-[1]">
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
            
            {/* Display Events */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {events.map((event, index) => (
                <div key={event._id} className="rounded-xl bg-white border-lightseagreen border-[2px] border-solid p-4 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-orange-500">{`Event ${index + 1}`}</span>
                    <Link to={`/admin-add-events/${event._id}`} className="hover:opacity-75">
                      <img
                        className="h-6 w-6 object-cover"
                        loading="lazy"
                        alt="Edit"
                        src="/edit.svg"
                      />
                    </Link>
                  </div>
                  <div className="text-black">
                    <p className="font-medium text-lg">{event.name}</p>
                    {event.date && (
                      <p className="text-sm text-gray-600 mt-2">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AdminEvents;
