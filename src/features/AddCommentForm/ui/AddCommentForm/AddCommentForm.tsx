import Input from 'shared/ui/Input/Input';
import classes from './AddCommentForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Avatar, { AvatarSize } from 'shared/ui/Avatar/Avatar';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { AddCommentFormSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export const AddCommentForm = () => {
    const dispatch = useAppDispatch();

    const userData = useSelector(getUserAuthData);

    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = (data: { text: string }) => {
        if(isLoading) return; 

        setIsLoading(true); 
        dispatch(addCommentForArticle(data.text))
        		 .then((result) => {
        				 if (addCommentForArticle.fulfilled.match(result)) {
        						 reset();
                    setIsLoading(false);  
        				 }
            });

			 };
	
    const {
        handleSubmit,
        control,
        reset,
        formState: { isDirty },
    } = useForm<{text: string;}>({
        defaultValues: { text: '' },
        resolver: yupResolver(AddCommentFormSchema),
    });
			
    return ( 
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.addCommentFormContainer}>
                <Avatar 
                    size={AvatarSize.SMALL} 
                    src={ userData?.avatar || '' } 
                    alt={userData?.userName || ''}
                />
								
                <Controller
                    name="text"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="Enter your comment"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />

                <Button
                    theme={ThemeButton.CONTAINED}
                    type='submit'
                    disabled={false}
                    className={classes.sendButton}
                    isDisabled={!isDirty}
                    isLoading={isLoading}
                >
                    Sent
                </Button>
            </div>
        </form>
		 );};
 