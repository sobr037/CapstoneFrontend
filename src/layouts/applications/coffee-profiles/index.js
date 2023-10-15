import React, { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

function CoffeeProfiles() {
  const [coffeeProfilesData, setCoffeeProfilesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/inventory/profiles')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCoffeeProfilesData(data.data);
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

  // Define columns for the coffee profiles table
  const columns = [
    { Header: "Profile Name", accessor: "profile_name" },
    { Header: "Origin", accessor: "profile_origin" },
    { Header: "Producers", accessor: "profile_producers" }
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={3} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Roasted Coffee Profiles
              </SoftTypography>
            </SoftBox>
            <DataTable table={{ columns, rows: coffeeProfilesData }} />
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CoffeeProfiles;
