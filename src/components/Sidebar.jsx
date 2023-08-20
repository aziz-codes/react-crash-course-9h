import { links } from "../dummy";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [data, setData] = useState(links);

  const handleOpen = (index) => {
    let newData = (links[index].expanded = true);
    setData([...data], newData);
  };
  const handleHide = (index) => {
    let newData = (links[index].expanded = false);
    setData([...data], newData);
  };
  return (
    <div className="w-56 border flex flex-col py-6 px-2 h-screen gap-4 overflow-y-auto overflow-x-hidden">
      <h4 className="text-center">Sidebar</h4>
      {/* menus */}
      <div className="flex flex-col gap-4 w-full z-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`flex flex-row w-full justify-between ${
                item.expanded ? "shadow-none" : "shadow-md"
              } rounded-md  h-9 items-center px-2 relative  `}
            >
              <div className="flex items-center gap-2">
                <span className="h-5 w-5">{item.icon}</span>
                <h4>{item.label}</h4>
              </div>
              {item.submenu.length > 0 &&
                (item.expanded ? (
                  <ChevronDownIcon
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => {
                      handleHide(index);
                    }}
                  />
                ) : (
                  <ChevronRightIcon
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => {
                      handleOpen(index);
                    }}
                  />
                ))}
            </div>

            {item.expanded ? (
              <div className="  bg-gray-200  h-auto w-full flex flex-col gap-3   shadow-md  ">
                {item.submenu.map((sub, i) => (
                  <div
                    key={i}
                    className="flex flex-row gap-3 px-2 ml-4 w-full h-9 items-center shadow-sm  "
                  >
                    <span className="h-5 w-5">{sub.icon}</span>
                    <h4 className="text-sm">{sub.title}</h4>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          // wrapper
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
