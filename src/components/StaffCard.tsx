interface IStaffCard {
  img: string;
  name: string;
  title: string;
}

function StaffCard({ img, name, title }: IStaffCard) {
  return (
    <div className="mb-6 w-72 lg:w-[30%]">
      <img
        src={img}
        alt=""
        className="h-48 w-full rounded-2xl bg-[#D9D9D9] object-cover lg:h-56"
      />
      <h3 className="mb-1 mt-4 items-center text-center text-xl font-bold ">
        {name}
      </h3>
      <p className="mb-3 text-center leading-tight">{title}</p>
    </div>
  );
}

export default StaffCard;
