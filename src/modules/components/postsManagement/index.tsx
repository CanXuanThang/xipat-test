import { Typography } from "@mui/material";
import BoxContainer from "../../common/BoxContainer";
import { useQuery } from "@tanstack/react-query";
import { getDataTable } from "../../apis";
import TablePostManagement from "./TablePostManagement";
import DialogInfoPost from "./DialogInfoPost";
import { useState } from "react";
import { Data } from "../../models";

function PostManagement() {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Data | undefined>(undefined);

  const { data, isFetching } = useQuery({
    queryKey: ["get-data-table"],
    queryFn: () => getDataTable(),
  });

  const handleGetItemView = (item: Data) => {
    setItem(item);
    setOpen(true);
  };

  return (
    <>
      <BoxContainer
        sx={{ width: "100%", height: "100%" }}
        leftHeader={<Typography color="#115BB2">Posts Management</Typography>}
      >
        <TablePostManagement
          data={data ? data : []}
          handleViewPost={(item) => handleGetItemView(item)}
          loading={isFetching}
        />
      </BoxContainer>

      <DialogInfoPost open={open} onClose={() => setOpen(false)} data={item} />
    </>
  );
}

export default PostManagement;
