import { Country, Currency } from 'shared/const/common';
import * as Yup from 'yup';

export const ProfileEditFormSchema = Yup.object().shape({
    firstName: Yup.string().max(32).min(2).required(),
    lastName: Yup.string().max(32).min(2).required(),
    age: Yup.number().required(),

    currency: Yup.mixed<Currency>().oneOf(Object.values(Currency), 'Invalid currency').required(),

    country: Yup.mixed<Country>().oneOf(Object.values(Country), 'Invalid country').required(),

    city: Yup.string().required(),
    userName: Yup.string().max(12).min(2).required(),
    avatar: Yup.string().url().required(),
});
