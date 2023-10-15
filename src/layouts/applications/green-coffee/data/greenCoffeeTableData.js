// Note: This isn't being used for any data on the website - this was just for testing prior to implementing the backend & SQL Database.

const greenCoffeeTableData = {
  columns: [
    { Header: "Producer", accessor: "producer_name", width: "18%" },
    { Header: "Green Coffee Stock", accessor: "green_stock", width: "14%" },
    { Header: "Roasted Coffee Stock", accessor: "roasted_stock", width: "15%" },
    { Header: "Origin", accessor: "coffee_origin", width: "8%" },
    { Header: "Elevation", accessor: "coffee_elevation", width: "8%" },
    { Header: "Variety", accessor: "coffee_variety", width: "8%" },
    { Header: "Processing Method", accessor: "coffee_processing", width: "8%" },
    { Header: "Certifications", accessor: "coffee_certifications", width: "20%" },
  ],
  rows: [
  ],
};

export default greenCoffeeTableData;