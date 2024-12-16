import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LogButton, ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';
import { UserLink } from '../../Components';
import { House, HouseFill, PersonFill } from 'react-bootstrap-icons';

/**
 * A navigation button component that generates a URL based on the user's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.user - The user object containing details about the user.
 * @param {string|number} props.user.id - The unique identifier for the user.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a user and segment
 * const user = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton user={user} segment={segment} label={label} />
 * // Resulting URL: `/ug/user/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton user={{ id: 456 }} segment="settings" label="User Settings" />
 * // Resulting URL: `/ug/user/view/456#settings`
 */
const TitleNavButton = ({ user, segment, label, ...props }) => {
    // const urlbase = (segment) => `/ug/user/${segment}/${user?.id}`;
    const urlbase = (segment) => `/ug/user/view/${user?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};


export const UserPageNavbar = ({ user, onSearchChange }) => {
    const [currentHash, setHash] = useHash(); // Use the custom hook to manage hash

    const segments = [
        { segment: 'granting', label: 'Garance' },
        { segment: 'learning', label: 'Výuka' },
        { segment: 'events', label: 'Rozvrh' },
        { segment: 'roles', label: 'Role' },
        { segment: 'groups', label: 'Skupiny' },
        { segment: 'projects', label: 'Projekty' },
        { segment: 'publications', label: 'Výsledky' },
        { segment: 'requests', label: 'Požadavky' },
    ]
    return (
        <MyNavbar onSearchChange={onSearchChange} >
            {segments.map(({ segment, label }) => (
                <Nav.Item key={segment} >
                    <TitleNavButton
                        user={user}
                        segment={segment}
                        label={label}
                        className={segment===currentHash?"active":""} aria-current={segment===currentHash?"page":undefined}
                    />
                </Nav.Item>
            ))}
      </MyNavbar>
    );
};