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
import { debounce } from "lodash";

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
  const [dataTable, setDataTable] = useState<Data[]>([]);

  const totalPage = Math.ceil(data.length / pageSize.current);

  const [searchParams, setSearchParams] = useSearchParams();

  const valueSearch = searchParams.get("search") || "";

  let page = Number(searchParams.get("page")) || 1;

  let startIndex = (page - 1) * pageSize.current;
  let endIndex = startIndex + pageSize.current;

  const handleChangePage = (page: number) => {
    searchParams.set("page", `${page}`);
    setSearchParams(searchParams, { replace: true });
  };

  const handleSearch = (value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    debounce(() => {
      setDataTable(
        valueSearch !== ""
          ? dataTable.filter(
              (data) =>
                data.userId === Number(valueSearch) ||
                data.title.includes(valueSearch)
            )
          : data.slice(startIndex, endIndex)
      );
    }, 500)();
  }, [valueSearch]);

  useEffect(() => {
    setDataTable(data.slice(startIndex, endIndex));
  }, [data, startIndex, endIndex]);

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
            {dataTable.map((item) => (
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
