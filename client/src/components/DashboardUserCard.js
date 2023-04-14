import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const DashboardUserCard = ({ data, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    password: "",
    phone: "",
    age: "",
    address: "",
  });

  const handleDashboardChange = async (event) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/users/${id}`,
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("User updated successfully!");
      } else {
        alert("Failed to update user!");
      }
    } catch (error) {
      alert("Failed to update user!");
    }
  };

  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete user!");
      }
    } catch (error) {
      alert("Failed to delete user!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={handleClickOpen}
      className="relative w-full rounded-md flex items-center justify-between py-4 bg-lightOverlay cursor-pointer hover:bg-card hover:shadow-md"
    >
      {/* {data._id !== user?.user._id && ( */}
      <motion.div
        whileTap={{ scale: 0.75 }}
        className="absolute left-4 w-8 h-8 rounded-md flex items-center justify-center bg-gray-200"
        onClick={() => deleteUser(data._id)}
      >
        <MdDelete className="text-xl text-red-400 hover:text-red-500" />
      </motion.div>
      {/* )} */}

      <p className="text-base text-textColor w-275 min-w-[160px] text-center">
        {data.username}
      </p>
      <p
        className="text-base text-textColor w-275 min-w-[160px] text-center"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "200px",
        }}
      >
        {data.password}
      </p>
      <p className="text-base text-textColor w-275 min-w-[160px] text-center">
        {data.age}
      </p>
      <p className="text-base text-textColor w-275 min-w-[160px] text-center">
        {data.phone}
      </p>
      <p className="text-base text-textColor w-275 min-w-[160px] text-center">
        {data.address}
      </p>

      <p className="text-base text-textColor w-275 min-w-[160px] text-center">
        {data.createdAt}
      </p>
      <div className=" w-275 min-w-[160px] text-center flex items-center justify-center gap-6 relative">
        <p className="text-base text-textColor"> {data.role}</p>
        {/* {data._id !== user?.user._id && ( */}
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="text-[10px]  font-semibold text-textColor px-1 bg-purple-200 rounded-sm hover:shadow-md"
          // onClick={() => setIsUpdateRole(true)}
        >
          {/* {data.role === "admin" ? "Member" : "Admin"} */}
          {data.isAdmin ? "Admin" : "User"}
        </motion.p>
        {/* )} */}
        {/* {isUpdateRole && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute z-10 top-6 right-4 rounded-md p-4 flex items-start flex-col gap-4 bg-white shadow-xl"
          >
            <p className="text-textColor text-sm font-semibold">
              Are you sure do u want to mark the user as{" "}
              <span>{data.role === "admin" ? "Member" : "Admin"}</span> ?
            </p>
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="outline-none border-none text-sm px-4 py-1 rounded-md bg-blue-200 text-black hover:shadow-md"
                onClick={() =>
                  UpdateUserRole(
                    data._id,
                    data.role === "admin" ? "member" : "admin"
                  )
                }
              >
                Yes
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="outline-none border-none text-sm px-4 py-1 rounded-md bg-gray-200 text-black hover:shadow-md"
                onClick={() => setIsUpdateRole(false)}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )} */}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleDashboardChange}
          />
          <TextField
            margin="dense"
            name="age"
            label="Age"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleDashboardChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleDashboardChange}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleDashboardChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate(data._id)}>Update</Button>
        </DialogActions>
      </Dialog>
      {isLoading && (
        <div className="absolute inset-0 bg-card animate-pulse"></div>
      )}
    </motion.div>
  );
};

export default DashboardUserCard;
