import React from 'react';
import { TextEncoder, TextDecoder } from 'util';

const jestEmptyComponent = () => <div/>;

Object.assign(global, { TextDecoder, TextEncoder });

export default jestEmptyComponent;