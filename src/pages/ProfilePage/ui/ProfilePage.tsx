import { profileReducer } from 'entities/Profile';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
	id?: string
}
 
const reducers: ReducersList = {
    profile: profileReducer
}; 
const ProfilePage = (props: ProfilePageProps) => {
    const { id } = props;
    return ( 
        <DynamicModuleLoader reducers={reducers}>
            Profile Page {id}
        </DynamicModuleLoader> 
    );
};
 
export default ProfilePage;