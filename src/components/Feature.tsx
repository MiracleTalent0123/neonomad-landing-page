interface FeatureProps {
  img: any;
  title: string;
  desc: string;
  categories?: string[];
}

interface Props {
  props: FeatureProps;
}

const Feature: React.FC<Props> = ({ props }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 p-2">
      <div className="feature-content w-100 h-100 p-4 text-center font-outfit">
        <div className="py-4">
          <div className="w-25 m-auto" style={{ height: "80px" }}>
            <img className="w-100" src={props.img} alt="feature icon" />
          </div>
          <div className="feature-title">{props.title}</div>
          <div className="feature-desc mt-2">{props.desc}</div>
          {props.categories &&
            props.categories.map((category, index) => (
              <div className="d-flex" key={index}>
                {category}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
