import { Pagination, PaginationItem } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  page?: number;
  totalPage?: number;
  onChangePage: (value: number) => void;
}

function PaginationBase({ page, totalPage, onChangePage }: Props) {
  return (
    <Pagination
      defaultPage={0}
      page={page}
      count={totalPage}
      onChange={(_e, page) => onChangePage(page)}
      renderItem={(item) => (
        <PaginationItem
          components={{
            next: () => <NavigateNextIcon />,
            previous: () => <NavigateNextIcon style={{ rotate: "180deg" }} />,
          }}
          {...item}
        />
      )}
    />
  );
}

export default PaginationBase;
