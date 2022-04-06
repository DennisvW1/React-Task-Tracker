import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; 2022 - DvW</p>
            <Link to="/about">About</Link>
        </footer>
    )
};

export default Footer;