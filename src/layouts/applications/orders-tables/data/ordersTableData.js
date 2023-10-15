// Note: This isn't being used for any data on the website - this was just for testing prior to implementing the backend & SQL Database.

const ordersTableData = {
  columns: [
    { Header: "Order Number", accessor: "order_id", width: "12%" },
    { Header: "Order Date", accessor: "order_date", width: "19%" },
    { Header: "Customer", accessor: "order_customer", width: "16%" },
    { Header: "Order Total", accessor: "order_total", width: "13%" },
    { Header: "Item Count", accessor: "order_count", width: "14%" },
    { Header: "Order Volume", accessor: "order_volume", width: "11%" },
    { Header: "Coffee Trace Code", accessor: "order_trace", width: "15%" },
  ],

  rows: [

  ],
};

export default ordersTableData;
