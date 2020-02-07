import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import { LuasStopTimesApiResponse, LuasStation } from '../../types';

export interface LuasStopProps {
  station: LuasStation;
  stationInfo?: LuasStopTimesApiResponse;
  fetchLuasStopTimes: Function;
}

interface MappedLuasTime {

}

const useStyles = makeStyles({
  row: {
    '&:last-child td': {
      borderBottom: '0',
    },
  }
})

const LuasStop: React.FunctionComponent<LuasStopProps> = ({
  station,
  stationInfo,
  fetchLuasStopTimes,
}) => {
  useEffect(() => {
    fetchLuasStopTimes(station.shortName);
  }, [fetchLuasStopTimes, station]);

  const classes = useStyles();

  const maxTimeRows: number = stationInfo ? stationInfo.direction.reduce<number>((acc, direction) => {
    if (direction.tram.length > acc) {
      return direction.tram.length;
    };
    return acc;
  }, 0) : 0;

  return (
    stationInfo ? (
      <Card variant="outlined">
        <CardHeader title={`Luas: ${stationInfo.stop}`} />
        <CardContent>
          <Table size="small">
            <TableHead>
              <TableRow>
                {stationInfo.direction.map((direction) => (
                    <TableCell key={direction.name} colSpan={2}>{direction.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from(Array(maxTimeRows)).map((_, i) => (
                <TableRow key={i} className={classes.row}>
                  {stationInfo.direction.map(direction => (
                    <React.Fragment key={`${direction.name}_${i}`}>
                      <TableCell>{direction.tram[i] && direction.tram[i].destination}</TableCell>
                      <TableCell>{direction.tram[i] && direction.tram[i].dueMins}</TableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    ) : null
  )
}

export default LuasStop;