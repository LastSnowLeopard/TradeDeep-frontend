import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    InputLabel,
    FormControl,
    OutlinedInput,
    Switch,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    RadioGroup,
    Radio
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import TableBody from "@material-ui/core/TableBody";
import { FaEdit, FaTrash } from "react-icons/fa";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const data2 = [
    {
        fullName: "John Doe",
        email: "Us@gmail.com",
        dateRegistered: "2023.02.05",
        lastLogin: "2023.02.05 11:43:32",
        accountStatus: "Active",
        walletBalance: 100,
        usedStorage: "500MB/2GB",
        modelsTrained: 5,
        openedRealAccount: "false",
        accountType: "Free",
        affiliateStatus: "No",
    },
    {
        fullName: "Alex Ding",
        email: "Us@gmail.com",
        dateRegistered: "2023.02.05",
        lastLogin: "2023.02.05 11:43:32",
        accountStatus: "Suspended",
        walletBalance: 200,
        usedStorage: "700MB/2GB",
        modelsTrained: 15,
        openedRealAccount: "true",
        accountType: "Premium",
        affiliateStatus: "Yes",
    }
];

const TableData = () => {
    const classes = useStyles();
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);

    const [editData, setEditData] = useState({
        fullName: "",
        email: "",
        accountStatus: "",
        openedRealAccount: "",
        accountType: "",
        affiliateStatus: ""
    });

    // ...

    const handleEditOpen = (row) => {
        setSelectedRow(row);
        setEditData(row);
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
        setSelectedRow(null);
        setEditData({
            email: "",
            country: "",
            payment: "",
            training: ""
        });
    };

    const handleEditSubmit = () => {
        // Update data2 with the edited data
        const updatedData = data2.map((row) =>
            row.email === selectedRow.email ? editData : row
        );
        setData(updatedData);

        handleEditClose();
    };

    const handleDeleteOpen = (row) => {
        setSelectedRow(row);
        setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
        setSelectedRow(null);
    };

    const handleDeleteSubmit = () => {
        // Remove the selected row from data2
        const updatedData = data2.filter((row) => row.email !== selectedRow.email);
        setData(updatedData);

        handleDeleteClose();
    };

    return (
        <>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="right">Date Registered:</TableCell>
                        <TableCell align="right">Last Login</TableCell>
                        <TableCell align="right">Account Status</TableCell>
                        <TableCell align="right">Wallet Balance</TableCell>
                        <TableCell align="right">Used Storage</TableCell>
                        <TableCell align="right">Models Trained</TableCell>
                        <TableCell align="right">Opened Real Account</TableCell>
                        <TableCell align="right">Account Type</TableCell>
                        <TableCell align="right">Affiliate Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data2.map((row) => (
                        <TableRow key={row.email}>
                            <TableCell align="right">{row.fullName}</TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <Box
                                        width={40}
                                        height={40}
                                        borderRadius="50%"
                                        marginRight={2}
                                        bgcolor="grey.300"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography variant="body1" color="primary">
                                            {row.email.charAt(0).toUpperCase()}
                                        </Typography>
                                    </Box>
                                    <Typography>{row.email}</Typography>
                                </Box>
                            </TableCell>
                            <TableCell align="right">{row.dateRegistered}</TableCell>
                            <TableCell align="right">{row.lastLogin}</TableCell>
                            <TableCell align="right">{row.accountStatus}</TableCell>
                            <TableCell align="right">{row.walletBalance}</TableCell>
                            <TableCell align="right">{row.usedStorage}</TableCell>
                            <TableCell align="right">{row.modelsTrained}</TableCell>
                            <TableCell align="right">
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={row.openedRealAccount}
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel className="justify-end" value="false" control={<Radio color="default" />} label="Yes" />
                                    <FormControlLabel className="justify-end" value="true" control={<Radio color="default" />} label="No" />
                                </RadioGroup>
                            </TableCell>
                            <TableCell align="right">{row.accountType}</TableCell>
                            <TableCell align="right">{row.affiliateStatus}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => handleEditOpen(row)}>
                                    <FaEdit />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteOpen(row)}>
                                    <FaTrash />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit User Data</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit the user data below and click Save to save the changes.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={editData.email}
                        onChange={(e) =>
                            setEditData({ ...editData, email: e.target.value })
                        }
                    />
                    {/* <TextField
                        margin="dense"
                        label="Country"
                        type="text"
                        fullWidth
                        value={editData.country}
                        onChange={(e) =>
                            setEditData({ ...editData, country: e.target.value })
                        }
                    /> */}
{/* 
                    <TextField
                        margin="dense"
                        label="Payment Method"
                        type="text"
                        fullWidth
                        value={editData.payment}
                        onChange={(e) =>
                            setEditData({ ...editData, payment: e.target.value })
                        }
                    /> */}
                    <FormControlLabel
                        control={
                            <Switch
                                checked={editData.training === "yes" ? true : false}
                                onChange={(e) =>
                                    setEditData({
                                        ...editData,
                                        training: e.target.checked ? "yes" : "no"
                                    })
                                }
                            />
                        }
                        label="Training"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleEditSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={deleteOpen}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete User Data?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this user's data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteSubmit} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TableData;

