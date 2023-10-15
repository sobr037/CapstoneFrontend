import React, { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

function GreenCoffee() {
  const [greenCoffeeData, setGreenCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/inventory/green')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setGreenCoffeeData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Define columns for the green coffee table
  const columns = [
    { Header: "Producer Name", accessor: "producer_name" },
    { Header: "Green Stock", accessor: "green_stock" },
    { Header: "Roasted Stock", accessor: "roasted_stock" },
    { Header: "Coffee Origin", accessor: "coffee_origin" },
    { Header: "Coffee Elevation", accessor: "coffee_elevation" },
    { Header: "Coffee Variety", accessor: "coffee_variety" },
    { Header: "Coffee Processing", accessor: "coffee_processing" },
    { Header: "Coffee Certifications", accessor: "coffee_certifications" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={3} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Green Coffee
              </SoftTypography>
            </SoftBox>
            <DataTable table={{ columns, rows: greenCoffeeData }} />
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default GreenCoffee;
