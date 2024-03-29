import { links } from "../dummy";
import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [data, setData] = useState(links);

  const handleOpen = (index) => {
    const updatedItem = [...data];
    updatedItem[index].expanded = !updatedItem[index].expanded;
    setData(updatedItem);
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
            <AnimatePresence>
              {item.expanded ? (
                <motion.div
                  className="bg-gray-200  h-auto w-full flex flex-col gap-3   shadow-md"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.submenu.map((sub, i) => (
                    <div
                      key={i}
                      className="flex flex-row gap-3 px-2 ml-4 w-full h-9 items-center shadow-sm  "
                    >
                      <span className="h-5 w-5">{sub.icon}</span>
                      <h4 className="text-sm">{sub.title}</h4>
                    </div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          // wrapper
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
