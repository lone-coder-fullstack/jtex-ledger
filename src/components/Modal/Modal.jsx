import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.scss";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  backgroundColor: "#29295e",
  p: 4,
};

export default function CustomModal({
  children,
  heading,
  isModalOpen,
  toggleModal,
}) {
  function handleClose() {
    toggleModal(false);
  }
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2} direction="column">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className={styles.heading}
            >
              {heading}
            </Typography>
            {children}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
