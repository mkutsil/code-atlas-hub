import { useState, useEffect } from 'react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
 
// * Test component
const BugButton = () => {
    const [ isError, setIsError ] = useState(false);

    const onThrow = () => setIsError(true);

    useEffect(() => {
        if(isError) throw new Error();
    }, [ isError ]);

    return ( 
        <Button onClick={onThrow} theme={ThemeButton.CONTAINED}>Throw Error</Button>
	 );
};
 
export default BugButton;