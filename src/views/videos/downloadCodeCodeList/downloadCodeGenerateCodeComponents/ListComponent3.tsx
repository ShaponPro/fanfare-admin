// ** React Imports
import React, { ChangeEvent, useState, useCallback, useEffect } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";

// ** ThirdParty Components
import axios from "axios";

// ** Custom Components

import ServerSideToolbar from "src/views/table/data-grid/ServerSideToolbar";

// ** Types Imports
import { DataGridRowType } from "src/@fake-db/types";

// ** Icons Imports

import styled from "@emotion/styled";
import ButtonComponent from "./ButtonComponent";

const StyledDataGrid = styled(DataGrid)(() => ({
    background: "#F3F3F4",
    margin: "20px",

    //border: '2px solid black',
    borderRadius: "0px",

    //Column Table columnHeaders CSS
    "& 	.MuiDataGrid-columnHeaders": {
        //border: '2px solid red',
        borderRadius: "0px",
        background: "rgba(22, 31, 41, 0.07)",
    },

    //Column Table rows
    "& .MuiDataGrid-row": {
        //border: '2px solid blue',
        //height:'300px'
    },

    //Column Table container CSS
    "& .MuiDataGrid-main": {
        //border: '2px solid blue',
        margin: "20px",
        borderRadius: "0px",
    },

    //Column Footer Title CSS
    "& .MuiDataGrid-footerContainer": {
        //border: '2px solid yellow',
        borderRadius: "0px",
    },

    //Column Header Title CSS
    "& .MuiDataGrid-columnHeaderTitle": {
        textTransform: "none",
    },

    //Column Header CSS
    "& .MuiDataGrid-columnHeader": {
        //border: '2px solid red',
        borderRadius: "0px",
    },

    "& .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
        borderRadius: "0px",
    },

    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" },
            borderRadius: "0px",
        },
        borderRadius: "0px",
    },

    "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
        border: "1px solid white",
        borderRadius: "0px",
    },

    // virtualScrollerContent: {
    //   height: '100% !important',
    //   overflow: 'scroll'
    // }
}));

// type Props = {
//   placeholder?: string
//   value?: string
//   onChange?: (value: string) => void
//   style?: React.CSSProperties
// }

type SortType = "asc" | "desc" | undefined | null;

const testRows = [
    {
        id: 0,
        userName: "-",
        fanfareID: "-",
        level: "-",
        publishedVideos: "-",
        action: <ButtonComponent></ButtonComponent>,
    },
    {
        id: 1,
        userName: "-",
        fanfareID: "-",
        level: "-",
        publishedVideos: "-",
        action: <ButtonComponent></ButtonComponent>,
    },
];

const columns: GridColumns = [
    {
        flex: 1,
        field: "userName",
        minWidth: 400,
        headerName: "User Name ",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params;

            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            noWrap
                            variant="body2"
                            sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                            {row.userName}
                        </Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 1,
        field: "fanfareID",
        minWidth: 400,
        headerName: "Fanfare ID",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params;

            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            noWrap
                            variant="body2"
                            sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                            {row.fanfareID}
                        </Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 1,
        field: "level",
        minWidth: 400,
        headerName: "Level",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params;

            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            noWrap
                            variant="body2"
                            sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                            {row.level}
                        </Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 1,
        field: "publishedVideos",
        minWidth: 400,
        headerName: "Published Videos",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params;

            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            noWrap
                            variant="body2"
                            sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                            {row.publishedVideos}
                        </Typography>
                    </Box>
                </Box>
            );
        },
    },
    {
        flex: 1,
        field: "action",
        minWidth: 400,
        headerName: "Action",
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            const { row } = params;

            return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            noWrap
                            variant="body2"
                            sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                            {row.action}
                        </Typography>
                    </Box>
                </Box>
            );
        },
    },
];

const ListComponent3 = () => {
    // ** State
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState<number>(0);
    const [sort] = useState<SortType>("asc");
    const [pageSize, setPageSize] = useState<number>(7);
    const [rows, setRows] = useState<DataGridRowType[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [sortColumn] = useState<string>("full_name");

    /**
     * Handle OnChange event for search input
     *
     * @parms event ChangeEvent<HTMLInputElement>
     *
     * @returns void
     */

    function loadServerRows(currentPage: number, data: DataGridRowType[]) {
        return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
    }

    // const handleSortModel = (newModel: GridSortModel) => {
    //   if (newModel.length) {
    //     setSort(newModel[0].sort)
    //     setSortColumn(newModel[0].field)
    //     fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
    //   } else {
    //     setSort('asc')
    //     setSortColumn('full_name')
    //   }
    // }

    const handleSearch = (value: string) => {
        setSearchValue(value);
        fetchTableData(sort, value, sortColumn);
    };

    const fetchTableData = useCallback(
        async (sort: SortType, q: string, column: string) => {
            await axios
                .get("/api/table/data", {
                    params: {
                        q,
                        sort,
                        column,
                    },
                })
                .then((res) => {
                    setTotal(res.data.total);
                    setRows(loadServerRows(page, res.data.data));
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [page, pageSize]
    );

    useEffect(() => {
        fetchTableData(sort, searchValue, sortColumn);
    }, [fetchTableData, searchValue, sort, sortColumn]);

    return (
        <StyledDataGrid
            autoHeight
            pagination
            rows={testRows}
            disableSelectionOnClick
            disableColumnMenu
            rowCount={total}
            columns={columns}
            pageSize={pageSize}
            sortingMode="server"
            paginationMode="server"
            rowsPerPageOptions={[7, 10, 25, 50]}
            //onSortModelChange={handleSortModel}
            onPageChange={(newPage) => setPage(newPage)}
            components={{ Toolbar: ServerSideToolbar }}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            componentsProps={{
                toolbar: {
                    value: searchValue,
                    clearSearch: () => handleSearch(""),
                    onChange: (event: ChangeEvent<HTMLInputElement>) =>
                        handleSearch(event.target.value),
                },
            }}
        />
    );
};
export default ListComponent3;
