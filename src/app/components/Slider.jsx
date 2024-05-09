
import './styles.module.css'
//import { SliderComp } from "./components/SliderComp";
import SliderComp from 'react-slick'

const data = [
  {
    title: "Milan",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg"
  },
  {
    title: "Hong Kong",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg"
  },
  {
    title: "Prague",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/location-page-header-prague-greta-samuel-768x512.jpg"
  },
  {
    title: "Florence",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0440_florence_giordano-poloni_final_header-768x512.jpg"
  },
  {
    title: "Venice",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0449_venice_marianna-tomaselli_final_header-768x432.jpg"
  },
  {
    title: "Los Angeles",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/venice-beach_final-768x512.jpg"
  },
  {
    title: "Milan",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg"
  },
  {
    title: "Hong Kong",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg"
  },
  {
    title: "Prague",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/location-page-header-prague-greta-samuel-768x512.jpg"
  },
  {
    title: "Florence",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0440_florence_giordano-poloni_final_header-768x512.jpg"
  },
  {
    title: "Venice",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0449_venice_marianna-tomaselli_final_header-768x432.jpg"
  },
  {
    title: "Los Angeles",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/venice-beach_final-768x512.jpg"
  }
];

export default function App() {
  return (
    <div className="main-container">
      <div style={{ height: 100 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={3000}
        slideNum={4}
        data={data}
        label={"Travel"}
        heading={"Places to travel to in 2022"}
        subheading={"2022 is going to be epic!"}
      />
      <div style={{ height: 100, width: 50 }} />
      <SliderComp
        slideNum={3}
        data={data}
        label={"Japan"}
        heading={"Things to do in Kyoto"}
        subheading={"Kyoto is hip!"}
      />
      <div style={{ height: 100 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={4000}
        slideNum={2}
        data={data}
        label={"Tours"}
        heading={"Lisbon Tours"}
        subheading={"Check out the fun in Lisbon!"}
      />
      <div style={{ height: 100 }} />
      <SliderComp
        slideNum={1}
        data={data}
        label={"Shop"}
        heading={"Places to shop in Barcelona"}
        subheading={"Shop like a local"}
      />
      <div style={{ height: 100 }} />
    </div>
  );
}
