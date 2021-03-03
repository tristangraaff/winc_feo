import React from "react";
import { Link } from "react-router-dom";

function SelectStudents(props) {

    const selectStudent = [{name: "Average ratings"}];
    const students = props.students.map(student => {
        return {name: student};
    });
    const dropdownList = selectStudent.concat(students);
    console.log(dropdownList);
    
    return (
     <div className="select-student">
        <form>
            <label>
                Select student:
            </label>
            <select onChange={e => props.handleStudentChange(e.target.value)}>
                {dropdownList.map(student => <option name={student.name}>{student.name}</option> )}
                {/* <Link to="/">Average ratings</Link>
                <Link to="/Evelyn">Evelyn</Link> */}
            </select>
        </form>
            <Link to="/" onClick={e => props.handleStudentChange("Evelyn")}>Average ratings</Link>
            <Link to="/Evelyn" onClick={e => props.handleStudentChange("Evelyn")}>Evelyn</Link>
            <Link to="/Aranka" onClick={e => props.handleStudentChange("Aranka")}>Aranka</Link>
            <Link to="/Floris" onClick={e => props.handleStudentChange("Floris")}>Floris</Link>
            <Link to="/Hector" onClick={e => props.handleStudentChange("Hector")}>Hector</Link>
            <Link to="/Martina" onClick={e => props.handleStudentChange("Martina")}>Martina</Link>
            <Link to="/Maurits" onClick={e => props.handleStudentChange("Maurits")}>Maurtis</Link>
            <Link to="/Rahima" onClick={e => props.handleStudentChange("Rahima")}>Rahima</Link>
            <Link to="/Sandra" onClick={e => props.handleStudentChange("Sandra")}>Sandra</Link>
            <Link to="/Wietske" onClick={e => props.handleStudentChange("Wietske")}>Wietske</Link>
            <Link to="/Storm" onClick={e => props.handleStudentChange("Storm")}>Storm</Link>
     </div>  
    )
};

export default SelectStudents

