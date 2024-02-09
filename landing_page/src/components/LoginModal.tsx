import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function LoiginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="text-[#263659] ms-4 text-[12px] sm:text-[16px] hover:text-[#1AAFD0] font-semibold transition duration-500"
        onClick={handleOpen}
      >
        <LogoutIcon className="me-2" />
        Log in
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        className=""
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="shadow rounded-md sm:w-4/6 w-11/12 lg:w-2/5">
          <div className="flex justify-end">
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex justify-center mt-10">
            <img
              src="https://d999c2fb1571594aedf60232928d50bd.cdn.bubble.io/f1687488421073x491534346898209200/Frame%201010106674.svg"
              alt=""
            />
          </div>
          <h3 className=" font font-bold text-center  mt-8 text-3xl text-[#233151]">
            Welcome Back
          </h3>
          <p className="text-center mt-5">
            Please enter your details to sign in
          </p>
          <form action="" className="mt-5">
            <label htmlFor="email">E-mail :</label>
            <br />
            <input
              type="email"
              className="border py-3 w-full mt-2 border-1 px-4 focus:outline-0 border-[#6cd4eb] "
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <br />
            <div className="mt-4 flex justify-centers">
              <button className="py-3 w-full bg-[#1aafd0] text-md text-white">
                Continue
              </button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-x-3">
              <button className=" border-2 hover:border-[#1aafd0]  text-[#263659] py-2 font-semibold">
                <GoogleIcon className="me-3 text-red-600" />
                Google
              </button>
              <button className=" py-2 font-semibold border-2 hover:border-[#1aafd0] text-[#263659] ">
                <FacebookIcon className="me-3 text-blue-700" />
                Facebook
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
