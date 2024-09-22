"use client";
import {Alert,Box,Button,MenuItem,Snackbar,Stack,TextField,} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Header from "@/app/_components/Header";

const data = [
  { value: "Admin", label: "Admin", },
  { value: "Manger", label: "Manger", },
  { value: "User", label: "User", },
];

const regEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const ProfileForm = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        width: "100%",
        gap: 4,
        display: "flex",
        flexDirection: "column",
      }}
      // noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} />
      <Stack direction={"row"} gap={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) && errors.firstName?.message.toString()
          }
          {...register("firstName", {
            required: { value: true, message: "Required filed" },
            minLength: { value: 3, message: "min 3 character" },
          })}
          sx={{ width: "49%" }}
          label="First Name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName) && errors.lastName?.message.toString()
          }
          {...register("lastName", {
            required: { value: true, message: "Required filed" },
            minLength: { value: 3, message: "min 3 character" },
          })}
          sx={{ width: "49%" }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        type="email"
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) && errors.email?.message.toString()}
        {...register("email", {
          required: { value: true, message: "Required filed" },
          pattern: {
            value: regEmail,
            message: "Please provide a valid email address",
          },
        })}
      />

      <TextField
        label="Contact Number"
        variant="filled"
        type="number"
        error={Boolean(errors.number)}
        helperText={Boolean(errors.number) && errors.number?.message.toString()}
        {...register("number", {
          required: { value: true, message: "Required filed" },
          pattern: {
            value: phoneRegExp,
            message: "Please provide a valid Phone number",
          },
        })}
      />

      <TextField label="Address 1" variant="filled" {...register("adress1")} />

      <TextField label="Address 2" variant="filled" {...register("adress2")} />

      <TextField
        select
        label="Role"
        defaultValue="Admin"
        // helperText="Please select your currency"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button
        type="submit"
        sx={{ display: "block", ml: "auto" }}
        variant="contained"
      >
        Create New User
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Account created successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileForm;
