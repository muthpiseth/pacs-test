import { InputNumber, Modal } from "antd";
import BackgroundButton from "../../components/buttons/backgroundButton";
import "../../styles/modalDonor/modalDonor.css";
const ModalAge = (props) => {
  const { isOpen, handleCancel } = props;
  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        centered
        width="37.5rem"
        onCancel={handleCancel}
      >
        <div className="row g-0 px-4 pb-4">
          <div className="text-center mb-3 h2-bold-size20">
            Create Donor Age Group
          </div>
          <div className="col-4 d-flex align-items-center h4-bold-size14-grey">
            Donor Age Range
          </div>
          <div className="col-8 d-flex">
            <InputNumber className="me-2" style={{ width: "100%" }} />
            <div
              style={{
                marginTop: "1rem",
                width: "7%",
                height: "0.063rem",
                borderTop: "0.125rem solid #CED0D5",
              }}
            ></div>
            <InputNumber className="ms-2" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <BackgroundButton tittle="Submit" width="20rem" height="2.8rem" />
        </div> 
      </Modal>
    </>
  );
};
export default ModalAge;
