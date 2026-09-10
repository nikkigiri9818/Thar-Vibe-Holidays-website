import jaipurImg from "@/images/gallery/jaipurimage1.jpeg";
import udaipurImg from "@/images/gallery/udaipurimg.jpg";
import jodhpurImg from "@/images/gallery/jodhpurimg.jpg";
import pushkarImg from "@/images/gallery/pushkarimg.jpeg";
import ranthamboreImg from "@/images/gallery/ranthmbor.jpeg";
import agraImg from "@/images/gallery/agara.jpeg";
import ajmerImg from "@/images/gallery/ajmer.jpeg";
import sariskaImg from "@/images/gallery/ajmer.jpeg";
import khatuSalasarImg from "@/images/gallery/KhatuSalasar.jpeg";

const commonOverview =
  "Rajasthan is famous for its vibrant culture, majestic forts, and the golden landscape of the Thar Desert. This one-day tour is designed to give you a quick yet memorable glimpse of the destination's heritage, architecture, and local charm. Our experienced drivers and guides ensure a comfortable and enriching experience throughout the day. If you wish to customize this itinerary, talk to our travel experts and they will plan the perfect day trip for you.";

const commonInclusions = [
  "Air-Conditioned Car with Mineral Water, toll, Parking, Fuel, Driver Allowance",
  "A Courteous Driver",
  "Pick up & Drop from Hotel/Airport/Railway Station",
];

const commonExclusions = [
  "All Monuments Entrance Fees",
  "Lunch & Personal Expenses",
  "Guide Charges (if required)",
];

const oneDayTourData = [
  {
    id: 1,
    slug: "jaipur-one-day",
    image: jaipurImg,
    title: "Jaipur One Day",
    tripType: "Full Day",
    durationLabel: "1 Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Jaipur Full Day Sightseeing", desc: "Visit Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and local bazaars. Overnight drop back at hotel." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 2,
    slug: "jaipur-two-day",
    image: jodhpurImg,
    title: "Jaipur Two Day",
    tripType: "Full Day",
    durationLabel: "01night 02 Days",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Jaipur Sightseeing", desc: "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar." },
      { day: 2, title: "Jaipur Local Markets & Departure", desc: "Visit Jal Mahal, Nahargarh Fort, local bazaars before drop-off." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 3,
    slug: "ajmer-pushkar-tour",
    image: pushkarImg,
    title: "Ajmer Pushkar Tour",
    tripType: "Full Day",
    durationLabel: "1 Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Ajmer & Pushkar Sightseeing", desc: "Visit Ajmer Sharif Dargah, Adhai-Din-Ka Jhonpra, Ana Sagar Lake, then Pushkar's Brahma Temple and Pushkar Lake." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 4,
    slug: "khatu-salasar-tour",
    image: khatuSalasarImg,
    title: "Khatu Salasar Tour",
    tripType: "Full Day",
    durationLabel: "One Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Khatu Shyam & Salasar Balaji Darshan", desc: "Visit Khatu Shyam Temple and Salasar Balaji Temple, two of Rajasthan's most revered pilgrimage sites." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 5,
    slug: "ranthambore-wildlife-tour",
    image: ranthamboreImg,
    title: "Ranthambore Wildlife Tour",
    tripType: "Full Day",
    durationLabel: "1 Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Ranthambore Jeep Safari", desc: "Enjoy a thrilling jeep safari in Ranthambore National Park, home to majestic tigers and diverse wildlife." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 6,
    slug: "same-day-agra-tour",
    image: agraImg,
    title: "Same Day Agra Tour",
    tripType: "Full Day",
    durationLabel: "One Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Agra Sightseeing", desc: "Visit the iconic Taj Mahal, Agra Fort, and Mehtab Bagh, then return the same day." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 7,
    slug: "same-day-sariska-jaipur-tour",
    image: sariskaImg,
    title: "Same Day Sariska Jaipur Tour",
    tripType: "Full Day",
    durationLabel: "One Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Sariska Tiger Reserve Visit", desc: "Explore Sariska Tiger Reserve with a jeep safari, then return to Jaipur the same day." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: 8,
    slug: "udaipur-three-day-tour",
    image: udaipurImg,
    title: "Udaipur Three Day Tour",
    tripType: "Full Day",
    durationLabel: "02 Night 3 Day",
    tourTimings: "Full Day",
    visaRequirements: "No",
    priceLabel: "On Request",
    overview: commonOverview,
    itinerary: [
      { day: 1, title: "Arrival & Udaipur Sightseeing", desc: "City Palace, Jagdish Temple, Saheliyon ki Bari." },
      { day: 2, title: "Lake Pichola & Local Sightseeing", desc: "Boat ride on Lake Pichola, visit Fateh Sagar Lake and Bagore ki Haveli." },
      { day: 3, title: "Departure", desc: "Breakfast and drop at Udaipur airport/railway station." },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
];

export default oneDayTourData;