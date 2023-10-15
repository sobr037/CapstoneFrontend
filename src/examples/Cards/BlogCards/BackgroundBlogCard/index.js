
// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function BackgroundBlogCard({ color, image, title, description }) {
  return (
    <Card raised sx={{ height: "50vh", overflow: "hidden" }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <SoftBox
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "92%",
          margin: "4%",
          p: 2,
          backgroundColor: "rgb(255 255 255)",
          borderRadius: "1rem",
        }}
      >
        <SoftTypography variant="h6" color="dark" fontWeight="bold" textTransform="capitalize">
          {title}
        </SoftTypography>
        <SoftTypography variant="body2" color="text.primary">
          {description}
        </SoftTypography>
      </SoftBox>
    </Card>
  );
}

BackgroundBlogCard.defaultProps = {
  color: "dark",
};

BackgroundBlogCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BackgroundBlogCard;