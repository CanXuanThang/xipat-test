import {
  Box,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PaginationBase from "../../common/PaginationBase";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBase from "../../common/SearchBase";
import { Data } from "../../models";

interface Props {
  data: Data[];
  handleViewPost: (value: Data) => void;
  loading?: boolean;
}

interface IColumn {
  id: string;
  label: string;
}

const columns: IColumn[] = [
  { id: "id", label: "ID" },
  { id: "userId", label: "User ID" },
  { id: "title", label: "Title" },
  { id: "action", label: "Action" },
];

function TablePostManagement({ data, handleViewPost, loading }: Props) {
  const pageSize = useRef(10);
  const [dataTable, setDataTable] = useState<Data[]>(data);

  let totalPage = Math.ceil(dataTable.length / pageSize.current);

  const [searchParams, setSearchParams] = useSearchParams();

  let page = Number(searchParams.get("page")) || 1;

  let startIndex = (page - 1) * pageSize.current;
  let endIndex = startIndex + pageSize.current;

  const handleChangePage = (page: number) => {
    searchParams.set("page", `${page}`);
    setSearchParams(searchParams, { replace: true });
  };

  const search = searchParams.get("search") || "";

  const handleSearch = (value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    data && setDataTable(data);
  }, [data]);

  useEffect(() => {
    const newData =
      search !== "" || data
        ? data.filter(
            (item) =>
              item.title.includes(search) || item.userId === Number(search)
          )
        : data;

    setDataTable(newData);
  }, [search, data]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        // flex: 1,
        flexDirection: "column",
        gap: 1,
      }}
    >
      <SearchBase
        value={searchParams.get("search") || ""}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {dataTable.slice(startIndex, endIndex).map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>

                <TableCell>{item.userId}</TableCell>

                <TableCell>{item.title}</TableCell>

                <TableCell>
                  <IconButton onClick={() => handleViewPost(item)}>
                    <VisibilityOutlinedIcon color="info" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          minHeight="400px"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      )}

      <PaginationBase totalPage={totalPage} onChangePage={handleChangePage} />
    </Box>
  );
}

export default TablePostManagement;
