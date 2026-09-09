import image from "@/images/gallery/udaipurimg.jpg";
import { FaShieldAlt, FaWallet, FaHeadset, FaClock, FaSignal, FaThumbsUp } from "react-icons/fa";

const aboutPage = {
  image,
  tagline: "Learn about us",
  title: "About Rajasthan Tours",
  text1:
    "Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays through-out the world. Combined we have received 1532 customer reviews.",
  text2:
    "Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life and it has helped us.",
  progress: [
    { id: 1, icon: FaShieldAlt, title: "Safety Travel System" },
    { id: 2, icon: FaWallet, title: "Budget-Friendly Tour" },
    { id: 3, icon: FaHeadset, title: "24/7 Customer Support" },
    { id: 4, icon: FaClock, title: "Expert Trip Planning" },
    { id: 5, icon: FaSignal, title: "Fast Communication" },
    { id: 6, icon: FaThumbsUp, title: "Right Solution & Guide" },
  ],
};

export default aboutPage;