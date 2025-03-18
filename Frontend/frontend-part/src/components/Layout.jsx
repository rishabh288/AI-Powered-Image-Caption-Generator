import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "../style/layout.css";

function Layout() {
  return (
    <div  style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} className="welcome-layout">
      {/* Navbar - Fixed at the top */}
      <div className="welcome-layout" style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#FFD1DC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        zIndex: 1000,
        
      }}>
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="welcome-layout" style={{
        display: "flex",
        alignContent:"center",
        justifyContent:"center",
        marginTop: "60px", // Same as navbar height to avoid overlap
        padding: "10px",
        width: "100%",
        backgroundColor: "#F8E7E8" // Light pastel background
      }}>
         <div style={{width:"100vh"}}>

        <Outlet />
         </div>
      </div>

      {/* Footer - Sticky at the bottom */}
      <div style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#FFD1DC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        FooterBar
      </div>
    </div>
  );
}





export default Layout