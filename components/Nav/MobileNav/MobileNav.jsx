import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React
import { BiStats, BiHomeAlt2 } from "react-icons/bi"; // Importing icons from the react-icons library
import { GrConnect } from "react-icons/gr"; // Importing icons from the react-icons library
import { HiOutlineCollection } from "react-icons/hi"; // Importing icons from the react-icons library
import { FaSearch } from "react-icons/fa"; // Importing icons from the react-icons library
import ConnectModal from "../../ConnectModal/ConnectModal"; // Importing the ConnectModal component
import { useRouter } from "next/router"; // Importing useRouter hook from Next.js to access the router object
import Search from '../Search/Search'

const MobileNav = () => {
  const router = useRouter(); // Using useRouter hook from Next.js to access the router object

  const [showConnectModal, setShowConnectModal] = useState(false); // State to manage the visibility of the connect modal
 const [searchModal, setSearchModal] = useState(false);
  const [activeTab, setActiveTab] = useState(() => {
    // State to manage the active tab based on the current route
    if (router.pathname === "/") {
      return "home";
    } else if (router.pathname === "/collections") {
      return "collections";
    } else if (router.pathname === "/stats") {
      return "stats";
    } else {
      return "home";
    }
  });

  // Styles for the navigation component
  const style = {
    body: {
      // Styling for the main container
      display: "flex", // Setting display property to flex
      justifyContent: "flex-end", // Aligning content to the end of the container horizontally
      alignItems: "flex-end", // Aligning content to the end of the container vertically
      position: "fixed", // Setting position property to fixed
      bottom: "0", // Positioning the container at the bottom of the viewport
      left: "0", // Positioning the container at the left of the viewport
      width: "100%", // Setting width to 100%
      backgroundColor: "gray", // Setting background color to gray
    },
    navigation: {
      // Styling for the navigation container
      zIndex: 98,
      width: "100%", // Setting width to 100%
      height: "70px", // Setting height to 70px
      background: "gray", // Setting background color to gray
      display: "flex", // Setting display property to flex
      justifyContent: "space-between", // Distributing content evenly along the main axis
      alignItems: "center", // Aligning items to the center vertically
      padding: "", // Setting padding to default
      boxSizing: "border-box", // Setting box-sizing property to border-box
      position: "relative", // Setting position property to relative
    },
    ul: {
      // Styling for the unordered list
      display: "flex", // Setting display property to flex
      flex: "1", // Setting flex property to 1
      padding: "0", // Setting padding to 0
      justifyContent: "space-between", // Distributing content evenly along the main axis
      alignItems: "center", // Aligning items to the center vertically
      zIndex: "98",
    },
    li: {
      // Styling for list items
      listStyle: "none", // Removing default list style
      position: "relative", // Setting position property to relative
      zIndex: "98", // Setting z-index to 2
      width: "20%", // Setting width to 20%
      textAlign: "center", // Aligning text to the center
    },
    a: {
      // Styling for anchor tags
      display: "flex", // Setting display property to flex
      flexDirection: "column", // Setting flex direction to column
      justifyContent: "center", // Aligning content to the center vertically
      alignItems: "center", // Aligning content to the center horizontally
      textDecoration: "none", // Removing text decoration
      color: "gray", // Setting text color to gray
    },
    iconContainer: {
      // Styling for the container of icons
      display: "flex", // Setting display property to flex
      flexDirection: "column", // Setting flex direction to column
      alignItems: "center", // Aligning items to the center horizontally
      justifyContent: "center", // Aligning items to the center vertically
    },
    icon: {
      // Styling for icons
      color: "#FF914D", // Setting icon color to orange
      fontSize: "1.5em", // Setting font size to 1.5em
      transition: "0.5s", // Adding transition effect
      marginBottom: "-30px", // Adjusting vertical position
    },
    activeIcon: {
      // Styling for active icons
      transform: "translateY(-20px)", // Moving icon up by 20px
      fontSize: "1.6em", // Increasing font size to 1.6em
      color: "#FF5757", // Setting icon color to #FF5757
      marginBottom: "0px", // Adjusting vertical position
      transition: "0.7s", // Adding transition effect
    },
    text: {
      // Styling for text
      background: "#FF5757", // Setting background color to #FF5757
      color: "#1A1A1A", // Setting text color to #1A1A1A
      padding: "5px 10px", // Adding padding
      borderRadius: "12px", // Adding border radius
      fontWeight: "700", // Setting font weight to bold
      fontSize: "0.75em", // Setting font size to 0.75em
      letterSpacing: "0.05em", // Adding letter spacing
      transition: "0.5s", // Adding transition effect
      opacity: "0", // Setting initial opacity to 0
      transform: "translateY(15px)", // Moving text down by 15px
      whiteSpace: "nowrap", // Preventing text from wrapping
    },
    activeText: {
      // Styling for active text
      transform: "translateY(10px)", // Moving text down by 10px
      opacity: "1", // Setting opacity to 1
    },
    indicator: {
      // Styling for the indicator
      position: "absolute", // Setting position property to absolute
      bottom: "", // Resetting bottom property
      left: "0", // Aligning to the left
      width: "20%", // Setting width to 20%
      height: "100%", // Setting height to 100%
      display: "flex", // Setting display property to flex
      boxSizing: "border-box", // Setting box-sizing property to border-box
      borderRadius: "50%", // Adding border radius
      zIndex: "90", // Setting z-index to 1
      background: "", // Removing background color
      justifyContent: "center", // Aligning content to the center horizontally
      alignItems: "center", // Aligning content to the center vertically
      transition: "0.5s", // Adding transition effect
    },
    indicatorIcon: {
      // Styling for the indicator icon
      content: "", // Removing content
      top: "-29px", // Positioning icon
      position: "absolute", // Setting position property to absolute
      justifyContent: "center", // Aligning content to the center horizontally
      alignItems: "center", // Aligning content to the center vertically
      left: "", // Resetting left property
      width: "60px", // Setting width to 60px
      height: "60px", // Setting height to 60px
      background: "gray", // Setting background color to gray
      borderRadius: "50%", // Adding border radius
      transition: "0.5s", // Adding transition effect
    },
    indicatorBefore: {
      // Styling for the indicator before element
      position: "absolute", // Setting position property to absolute
      bottom: "31px", // Positioning element
      left: "-26px", // Positioning element
      width: "30px", // Setting width to 30px
      height: "30px", // Setting height to 30px
      boxShadow: "15px 18px gray", // Adding box shadow
      borderRadius: "50%", // Adding border radius
      background: "", // Removing background color
    },
    indicatorAfter: {
      // Styling for the indicator after element
      position: "absolute", // Setting position property to absolute
      bottom: "31px", // Positioning element
      left: "56px", // Positioning element
      width: "30px", // Setting width to 30px
      height: "30px", // Setting height to 30px
      boxShadow: "-15px 18px gray", // Adding box shadow
      borderRadius: "50%", // Adding border radius
      background: "", // Removing background color
    },
    homeIndicator: {
      // Styling for the home indicator
      left: "0", // Positioning indicator
    },
    collectionsIndicator: {
      // Styling for the collections indicator
      left: "20%", // Positioning indicator
    },
    searchIndicator: {
      // Styling for the search indicator
      left: "40%", // Positioning indicator
    },
    statsIndicator: {
      // Styling for the stats indicator
      left: "60%", // Positioning indicator
    },
    connectIndicator: {
      // Styling for the connect indicator
      left: "80%", // Positioning indicator
    },
    modal: {
      zIndex: 99,
    },
  };

  useEffect(() => {
    // Effect to handle route changes and update the active tab accordingly
    const handleRouteChange = (url) => {
      // Callback function to handle route changes
      if (url === "/collections" && !showConnectModal) {
        // Checking if the route is '/collections' and connect modal is not shown
        setActiveTab("collections"); // Setting active tab to 'collections'
      } else {
        // If the route is not '/collections' or connect modal is shown
        setActiveTab("home"); // Setting active tab to 'home'
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange); // Adding event listener for route change

    return () => {
      // Cleanup function to remove event listener
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  // Function to handle tab clicks and show the connect modal if the connect tab is clicked
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Setting active tab to the clicked tab
    setShowConnectModal(tab === "connect"); // Showing connect modal if the connect tab is clicked
  };

  // Function to handle click on the connect tab
  const handleConnectClick = () => {
    setShowConnectModal(true); // Showing connect modal
    setActiveTab("connect"); // Setting active tab to 'connect'
  };
  const handleSearchOpen = () => {
    setSearchModal(true);
    handleTabClick("search");
  }

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSearchModal(false);
    setShowConnectModal(false);
     // Hiding connect modal
    // Set active tab back to previous one when closing the modal
      router.push(router.pathname);
   
  };

  return (
    <div style={style.body}>
      {" "}
      {/* Main container with styles for the navigation */}
      <div style={style.navigation}>
        {" "}
        {/* Navigation container */}
        <ul style={style.ul}>
          {" "}
          {/* Unordered list for tabs */}
          {/* Home tab */}
          <li style={style.li} className={activeTab === "home" ? "active" : ""}>
            <a href="/" onClick={() => handleTabClick("home")}>
              <span style={style.iconContainer}>
                <BiHomeAlt2
                  style={activeTab === "home" ? style.activeIcon : style.icon}
                />
              </span>
              <span
                style={{
                  ...style.text,
                  ...(activeTab === "home" ? style.activeText : {}),
                }}
              >
                Home
              </span>
            </a>
          </li>
          {/* Collections tab */}
          <li
            style={style.li}
            className={activeTab === "collections" ? "active" : ""}
          >
            <a
              href="/collections"
              onClick={() => handleTabClick("collections")}
            >
              <span style={style.iconContainer}>
                <HiOutlineCollection
                  style={
                    activeTab === "collections" ? style.activeIcon : style.icon
                  }
                />
              </span>
              <span
                style={{
                  ...style.text,
                  ...(activeTab === "collections" ? style.activeText : {}),
                }}
              >
                Collections
              </span>
            </a>
          </li>
          {/* Search tab */}
          <li
            style={style.li}
            className={activeTab === "search" ? "active" : ""}
          >
            <a  onClick={handleSearchOpen}>
              <span style={style.iconContainer}>
                <FaSearch
                  style={activeTab === "search" ? style.activeIcon : style.icon}
                />
              </span>
              <span
                style={{
                  ...style.text,
                  ...(activeTab === "search" ? style.activeText : {}),
                }}
              >
                Search
              </span>
            </a>
          </li>
          {/* Stats tab */}
          <li
            style={style.li}
            className={activeTab === "stats" ? "active" : ""}
          >
            <a href="/stats" onClick={() => handleTabClick("stats")}>
              <span style={style.iconContainer}>
                <BiStats
                  style={activeTab === "stats" ? style.activeIcon : style.icon}
                />
              </span>
              <span
                style={{
                  ...style.text,
                  ...(activeTab === "stats" ? style.activeText : {}),
                }}
              >
                Stats
              </span>
            </a>
          </li>
          {/* Connect tab */}
          <li
            style={style.li}
            className={activeTab === "connect" ? "active" : ""}
          >
            <a onClick={handleConnectClick}>
              <span style={style.iconContainer}>
                <GrConnect
                  style={
                    activeTab === "connect" ? style.activeIcon : style.icon
                  }
                />
              </span>
              <span
                style={{
                  ...style.text,
                  ...(activeTab === "connect" ? style.activeText : {}),
                }}
              >
                Connect
              </span>
            </a>
          </li>
        </ul>
        {/* Connect modal */}
        {showConnectModal && (
          <ConnectModal onClose={handleCloseModal} style={style.modal} />
        )}
        {/* Indicator */}
        <div
          style={{
            ...style.indicator,
            ...(style[activeTab + "Indicator"] || {}),
          }}
        >
          <div style={style.indicatorIcon}>
            <div style={style.indicatorBefore}></div>
            <div style={style.indicatorAfter}></div>
          </div>
        </div>
      </div>
      {/* Connect modal */}
      <ConnectModal onClose={handleCloseModal} visible={showConnectModal} />
      <Search onClose={handleCloseModal} visible={searchModal}/>
    </div>
  );
};

export default MobileNav; // Exporting the MobileNav component
