import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CategoriesList from "examples/Lists/CategoriesList";
import MessageCard from "examples/Cards/MessageCard";
import RankingsList from "examples/Lists/RankingsList";
import Calendar from "examples/Calendar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import AnnouncementCard from "examples/Cards/AnnouncementCard";

// Test Data
import miniGradientLineChartData from "layouts/dashboards/crm/data/miniGradientLineChartData";
import categoriesListData from "layouts/dashboards/crm/data/categoriesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";

// Images
import ivancik from "assets/images/ivancik.jpg";
import kalVisualsSquare from "assets/images/kal-visuals-square.jpg";

// Fairer Coffee Components





function OPERATIONS() {
  const { visitorsChart, incomeChart } = miniGradientLineChartData;
  const { transactionsData, revenueData } = rankingsListData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>

                <Grid item xs={12} sm={4}>
                    <SoftBox mb={1}>
                      <MiniStatisticsCard

                        bgColor="info"
                        title={{ text: "Weekly Sales", fontWeight: "regular" }}
                        count="$26,712"
                        icon={{ component: "shopping_cart" }}
                      />
                    </SoftBox>
                    <MiniStatisticsCard
                      bgColor="info"
                      title={{ text: "Todays Sales Volume", fontWeight: "regular" }}
                      count="98kg"
                      icon={{ color: "info", component: "bar_chart" }}
                    />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <SoftBox mb={1}>
                    <MiniGradientLineChart
                          title="Weekly Sales"
                          description={
                            <SoftTypography variant="h5" fontWeight="bold">
                              $26,712{" "}
                              <SoftTypography variant="button" color="success" fontWeight="bold">
                                +22%
                              </SoftTypography>
                            </SoftTypography>
                          }
                          chart={visitorsChart}
                        />
                  </SoftBox> 
                </Grid>

                <Grid item xs={12} sm={4}>
                  <SoftBox mb={1}>
                    <MiniGradientLineChart
                      title="Green Coffee Inventory"
                      description={
                        <SoftTypography variant="h5" fontWeight="bold">
                          480kg{" "}
                        </SoftTypography>
                      }
                      chart={incomeChart}
                    />

                  </SoftBox>
                </Grid>

              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SoftBox mt={2}>
                    <AnnouncementCard
                      by={{ name: "System Warning", date: "Two Days Ago" }}
                      badge={{ color: "error", label: "URGENT" }}
                      title="Inventory Forecast"
                      description="Based on your historic sales data, your inventory reorder point will be reached in 5 days. Consider restocking to ensure sales are maintained."
                    />
                  </SoftBox>
                </Grid>
                <Grid item xs={6}>
                  <SoftBox mt={2}>
                    <AnnouncementCard
                      by={{ name: "Market Insights", date: "Today" }}
                      badge={{ color: "error", label: "MODERATE" }}
                      title="Coffee Price Alert"
                      description="Coffee prices have fallen to a new yearly low of 149c/lb.
                      We recommend securing future supply now at this lowered price while sales are up. 
                      
                      "
                    />
                  </SoftBox>
                </Grid>
              </Grid>
                


              <Grid item xs={12}>
                <SoftBox mt={3}>
                  {useMemo(
                    () => (
                      <Calendar
                        header={{ title: "Roasting Schedule", date: "October, 2023" }}
                        headerToolbar={false}
                        initialView="dayGridMonth"
                        initialDate="2023-10-10"
                        events={calendarEventsData}
                        selectable
                        editable
                      />
                    ),
                    [calendarEventsData]
                  )}
                </SoftBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <BackgroundBlogCard
                    image={ivancik}
                    title="Producer Spotlight"
                    description="Meet Alejandro! He is a producer for the Paraje Los Machos association in Oaxaca, Mexico."
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <CategoriesList title="Subscription Volume by Channel" categories={categoriesListData} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OPERATIONS;
