import React from 'react';
import { AppContext } from 'types/AppContext.types';

const AppContext = React.createContext<AppContext | null>(null);

export default AppContext;
