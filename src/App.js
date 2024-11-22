import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./components/AboutUs";
import MembersPage from "./components/MembersPage";
import FoundingMembers from "./components/FoundingMembers";
import AdminPage from "./components/AdminPage";
import AdminMembers from "./components/AdminMembers";
import AdminEvents from "./components/AdminEvents";
import AdminAddEvents from "./components/AdminAddEvents";
import AdminGallery from "./components/AdminGallery";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import { EventProvider } from './context/EventContext';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Homepage Title";
        metaDescription = "Homepage Description";
        break;
      case "/about":
        title = "About Us";
        metaDescription = "About Us Description";
        break;
      case "/members":
        title = "Members";
        metaDescription = "Members Description";
        break;
      case "/founding-members":
        title = "Founding Members";
        metaDescription = "Founding Members Description";
        break;
      case "/admin":
        title = "Admin Page";
        metaDescription = "Admin Page Description";
        break;
      case "/admin-members":
        title = "Admin Members";
        metaDescription = "Admin Members Description";
        break;
      case "/admin-events":
        title = "Admin Events";
        metaDescription = "Admin Events Description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <EventProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/founding-members" element={<FoundingMembers />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-members" element={<AdminMembers />} />
        <Route path="/admin-events" element={<AdminEvents />} />
        <Route path="/admin-add-events" element={<AdminAddEvents />} />
        <Route path="/admin-gallery" element={<AdminGallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </EventProvider>
  );
}
export default App;

