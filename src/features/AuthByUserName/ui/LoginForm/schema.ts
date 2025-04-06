import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
    login: Yup.string().required().email(),
    password: Yup.string().required()
});