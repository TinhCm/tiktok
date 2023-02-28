// Layout
import DefaultLayout from '../components/Layout/HeaderOnly';
import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Home';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
