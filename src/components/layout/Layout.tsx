import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
