import React from 'react'
import Today from './Today'

const Header = () => {
  return (
    <div>
        <table>
            <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>F</td><td>A</td><td>C</td><td>T</td><td>C</td><td>H</td><td>E</td><td>C</td><td>K</td><td>M</td><td>A</td><td>T</td><td>E</td>
            </tr>
            <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
        </table>
        <hr />
        <Today />
        <hr /><hr />
        <a href="#">Home</a> | <a href="#">Search</a> | <a href="#">Useful Links</a>
        <hr />
    </div>
  )
}

export default Header