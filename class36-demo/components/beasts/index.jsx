import { Grid } from '@mui/material';
import Beast from '../beast';
import { useSelector } from 'react-redux'
// map through data and pass individual products to Beast component
const Beasts = () => {
  return (
    const numOfHorns = useSelector((state) => state.beast.numOfHorns),
    const beastData = useSelector((state) => state.beast.beastData)
    <Grid container spacing ={2}>
      {beastData
      .filter(b => b.horns === numOfHorns || numOfHorns === 'all')
      .map((beast) => {
        <Beast key={beast.title} beast={beast}/>
      })}
    </Grid>
  )
}

export default Beasts;