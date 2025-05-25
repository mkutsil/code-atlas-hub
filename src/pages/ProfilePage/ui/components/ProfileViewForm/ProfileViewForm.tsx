import { Profile } from 'entities/Profile';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import classes from './ProfileViewForm.module.scss';
import Avatar, { AvatarSize } from 'shared/ui/Avatar/Avatar';

interface ProfileViewFormProps {
    profileData?: Profile;
    onChangeEditMode: (value: boolean) => void;
}

const ProfileViewForm = (props: ProfileViewFormProps) => {
    const { profileData, onChangeEditMode } = props;

    return (
        <div className={classes.profileViewContainer}>
            <div className={classes.profileCardWrapper}>
                <div className={classes.profileCardLeftContent}>
                    <Avatar src={profileData?.avatar || ''} alt="Avatar" size={AvatarSize.LARGE} />

                    <div>
                        <span>
                            {profileData?.firstName} {profileData?.lastName}
                        </span>
                    </div>
                </div>

                <Button theme={ThemeButton.CONTAINED} onClick={() => onChangeEditMode(false)}>
                    Edit
                </Button>
            </div>
            <div className={classes.viewInputsContainer}>
                <Input value={profileData?.firstName} placeholder="First Name" isViewMode />
                <Input value={profileData?.lastName} placeholder="Last Name" isViewMode />
                <Input value={profileData?.age.toString()} placeholder="Age" isViewMode />
                <Input value={profileData?.currency} placeholder="Currency" isViewMode />
                <Input value={profileData?.country} placeholder="Country" isViewMode />
                <Input value={profileData?.city} placeholder="City" isViewMode />
                <Input value={profileData?.userName} placeholder="User Name" isViewMode />
            </div>
        </div>
    );
};

export default ProfileViewForm;
