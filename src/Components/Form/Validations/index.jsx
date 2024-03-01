import { useFormik } from 'formik';
import * as Yup from 'yup';

const useValidations = ({ onSubmit, validationSchema, initialValues }) => {
    const form = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema),
        onSubmit: onSubmit,
        validateOnChange: false,
    });
    return form
}

export default useValidations