import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Menu as MenuIcon } from "@material-ui/icons";
import { logout } from "../../../store/actions/user.action";
import styles from './index.module.scss'

const HeadAppBar = (props: any) => {
  return (
    <div className={styles.background}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Employee App</Typography>
          <div className={styles.userLogOutButton}>
            <Button onClick={() => props.logout(true)} color="inherit">
            Logout
          </Button>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, { logout })(HeadAppBar);
