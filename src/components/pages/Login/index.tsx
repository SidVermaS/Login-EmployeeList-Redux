import { connect } from "react-redux";
import { Card, CardContent } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextFieldPrimary, ButtonPrimary } from "../../widgets";
import { login } from "../../../store/actions/user.action";
import {
USER_LOGGED_OUT, USER_LOGGED_IN } from "../../../store/constants";
import styles from "./index.module.scss";

const Login = (props: any) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .max(32, "At most 32 characters")
      .required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (values: any) => {
    props.login(values.email, values.password);
  };
  return (
    <div className={`${styles.background} d-flex justify-content-center`}>
      <div className={`${styles.card} mt-3`}>
        <Card>
          <CardContent>
            <h3>Sign in</h3>
            <p> (email: eve.holt@reqres.in, password: cityslicka)</p>
            <form>
              <div className={styles.textFieldPrimaryParent}>
                <TextFieldPrimary
                  name="email"
                  error={formik.errors.email}
                  type="email"
                  label="Email"
                  placeholder="Enter email..."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className={`${styles.textFieldPrimaryParent} mt-4 mb-5`}>
                <TextFieldPrimary
                  name="password"
                  error={formik.errors.password}
                  type="password"
                  label="Password"
                  placeholder="Enter password..."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <p className={`${props.type !==USER_LOGGED_IN && styles.errorText}`}>
                {props.type !== USER_LOGGED_OUT  && props.message}
              </p>
              <div>
                <ButtonPrimary title="LOGIN" onClick={formik.handleSubmit} />
              </div>
            </form>
            <p className={`${styles.newAccountSignUpText} mt-4`}>
              New Account? Sign up
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: any) => ({
  type: user.type,
  message: user.message
});
export default connect(mapStateToProps, { login })(Login);
