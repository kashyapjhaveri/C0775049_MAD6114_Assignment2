import React from 'react'

const FormData = props => {
    return(
        <table>
            <tr>
                <td>Username:</td>
                <td>{props.username}</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                    {props.password}
                </td>
            </tr>
            <tr>
                <td>Remember Me:</td>
                <td>{props.rememberMe}</td>
            </tr>
            <tr>
                <td></td>
                <td><button onClick={props.onFormReset}>Reset</button></td>
            </tr>
        </table>
    )
}

export default FormData