import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const MyBox = styled(Box)({
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderRadius: '1%',
    margin: '1%',
    padding: '2%',
});

const MyListItem = styled(ListItem)({
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '400',
    marginTop: '0%',
    marginLeft: '6%',
    paddingTop: '0%',
    paddingLeft: '4%',
    marginBottom: '1%',
    paddingBottom: '0%',
});

const MyType = styled(Typography)({
    fontSize: 'x-large',
    marginLeft: "2%",
    marginTop: "2%",
    marginRight: "2%",
    marginBottom: "1%",
    paddingLeft: "2%",
    paddingTop: "2%",
    paddingRight: "2%",
    paddingBottom: "0%",
    color: 'cornflowerblue',

});

const MySmallType = styled(Typography)({
    fontSize: 'medium',
    marginLeft: "6%",
    marginTop: "0%",
    marginRight: "2%",
    marginBottom: "3%",
    paddingLeft: "4%",
    paddingTop: "0%",
    paddingRight: "2%",
    paddingBottom: "2%",
    color: 'black',

});

export {MyBox, MyListItem, MyType, MySmallType};