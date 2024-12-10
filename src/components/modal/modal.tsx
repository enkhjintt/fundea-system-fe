import React, { useEffect } from "react";
import { Form, Modal } from "antd";
import Button from "../button";

type ConfirmationModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  textLabel?: string;
  variant?: "status" | "delete";
  showStatus?: boolean;
  selectedStatus?: (value: string | undefined) => void;
  formStatusData?: any;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  variant = "delete",
  onCancel,
  selectedStatus,
  onConfirm,
  showStatus = false,
  formStatusData,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue("status_code", formStatusData);
  }, [formStatusData]);

  let style = "text-error-dark";
  let text = "Устгахдаа";

  switch (variant) {
    case "delete":
      break;
    case "status":
      text = "Өөрчлөхдөө";
      style = "text-warning-dark";
      break;
  }
  const handler = async () => {
    const result = await form.validateFields();

    if (result) {
      onConfirm();
      form.resetFields();
    }
  };

  const hanldeCancel = () => {
    onCancel();
    form.resetFields();
  };

  return (
    <Modal
      title={
        <div className="px-5 font-bold text-lg">Үйлчилгэээий нөхцөл</div>
      }
      open={visible}
      closable={false}
      footer={false}
      onCancel={hanldeCancel}
      className="w-[600px]"
    >
      <div className="px-5 mt-6 flex gap-4 items-center"></div>

      {showStatus && selectedStatus && (
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="flex pt-5 px-5 items-center justify-center "
        ></Form>
      )}

      <div className="flex items-center justify-end gap-2 mt-4">
        <Button
          placeholder="Үгүй"
          variant="text"
          onClick={onCancel}
        />

        <Button onClick={handler} placeholder="Тийм" />
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
