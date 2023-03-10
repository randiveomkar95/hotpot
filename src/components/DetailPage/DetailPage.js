import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Banner from '../Banner/Banner'
import CardRows from '../CardRows/CardRows'
import axios from 'axios'
import DirectorCasts from '../DirectorCasts/DirectorCasts'
import Trailer from '../Trailer/Trailer'
import { Questions } from '../Questions/Questions'
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const DetailPage = (props) => {
  const {id, category} = useParams();
  useEffect(() => { getData() }, [id])
  const [data, setData] = useState({})
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
    const a = await axios.get(url)
    setData(a.data)
  }

  let baseImgUrl = 'http://localhost:3000/'
//   let baseImgUrl = 'https://image.tmdb.org/t/p/original'
  console.log("data is not coming",data);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div key={props.pageId}>
      <Banner original_title={data.original_title} id={id}  img={`${baseImgUrl}${'banner1.jpg'}`} title={data.original_title || data.name} description={data.overview}></Banner>
      {/* <DirectorCasts row_title="Directors & Casts"></DirectorCasts>
      <Trailer row_title="Trailers & Other"></Trailer>
      <div style={{display:'flex', flexDirection: 'row'}}>
        <Questions row_title="Questions & Answers"></Questions>
        <LeaderBoard row_title="Leader Board"> </LeaderBoard>
      </div> */}
      <Container>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  variant="scrollable"
            scrollButtons="auto">
          <Tab label="Questions & Answers" {...a11yProps(0)} />
          <Tab label="Leader Board" {...a11yProps(1)} />
          <Tab label="Directors & Casts" {...a11yProps(2)} />
          <Tab label="Trailers & Other" {...a11yProps(2)} />

        </Tabs>
      <TabPanel value={value} index={0}>
      <Questions row_title="Questions & Answers"></Questions>
            </TabPanel>
      <TabPanel value={value} index={1}>
      <LeaderBoard row_title="Leader Board"> </LeaderBoard>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <DirectorCasts row_title="Directors & Casts"></DirectorCasts>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Trailer row_title="Trailers & Other"></Trailer>
      </TabPanel>
</Container>
    </div>
    </>
  )
}

export default DetailPage

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
