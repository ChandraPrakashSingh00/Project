import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const NAV_LINKS = [
  { to: "/app/home", label: "Home" },
  { to: "/app/about", label: "About" },
  { to: "/app/feed", label: "Feed" },
  { to: "/app/create", label: "Create Poll" },
  { to: "/app/dashboard", label: "Dashboard" },
  { to: "/app/profile", label: "Profile" },
];


export default function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const logout = () => {
    handleLogout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold cursor-pointer ml-2 md:ml-6 hover:scale-105 transition-transform"
          onClick={() => navigate("/app/dashboard")}
        >
          VOXINA
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isActive(l.to)
                  ? "bg-white text-blue-700 shadow-lg"
                  : "hover:bg-white hover:text-blue-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop Logout */}
        <div className="hidden md:block">
          <button
            onClick={logout}
            className="ml-4 border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-xl font-bold"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-blue-700 text-white shadow-2xl transform transition-transform duration-300 z-50
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="text-xl font-bold">VOXINA</div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col mt-6 gap-3 px-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-3 rounded-lg font-medium transition-all ${
                isActive(l.to)
                  ? "bg-white text-blue-700 shadow-md"
                  : "hover:bg-white hover:text-blue-700 hover:shadow-md"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <button
            onClick={logout}
            className="mt-4 px-3 py-3 rounded-lg border border-white font-medium hover:bg-white hover:text-blue-700 hover:shadow-md transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Page Content */}
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}
