import { ReactElement } from 'react';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => ReactElement) => story();
