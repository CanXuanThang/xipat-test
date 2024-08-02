import {
  Box,
  CircularProgress,
  Grid,
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
import FilterTable from "../../common/FilterTable";

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
  const [userId, setUserId] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  const totalPage = Math.ceil(dataTable.length / pageSize.current);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const startIndex = (page - 1) * pageSize.current;
  const endIndex = startIndex + pageSize.current;

  const dataFilterUserId = [
    ...new Map(data.map((item) => [item.userId, item.userId])).values(),
  ];

  const dataFilterTitle = [
    ...new Map(data.map((item) => [item.title, item.title])).values(),
  ];

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
    let newData =
      search !== "" || data
        ? data.filter(
            (item) =>
              item.title.includes(search) || item.userId === Number(search)
          )
        : data;

    newData =
      userId || title
        ? userId && title
          ? newData.filter(
              (item) =>
                item.title.includes(title) && item.userId === Number(userId)
            )
          : userId
          ? newData.filter((item) => item.userId === Number(userId))
          : title
          ? newData.filter((item) => item.title.includes(title))
          : []
        : newData;

    setDataTable(newData);
  }, [search, data, userId, title]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12}>
          <SearchBase
            value={searchParams.get("search") || ""}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <FilterTable
            data={dataFilterUserId}
            value={userId}
            handleChange={(_e, value) => setUserId(value)}
            title="User ID"
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <FilterTable
            data={dataFilterTitle}
            value={title}
            handleChange={(_e, value) => setTitle(value)}
            title="Title"
          />
        </Grid>
      </Grid>

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
