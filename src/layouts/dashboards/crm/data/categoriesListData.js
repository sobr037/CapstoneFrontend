/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard PRO React components
import SoftTypography from "components/SoftTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: "rocket",
    name: "D2C Subscriptions",
    description: (
      <>
        86 Active,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          54kg/Month
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "coffee",
    name: "Wholesale Cafes",
    description: (
      <>
        16 Active,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          482kg/Month
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "info",
    name: "Wholesale Workplaces",
    description: (
      <>
        36 Active,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          96kg/Month
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "person",
    name: "B2B Contracts",
    description: (
      <>
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          130kg/Month
        </SoftTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;
