import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EmployeeI } from '../../../interfaces'
import { fetch } from '../../../store/actions/employees.action'
import styles from './index.module.scss'
const Home = (props: any) => {
  const [employees, setEmployees] = useState<Array<EmployeeI>>([])
  useEffect(() => {
    props.fetch()
  }, [])
  useEffect(() => {
    setEmployees(props.employees)
  }, [props.employees])
  const columns: Array<string> = ['ID', 'Name', 'Age', 'Gender', 'Email', 'PhoneNo']

  return <div className={`${styles.background}`}>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={styles.tableCell}>
            {columns.map((item)=><TableCell key={item}>{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((item: EmployeeI) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>  <TableCell>{item.name}</TableCell>  <TableCell>{item.age}</TableCell><TableCell>{item.gender}</TableCell>   <TableCell>{item.email}</TableCell>  <TableCell>{item.phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};

const mapStateToProps = ({ employees }: any) => ({
  employees: employees.employees,
});
export default connect(mapStateToProps, { fetch })(Home);