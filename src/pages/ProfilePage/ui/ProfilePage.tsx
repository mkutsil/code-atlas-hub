import { 
    fetchProfileFullData, 
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer 
} from 'entities/Profile';
import { getProfileData } from 'entities/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import classes from './ProfilePage.module.scss';
import Avatar, { AvatarSize } from 'shared/ui/Avatar/Avatar';
import ProfileEditForm from './components/ProfileEditForm/ProfileEditForm';

interface ProfilePageProps {
	id?: string
}
 
const reducers: ReducersList = {
    profile: profileReducer
}; 
const ProfilePage = (props: ProfilePageProps) => {
    const { id } = props;

    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();
    
    const onChangeEditMode = (value: boolean) => {
        dispatch(profileActions.setReadonly(value));
    };

    useEffect(() => {   
        dispatch(fetchProfileFullData());
    }, [ dispatch ]);

    return ( 
        <DynamicModuleLoader reducers={reducers}>
            <div key={id}>
                <h1>Profile Page</h1>

                {readonly && (
                    <Button 
                        theme={ThemeButton.CONTAINED} 
                        onClick={() => onChangeEditMode(!readonly)}
                    >
                        Edit
                    </Button>
                )}
               
                {isLoading ? <Loader/> : (
                    <>
                        {readonly ? (
                            <div className={classes.profileViewContainer}>
                                <div className={classes.profileCardWrapper}>

                                    <Avatar 
                                        src={profileData?.avatar || ''}
                                        alt="Avatar"
                                        size={AvatarSize.LARGE}
                                    />

                                    <div>
                                        <span>
                                            {profileData?.firstName} {profileData?.lastName}
                                        </span>
                                        
                                    </div>
                                </div>
                                <div className={classes.viewInputsContainer}>
                                    <Input 
                                        value={profileData?.firstName} 
                                        placeholder="First Name" 
                                        isViewMode 
                                    />
                                    <Input 
                                        value={profileData?.lastName} 
                                        placeholder="Last Name" 
                                        isViewMode 
                                    />
                                    <Input 
                                        value={profileData?.age.toString()} 
                                        placeholder="Age" 
                                        isViewMode 
                                    />
                                    <Input 
                                        value={profileData?.currency} 
                                        placeholder="Currency" 
                                        isViewMode
                                    />
                                    <Input 
                                        value={profileData?.country} 
                                        placeholder="Country" 
                                        isViewMode
                                    />
                                    <Input 
                                        value={profileData?.city}
                                        placeholder="City" 
                                        isViewMode 
                                    />
                                    <Input 
                                        value={profileData?.userName} 
                                        placeholder="User Name" 
                                        isViewMode 
                                    />
                                </div>
                            </div>
                        ) : (
                            <ProfileEditForm 
                                profileData={profileData}
                                onChangeEditMode={onChangeEditMode}
                            />
                        )}
                    </>
                )}
            </div>
        </DynamicModuleLoader> 
    );
};
 
export default ProfilePage;