"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const staticRoutes = [
    "about",
    "services",
    "items",
    "contact",
  ];

  const district =
    pathParts.length > 0 &&
      !staticRoutes.includes(pathParts[0])
      ? pathParts[0]
      : "";

  const makeLink = (path) => {
    if (!district) return path;

    if (path === "/") {
      return `/${district}`;
    }

    return `/${district}${path}`;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/items" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E8C8D0]">

      <div className="container-custom h-20 flex items-center justify-between">


        {/* Logo */}
        <Link href={makeLink("/")}>
          <h1 className="text-xl md:text-2xl font-bold text-[#7B1E3A]">

            Central

            <span className="text-[#2D1B21]">
              {" "}Biomedicals
            </span>

          </h1>
        </Link>




        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#6B4A54]">

          {navLinks.map((link) => (

            <Link
              key={link.name}
              href={makeLink(link.path)}
              className="hover:text-[#7B1E3A] transition duration-300"
            >
              {link.name}
            </Link>

          ))}

        </nav>





        {/* Desktop Button */}
        <div className="hidden lg:block">

          <Link href={makeLink("/contact")}>

            <button
              className="
            rounded-xl
            bg-[#7B1E3A]
            px-7
            py-3
            font-semibold
            text-white
            shadow-md
            transition-all
            duration-300
            hover:bg-[#5A132B]
            hover:shadow-lg
          "
            >

              Get Quote

            </button>

          </Link>

        </div>





        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#7B1E3A]"
        >

          {menuOpen ? (

            <X size={28} />

          ) : (

            <Menu size={28} />

          )}

        </button>


      </div>





      {/* Mobile Menu */}
      <div
        className={`
      lg:hidden
      overflow-hidden
      transition-all
      duration-300
      ${menuOpen
            ? "max-h-[500px]"
            : "max-h-0"
          }
    `}
      >


        <div className="bg-white border-t border-[#E8C8D0] p-6">


          <nav className="flex flex-col gap-5 text-[#6B4A54] font-medium">


            {navLinks.map((link) => (

              <Link
                key={link.name}
                href={makeLink(link.path)}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#7B1E3A] transition"
              >

                {link.name}

              </Link>

            ))}





            {/* Mobile Quote Button */}
            <Link
              href={makeLink("/contact")}
              onClick={() => setMenuOpen(false)}
            >

              <button
                className="
              mt-3
              w-full
              rounded-xl
              bg-[#7B1E3A]
              py-3
              font-semibold
              text-white
              transition-all
              hover:bg-[#5A132B]
            "
              >

                Get Quote

              </button>


            </Link>



          </nav>


        </div>


      </div>


    </header>
  );
}