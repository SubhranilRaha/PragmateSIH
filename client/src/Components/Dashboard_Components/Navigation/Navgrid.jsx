import React from "react";
import Navgroup from "./Navgroup";
import Navitem from "./Navitem";

function Navgrid({ menuList = [], selected, setSelected, open, setOpen }) {
  return (
    <nav>
      {menuList.map((item, index) =>
        item.submenu ? (
          <Navgroup
            id={item.id}
            text={item.title}
            icon={item.icon}
            key={index}
            submenuItems={item.submenuItems}
            selected={selected}
            setSelected={setSelected}
            open={open}
            setOpen={setOpen}
          />
        ) : (
          <Navitem
            id={item.id}
            text={item.title}
            icon={item.icon}
            key={index}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        )
      )}
    </nav>
  );
}

export default Navgrid;
