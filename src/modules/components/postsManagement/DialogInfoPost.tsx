import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Data } from "../../models";

interface Props {
  open: boolean;
  data?: Data;
  onClose(): void;
}

function DialogInfoPost(props: Props) {
  const { open, data, onClose } = props;
  return (
    <Dialog open={open}>
      <DialogTitle
        component={"div"}
        sx={{
          p: "24px 20px 16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Infomation Post</Typography>

        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            color: "text.primary",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
        <Box display="flex" gap="1">
          <Typography variant="subtitle2" fontWeight={550} minWidth={60}>
            User ID:
          </Typography>

          <Typography variant="subtitle2">{data?.userId}</Typography>
        </Box>

        <Box display="flex" gap={1}>
          <Typography variant="subtitle2" fontWeight={550} minWidth={60}>
            Title:
          </Typography>

          <Typography variant="subtitle2">{data?.title}</Typography>
        </Box>

        <Box display="flex" gap={1}>
          <Typography variant="subtitle2" fontWeight={550} minWidth={60}>
            Body:
          </Typography>

          <Typography variant="subtitle2">{data?.body}</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default DialogInfoPost;
