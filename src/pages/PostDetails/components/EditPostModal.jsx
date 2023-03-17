import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { PostForm } from "components";
import { useState } from "react";

const EditPostModal = ({ disabled }) => {
  const [open, setOpen] = useState(false);
  const [form] = useForm();

  const toggleModalVisibility = () => setOpen((prev) => !prev);

  return (
    <>
      <Button
        type="link"
        icon={<EditOutlined />}
        disabled={disabled}
        onClick={toggleModalVisibility}
      />

      <Modal
        open={open}
        onCancel={toggleModalVisibility}
        title="Edit post"
        onOk={form.submit}
      >
        <PostForm form={form} />
      </Modal>
    </>
  );
};

export default EditPostModal;
