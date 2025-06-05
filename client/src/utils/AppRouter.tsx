import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from './constants';
import { RootState } from '../redux/store';

const AppRouter = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) => (
                <Route 
                    key={path}
                    path={path}
                    element={<Component />} //
                />
            ))}
            
            {publicRoutes.map(({ path, Component }) => (
                <Route 
                    key={path}
                    path={path}
                    element={<Component />}
                />
            ))}
            
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
};

export default AppRouter;