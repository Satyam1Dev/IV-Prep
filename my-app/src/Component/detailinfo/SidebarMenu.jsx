import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {route.name}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{route.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AnimatePresence>
            <motion.div
              variants={menuAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="menu_container"
            >
              {route.subRoutes.map((subRoute, i) => (
                <motion.div variants={menuItemAnimation} key={i} custom={i}>
                  <NavLink to={subRoute.path} className="link">
                    <div className="icon">{subRoute.icon}</div>
                    <motion.div className="link_text">{subRoute.name}</motion.div>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarMenu;
