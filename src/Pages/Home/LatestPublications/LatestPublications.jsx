import TopTitle from "../../../Components/TopTitle/TopTitle";
import LatestCart from "./LatestCart";

const LatestPublications = () => {
  const [datas, setData] = useState();
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>
        <TopTitle
          title={"LearnUp latest publications"}
          subTitle={
            "Explore all of our courses and pick your suitable ones to enroll and start learning with us!"
          }
          btn={"View All News"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {datas?.slice(0, 3).map((data) => (
          <LatestCart key={data.id} data={data}></LatestCart>
        ))}
      </div>
    </>
  );
};

export default LatestPublications;
