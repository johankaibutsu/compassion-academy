"use client"
import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";


function NavLinks() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Highlights",
      path: "/highlights",
    },
    {
      isDropdown: true,
      title: "Academics",
      links: [
        {
          title: "Departments",
          path: "/academics/departments",
        },
        {
          title: "Library",
          path: "/academics/resources/library",
        },
        {
          title: "moodle",
          path: "/academics/resources/moodle",
        },
      ],
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

  return (
    <>
      {links.map((el, index) => (
        <React.Fragment key={index}>
          {(el.isDropdown) ?
            <Dropdown data={el} />
            :
            <li className="m-1 transition duration-300 ease-in-out transform hover:scale-110">
                <Link href={el.path} className="font-bold text-white hover:underline px-2 bg-transparent">{el.title}</Link>
            </li >
          }
        </React.Fragment>
      ))}
    </>

  )
}

export default NavLinks