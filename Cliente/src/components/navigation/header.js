import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import SideDrawer from "./sideNavigation";

import { showToast } from "../../utils/tools";
import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../../store/reducers/notifications";
// import { signOut } from "../../store/actions/users";
import logoHeader from "../../assets/images/Colombina.svg"
import { setLayout } from "../../store/reducers/site";

const Header = () => {
  const users = useSelector((state) => state.users);
  const notifications = useSelector((state) => state.notifications);
  const site = useSelector((state) => state.site);
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  let location = useLocation();

  useEffect(()=>{
    let pathname = location.pathname.split('/')
    if(pathname[1] === 'dashboard'){
        dispatch(setLayout('dash_layout'))
    } else{ 
        dispatch(setLayout(''))

    }
  },[location.pathname, dispatch])

  useEffect(() => {
    let { global } = notifications;
    if (notifications && global.error) {
      const msg = global.msg ? global.msg : "Error";
      showToast("ERROR", msg);
      dispatch(clearNotifications());
    }
    if (notifications && global.success) {
      const msg = global.msg ? global.msg : "Good!!";
      showToast("SUCCESS", msg);
      dispatch(clearNotifications());
    }
  }, [notifications, dispatch]);

  // const signOutUser = () => {
  //   dispatch(signOut());
  //   navigate("/");
  // };

  return (
    <nav className={`navbar fixed-top ${site.layout}`}>
      <img alt="logo" src={logoHeader} className="navbar-img" style={{ height: '40px' }}></img>
      <div className="Inicio-sesion-container">
      <Link
        to="/auth"
        className="navbar-brand d-flex align-items-center "
      >
        Inicio Sesion
      </Link>
      </div>
    </nav>
  );
};

export default Header;
