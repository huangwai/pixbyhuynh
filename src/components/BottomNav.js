
// export default function BottomNav() {
//     const [value, setValue] = React.useState("");
//     const history = useHistory();

//     const handleChange = (event, newValue) => {
//       history.push(`/${newValue}`);
//       setValue(newValue);
//     };

//     return (
//       <BottomNavigation
//         value={value} 
//         onChange={handleChange} 
//         showLabels
//       >
//         <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
//         <BottomNavigationAction label="Progress" value="progress" icon={<TimelineIcon />} />
//         <BottomNavigationAction label="Vote" value="overview" icon={<ThumbsUpDownIcon />} />
//         <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon />} />
//       </BottomNavigation>
//     );
//   }