import * as Yup from 'yup';

export const AddCommentFormSchema = Yup.object().shape({
    text: Yup.string().required().min(1).max(500),
});
