export const dataTable = {
  columns: [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "age",
      width: 200,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "address 1",
      ellipsis: true,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "address 2",
      ellipsis: true,
    },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "address 3",
      ellipsis: true,
    },
    {
      title: "",
      dataIndex: "handle",
      key: "address 4",
      ellipsis: true,
    },
  ],
};
