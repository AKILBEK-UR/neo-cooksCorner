import * as yup from "yup";

const passwordRules = /^[A-Za-z]+$/;
// min 5 char, 1 uppercase letter, 1 lowercase letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
    name: yup.string().required("Must be filled.")
    .test(
        "string",
        "Only latin letters.",
        value => passwordRules.test(value)
    ),
    email: yup.string().email("Please enter a valid email address.").required("Must be filled."),
    password: yup
    .string().required("Must be filled.")
    .min(5,"Password must be at least 8 characters.")
    .test(
        "uppercase",
        "Password must contain at least one capital letter.",
        value => /[A-Z]/.test(value)
    )
    .test(
        "lowercase",
        "Password must contain at least one lowercase letter.",
        value => /[a-z]/.test(value)
    )
    .test(
        "number",
        "Password must contain at least one number.",
        value => /\d/.test(value)
    ),
    rePassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match.").required("Must be filled."),
})