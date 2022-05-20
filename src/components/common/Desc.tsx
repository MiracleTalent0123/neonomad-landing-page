interface DescProps {
  img: any;
  type: string;
  title: string;
  desc: string;
}

const Desc: React.FC<DescProps> = ({ img, type, title, desc }) => {
  return (
    <div className="desc-content d-md-flex my-4 py-4 align-items-center pe-4">
      <div className="col-md-4 col-12 text-center">
        <img className="w-75 w-md-100 m-auto" src={img} alt="description" />
      </div>
      <div className="col-md-8 col-12 px-4 mt-4 px-md-0 mt-md-0">
        <div className="desc-type font-poppins">{type}</div>
        <div className="desc-title font-outfit">{title}</div>
        <div className="desc-desc font-outfit">{desc}</div>
      </div>
    </div>
  );
};

export default Desc;
