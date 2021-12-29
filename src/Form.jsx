import { Button, Paper, Typography, makeStyles } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputDate } from "./form-components/FormInputDate";
import { FormInputSlider } from "./form-components/FormInputSlider";
import { FormInputRadio } from "./form-components/FormInputRadio";

const defaultValues = {
    textValue: "",
    radioValue: "",
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue: "",
    sliderValue: 0,
};


export const Form = () => {
    const methods = useForm({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue } = methods;
    const onSubmit = (data) => console.log(data);

    const classes = useStyles()

    return (
        <Paper elevation={5} className={classes.main}>
            <div>
                <Typography variant="h2"> Form Demo </Typography>
            </div>
            <div>
                <FormInputText name="textValue" control={control} label="Text Input" />
            </div>
            <div>
                <FormInputRadio name={"radioValue"} control={control} label={"Radio Input"} />
            </div>
            <div>
                <FormInputDropdown name="dropdownValue" control={control} label="Dropdown Input" />
            </div>
            <div>
                <FormInputDate name="dateValue" control={control} label="Date Input" />
            </div>
            <div>
                <FormInputMultiCheckbox
                    control={control}
                    setValue={setValue}
                    name={"checkboxValue"}
                    label={"Checkbox Input"}
                />
            </div>
            <div>
                <FormInputSlider
                    name={"sliderValue"}
                    control={control}
                    setValue={setValue}
                    label={"Slider Input"}
                />
            </div>
            <div>
                <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                    Submit
                </Button>

            </div>

            <Button onClick={() => reset()} variant={"outlined"}>
                Reset
            </Button>
        </Paper>
    );
};


const useStyles = makeStyles({
    main: {
        margin: ' 5rem 10rem',
        padding: '2rem'
    }
})


