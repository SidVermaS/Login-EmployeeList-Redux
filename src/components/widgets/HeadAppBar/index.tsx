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
const HeadAppBar = (props: any) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Employee App</Typography>
          <Button onClick={() => props.logout()} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = () => ({});
export default connect(mapStateToProps, { logout })(HeadAppBar);
