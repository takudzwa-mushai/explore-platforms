import Style from "./styles.module.css";

const tags = [
  {
    id: 0,
    title: "FEATURED",
  },
  {
    id: 1,
    title: "New",
  },
  {
    id: 2,
    title: "Web 3.0",
  },
  {
    id: 3,
    title: "Web 2.0",
  }
]

const featuredPlatforms = [
  {
    platformLogo: "",
    tags: [0, 1, 2, 3],
    platformName: "",
    favourite: true,
    platformURL: ""
  },
  {
    platformLogo: "",
    tags: [2, 3],
    platformName: "",
    favourite: true,
    platformURL: ""
  },
  {
    platformLogo: "",
    tags: [1, 2],
    platformName: "",
    favourite: true,
    platformURL: ""
  },
  {
    platformLogo: "",
    tags: [3],
    platformName: "",
    favourite: true,
    platformURL: ""
  },
  {
    platformLogo: "",
    tags: [0],
    platformName: "",
    favourite: true,
    platformURL: ""
  },
  {
    platformLogo: "",
    tags: [0, 1],
    platformName: "",
    favourite: true,
    platformURL: ""
  },
]


export default function App() {
  return (
    <div>
      <div className={Style.cardWrapper}>
        <div className={Style.header}>
          <h4>Explore Platforms</h4>
          <h6>View All</h6>
        </div>

        <div className={Style.cards}>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
          <p>hELLO</p>
        </div>
      </div>
    </div>
  );
}
