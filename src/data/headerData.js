import logo from "@/images/gallery/logo-1.png";
import logo2 from "@/images/gallery/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      // {
      //   id: 1,
      //   name: "Home One",
      //   href: "/",
      // },
      // {
      //   id: 2,
      //   name: "Home Two",
      //   href: "/home2",
      // },
      // {
      //   id: 3,
      //   name: "Header Styles",
      //   href: "/",
      //   subItems: [
      //     {
      //       id: 1,
      //       name: "Header One",
      //       href: "",
      //     },
      //     { id: 2, name: "Header Two", href: "" },
      //   ],
      // },
    ],





  },
  {
    id: 2,
    name: "One Day Tour",
    href: "/one-day-tour",
    subNavItems: [
      { id: 1, name: "Jaipur One Day", href: "/one-day-tour/jaipur-one-day" },
      { id: 2, name: "Jaipur Two Day", href: "/one-day-tour/jaipur-two-day" },
      { id: 3, name: "Ajmer Pushkar Tour", href: "/one-day-tour/ajmer-pushkar-tour" },
      { id: 4, name: "Khatu Salasar Tour", href: "/one-day-tour/khatu-salasar-tour" },
      { id: 5, name: "Ranthambore Wildlife Tour", href: "/one-day-tour/ranthambore-wildlife-tour" },
      { id: 6, name: "Same Day Agra Tour", href: "/one-day-tour/same-day-agra-tour" },
      { id: 7, name: "Same Day Sariska Jaipur Tour", href: "/one-day-tour/same-day-sariska-jaipur-tour" },
      { id: 8, name: "Udaipur Three Day Tour", href: "/one-day-tour/udaipur-three-day-tour" },
    ],
  },
  {
    id: 3,
    name: "Tours Packages",
    href: "/tour-packages",
  subNavItems: [
      { id: 1, name: "Rajasthan Tour 2N 3D", href: "/tour-packages/rajasthan-tour-2n-3d" },
      { id: 2, name: "Rajasthan Tour 3N 4D", href: "/tour-packages/rajasthan-tour-3n-4d" },
      { id: 3, name: "Rajasthan Tour 4N 5D", href: "/tour-packages/rajasthan-tour-4n-5d" },
      { id: 4, name: "Rajasthan Tour 5N 6D", href: "/tour-packages/rajasthan-tour-5n-6d" },
      { id: 5, name: "Rajasthan Tour 6N 7D", href: "/tour-packages/rajasthan-tour-6n-7d" },
      { id: 6, name: "Rajasthan Tour 7N 8D", href: "/tour-packages/rajasthan-tour-7n-8d" },
      { id: 7, name: "Rajasthan Tour 8N 9D", href: "/tour-packages/rajasthan-tour-8n-9d" },
      { id: 8, name: "Rajasthan Tour 9N 10D", href: "/tour-packages/rajasthan-tour-9n-10d" },
      { id: 9, name: "Jaipur City Tour", href: "/tour-packages/jaipur-city-tour" },
    ],
  },
 
{
    id: 4,
    name: "Our Fleet",
    href: "/our-fleet",
    subNavItems: [],
  },
  {
    id: 5,
    name: "Taxi Services",
    href: "/taxi-service",
    subNavItems: [],
  },

 {
    id: 6,
    name: "About Us",
    href: "/about-us",
    subNavItems: [],
  },



  {
    id: 7,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+91 7413986979",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "tharvibeholdiays@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;


