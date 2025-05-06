import { sidebarItemsList } from 'widgets/Sidebar/model/items';
import NavigationButton from '../NavigationButton/NavigationButton';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemsListProps {
	collapsed: boolean
}
 
const SidebarItemsList = (props: SidebarItemsListProps) => {
    const { collapsed } = props;
    const isAuth = useSelector(getUserAuthData);

    const filteredSidebarItemsList = sidebarItemsList.filter((item) => {
        if (item.authOnly) {
            return isAuth;
        }
        return true;
    }
    );

    return ( 
        <>
            {filteredSidebarItemsList.map(({ path, text, Icon }) => (
                <NavigationButton
                    key={path}
                    label={text}
                    to={path}
                    isCollapsed={collapsed}
                >
                    <Icon />
                </NavigationButton>
            ))}
        </>

	 );
};
 
export default SidebarItemsList;