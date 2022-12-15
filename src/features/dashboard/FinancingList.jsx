import React from "react";

const financingList = [
  {
    title: "1.مؤهل",
    counter: "42",
    active: true,
  },

  {
    title: "2.التأمينات",
    counter: "42",
    active: false,
  },
  {
    title: "3.الحسابات",
    counter: "42",
    active: false,
  },
  {
    title: "4.المشاريع",
    counter: "42",
    active: false,
  },
];

function FinancingList() {
  const [list, setList] = React.useState(financingList);
  const toggleTap = (title) => {
    const newList = financingList.map((item) => {
      item.active = false;
      if (item.title == title) {
        item.active = true;
      }
      return item;
    });

    setList(newList);
  };
  return (
    <div className="max-w-2xl ">
      <div className="border-b border-gray-200  mb-4">
        <ul className="flex flex-wrap -mb-px">
          {list.map(({ title, active, counter }) => (
            <li key={title} className="mr-2" role="presentation">
              <button
                onClick={() => toggleTap(title)}
                className={`items-center inline-block  rounded-t-lg py-4 px-4 text-sm font-bold text-center   ${
                  active && " border-b-2 border-primary"
                } `}
              >
                <div className="flex items-center  gap-[16px] ">
                  <span className={active ? "font-bold" : "text-[#737373] "}>
                    {title}
                  </span>
                  <span
                    className={`flex justify-center items-center bg-[#f2f2f2] w-[48px] h-[38px] rounded-[4px]
                       ${active && " text-primary"} `}
                  >
                    {counter}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FinancingList;
