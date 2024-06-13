import classes from "./Logo.module.css"
import logo from "../../../public/logo.png"

const Logo = () => {
    return (
        <div className={classes.container}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
    )
}

export default Logo;