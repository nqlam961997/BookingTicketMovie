import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker, Space } from "antd";
import { useDispatch } from "react-redux";
import { themPhimMoiApiAction } from "../../../Redux/actions/AdminAction/QuanLyPhimAction";

export default function ThemPhim() {
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const validateMessages = {
    required: "${label} Không được bỏ trống",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    // console.log(values);
    dispatch(themPhimMoiApiAction(values));
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={"tenPhim"}
        label="Tên phim"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={"biDanh"} label="Bí danh">
        <Input />
      </Form.Item>

      <Form.Item name={"trailer"} label="Trailer">
        <Input />
      </Form.Item>

      <Form.Item name={"hinhAnh"} label="Hình ảnh">
        <input type="file" />
      </Form.Item>

      <Form.Item name={"moTa"} label="Mô tả">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={"ngayKhoiChieu"} label="Ngày khởi chiếu">
        <input type="date" />
      </Form.Item>

      <Form.Item name={"danhGia"} label="Đánh giá">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Thêm phim
        </Button>
      </Form.Item>
    </Form>
  );
}
