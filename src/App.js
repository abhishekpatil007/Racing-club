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
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/founding-members" element={<FoundingMembers />} />
    </Routes>
  );
}
export default App;
