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
import { useParams } from 'react-router-dom';
import Page from 'widgets/Page/Page';
 
const reducers: ReducersList = {
    profile: profileReducer
}; 

const ProfilePage = () => {

    const { id } = useParams<{ id: string }>();
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();
    
    const onChangeEditMode = (value: boolean) => {
        dispatch(profileActions.setReadonly(value));
    };

    useEffect(() => {   
        if(id){
            dispatch(fetchProfileFullData(id));
        }
        
    }, [ dispatch, id ]);

    return ( 
        <DynamicModuleLoader reducers={reducers}>
            <Page>
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
            </Page>
        </DynamicModuleLoader> 
    );
};
 
export default ProfilePage;