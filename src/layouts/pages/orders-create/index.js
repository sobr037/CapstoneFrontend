import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
import SoftDatePicker from "components/SoftDatePicker";
import SoftEditor from "components/SoftEditor";
import SoftDropzone from "components/SoftDropzone";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function OrderCreate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSetStartDate = (newDate) => setStartDate(newDate);
  const handleSetEndDate = (newDate) => setEndDate(newDate);

  const [formData, setFormData] = useState({
    order_id: "",
    order_date: "",
    order_customer: "",
    order_total: "",
    order_count: "",
    order_volume: "",
    order_trace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // formData object to send the capt data in the POST req.
    fetch("http://localhost:8080/orders/import", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Unknown Error.");
        }
      })
      .catch((error) => {
        console.error("Error submitting the order:", error);
      });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={3} mb={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={9}>
            <Card sx={{ overflow: "visible" }}>
              <SoftBox p={2} lineHeight={1}>
                <SoftTypography variant="h6" fontWeight="medium">
                  New Order
                </SoftTypography>
                <SoftTypography variant="button" fontWeight="regular" color="text">
                  Create a new order
                </SoftTypography>
                <Divider />
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  mb={2}
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order ID
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_id"
                    placeholder="Order ID"
                    value={formData.order_id}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  mb={2} 
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order Date
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_date"
                    placeholder="Order Date"
                    value={formData.order_date}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  mb={2}
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order Customer
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_customer"
                    placeholder="Order Customer"
                    value={formData.order_customer}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  mb={2}
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order Total
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_total"
                    placeholder="Order Total"
                    value={formData.order_total}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  mb={2} 
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order Count
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_count"
                    placeholder="Order Count"
                    value={formData.order_count}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  mb={2} 
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order Volume
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_volume"
                    placeholder="Order Volume"
                    value={formData.order_volume}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Order Trace
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    name="order_trace"
                    placeholder="Order Trace"
                    value={formData.order_trace}
                    onChange={handleChange}
                  />
                </SoftBox>
                <SoftBox display="flex" justifyContent="flex-end" mt={3}>
                  <SoftBox mr={1}>
                    <SoftButton color="light">Cancel</SoftButton>
                  </SoftBox>
                  <SoftButton variant="gradient" color="info" onClick={handleSubmit}>
                    Create Order
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderCreate;
