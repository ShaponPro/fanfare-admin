import { Box } from "@mui/system";

const SideBarHover = () => {
  return (
    <Box
      style={{
        position: "absolute",
        left: "195px",
        top: "100px",
        height: "360px",
        zIndex: 9999,
        width: "245px",
        background: "#FFFFFF",
        boxShadow: "5px 7px 50px rgba(22, 31, 41, 0.2)",
        borderRadius: "0px 20px 20px 0px",
        color: "#161F29",
        fontWeight: 400,
        fontSize: "16px",
      }}
    >
      <ul
        style={{
          paddingTop: "50px",
        }}
      >
        <li
          style={{
            paddingBottom: "20px",
          }}
        >
          Video Analytics
        </li>
        <li
          style={{
            paddingBottom: "20px",
          }}
        >
          List Video
        </li>
        <li
          style={{
            paddingBottom: "20px",
          }}
        >
          Upload a Video
        </li>
        <li
          style={{
            paddingBottom: "20px",
          }}
        >
          Download a Code
        </li>
        <li
          style={{
            paddingBottom: "20px",
          }}
        >
          Content Restriction
        </li>
      </ul>
    </Box>
  );
};

export default SideBarHover;
