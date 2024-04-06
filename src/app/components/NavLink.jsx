import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-zinc-400 sm:text-xl rounded md:p-0"
        >
            {title}
        </Link>
    );
};

export default NavLink;