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
import Loader from 'shared/ui/Loader/Loader';
import ProfileEditForm from './components/ProfileEditForm/ProfileEditForm';
import ProfileViewForm from './components/ProfileViewForm/ProfileViewForm';

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
                {isLoading ? <Loader/> : (
                    <>
                        {readonly ? (
                            <ProfileViewForm
                                profileData={profileData}
                                onChangeEditMode={onChangeEditMode}
                            />
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