import { getProfileIsLoading, Profile } from 'entities/Profile';
import classes from './ProfileEditForm.module.scss';
import Input from 'shared/ui/Input/Input';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { ProfileEditFormSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { putProfileData } from 'entities/Profile/model/services/putProfileData/putProfileData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

interface ProfileEditFormProps {
	profileData?: Profile;
	onChangeEditMode: (value: boolean) => void;
}
 
const ProfileEditForm = (props : ProfileEditFormProps) => {
    const { profileData, onChangeEditMode } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getProfileIsLoading);

    const onSubmit = (data: Profile) => {
        dispatch(putProfileData(data))
        	.then((result) => {
        		if (putProfileData.fulfilled.match(result)) {
                    onChangeEditMode(true);
        		}
        	});
    };

    const {
        handleSubmit,
        control,
        formState: { isDirty },
    } = useForm<Profile>({
        defaultValues: profileData,
        resolver: yupResolver(ProfileEditFormSchema),
    });

    return ( 
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

            <div className={classes.profileEditFormContainer}>
                <Controller
                    name="firstName"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="First Name"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />

                <Controller
                    name="lastName"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="Last Name"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />

                <Controller
                    name="age"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            type='number'
                            placeholder="Age"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />

                <Controller
                    name="currency"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="currency"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />
                <Controller
                    name="country"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="Country"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />
                <Controller
                    name="city"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="City"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />

                <Controller
                    name="userName"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="User Name"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />

                <Controller
                    name="avatar"
                    control={control}  
                    render={({ field, fieldState }) => (
                        <Input
                            {...field} 
                            placeholder="Avatar"
                            isRequired={true}
                            error={fieldState?.error?.message}
                        />
                    )}
                />
								
            </div>
            <div className={classes.profileEditFormFooterContainer}>
                <Button 
                    type='submit'
                    theme={ThemeButton.CONTAINED}
                    isLoading={isLoading}
                    isDisabled={!isDirty}
                >
                    Submit
                </Button>
                <Button 
                    theme={ThemeButton.OUTLINED}
                    onClick={() => onChangeEditMode(true)}
                >
                    Cancel
                </Button>
            </div>
        </form>
	 );
};
 
export default ProfileEditForm;