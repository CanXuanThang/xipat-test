import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import BoxContainer from "../../common/BoxContainer";
import { Controller, useForm } from "react-hook-form";
import InputBase from "../../common/InputBase";
import { SketchPicker } from "react-color";
import DatePickerBase from "../../common/DatePickerBase";
import { useState } from "react";

type FormData = {
  title: string;
  email: string;
  bg_color: string;
  active_date: string;
};

function Setting() {
  const [openColor, setOpenColor] = useState(false);

  const { control, handleSubmit, setValue, watch, reset } = useForm<FormData>();

  const onSubmit = (value: FormData) => {
    console.log(value);
    reset();
  };

  const isDisableButton =
    watch("active_date") ||
    watch("bg_color") ||
    watch("email") ||
    watch("title");

  return (
    <BoxContainer
      sx={{ width: "100%", height: "100%" }}
      leftHeader={<Typography color="#115BB2">Settings</Typography>}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        onMouseDown={() => setOpenColor(false)}
      >
        <Grid container spacing={2}>
          <Grid item container md={12} xs={12} spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <InputBase
                name="title"
                control={control}
                title="Title"
                rules={{
                  required: "Title is required",
                  validate: {
                    value: (value) => !!value || "Title is required",
                  },
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <InputBase
                name="email"
                control={control}
                title="Email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                  validate: {
                    value: (value) => !!value || "Email is required",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid item container md={12} xs={12} spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <Stack gap={1}>
                <InputBase
                  name="bg_color"
                  control={control}
                  title="Background Color"
                  rules={{
                    required: "Background color is required",
                    validate: {
                      value: (value) =>
                        !!value || "Background color is required",
                    },
                  }}
                  colorBox={true}
                  handleOpenColor={() => setOpenColor(true)}
                />

                {openColor && (
                  <Box display="flex" justifyContent="end">
                    <Box onMouseDown={(e) => e.stopPropagation()}>
                      <SketchPicker
                        color={watch("bg_color")}
                        onChange={({ hex }: { hex: string }) =>
                          setValue("bg_color", hex)
                        }
                      />
                    </Box>
                  </Box>
                )}
              </Stack>
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Box width="100%">
                <Typography variant="subtitle1" color="#115BB2">
                  Active date:
                </Typography>

                <Controller
                  control={control}
                  name="active_date"
                  rules={{
                    required: "Active date is required",
                    validate: {
                      value: (value) => !!value || "Active date is required",
                    },
                  }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => {
                    let selectedDate = value;
                    return (
                      <DatePickerBase
                        error={!!error}
                        selectedDate={selectedDate as any}
                        onChange={onChange}
                        onBlur={onBlur}
                        helperText={error?.message || ""}
                      />
                    );
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Stack width="100%" alignItems="end" mt={2}>
          <Button
            type="submit"
            variant="contained"
            sx={{ p: "8px 12px", width: "90px" }}
            disabled={!isDisableButton}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </BoxContainer>
  );
}

export default Setting;
