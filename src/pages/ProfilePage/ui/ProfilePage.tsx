import { 
    fetchProfileData, 
    getProfileError, 
    getProfileIsLoading,
    getProfileReadonly,
    profileReducer 
} from 'entities/Profile';
import { getProfileData } from 'entities/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';

interface ProfilePageProps {
	id?: string
}
 
const reducers: ReducersList = {
    profile: profileReducer
}; 
const ProfilePage = (props: ProfilePageProps) => {
    const { id } = props;

    const profileData =useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();
    
    useEffect(() => {   
        dispatch(fetchProfileData());
    }, [ dispatch ]);

    return ( 
        <DynamicModuleLoader reducers={reducers}>
           
            <div key={id}>
                <h1>Profile Page</h1>
               
                {isLoading ? <Loader/> : (
                    <>
                        {readonly ? (
                            <div>
                                <p>{profileData?.firstName}</p>
                                <p>{profileData?.lastName}</p>
                                <p>{profileData?.age}</p>
                                <p>{profileData?.currency}</p>
                                <p>{profileData?.country}</p>
                                <p>{profileData?.city}</p>
                                <p>{profileData?.userName}</p>
                                <p>{profileData?.avatar}</p>
                            </div>
                        ) : (
                            <div style={{ margin: '50px auto', display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                                <Input value={profileData?.firstName} placeholder="First Name" />
                                <Input value={profileData?.lastName} placeholder="Last Name" />
                                <Input value={profileData?.age.toString()} placeholder="Age" />
                                <Input value={profileData?.currency} placeholder="Currency" />
                                <Input value={profileData?.country} placeholder="Country" />
                                <Input value={profileData?.city} placeholder="City" />
                                <Input value={profileData?.userName} placeholder="User Name" />
                            </div>
                        )}
                    </>
                    
                )}
            </div>
        </DynamicModuleLoader> 
    );
};
 
export default ProfilePage;