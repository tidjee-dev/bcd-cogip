import SectionFoot from './SectionFoot'
import '../../../styles/styles.scss'

export default function Section() {
  return (
    <>
        <div className='containerSection'>
            <div className="invoices tables">
                <h2>Last invoices</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Invoice number</th>
                            <th>Date due</th>
                            <th>Company</th>
                            <th>Created at </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>12/12/2021</td>
                            <td>Company 1</td>
                            <td>12/12/2021</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>12/12/2021</td>
                            <td>Company 2</td>
                            <td>12/12/2021</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>12/12/2021</td>
                            <td>Company 3</td>
                            <td>12/12/2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="contact tables">
                <h2>Last contacts</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>5555-7777</td>
                            <td>JohnDoe@gmail.com</td>
                            <td>Company 1</td>
                            <td>12/12/2021</td>
                        </tr>
                        <tr>
                            <td>Jane Doe</td>
                            <td>5555-7777</td>
                            <td>John-doe@gmail.com</td>
                            <td>Company 2</td>
                            <td>12/12/2021</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>5555-7777</td>
                            <td>JohnDoe@gmail.com</td>
                            <td>Company 3</td>
                            <td>12/12/2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="compagnies tables">
                <h2>Last companies</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>VAT number</th>
                            <th>Country</th>
                            <th>Type</th>
                            <th>Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Company 1</td>
                            <td>5555-7777</td>
                            <td>Belgium</td>
                            <td>Client</td>
                            <td>12/12/2021</td>
                        </tr>
                        <tr>
                            <td>Company 2</td>
                            <td>5555-7777</td>
                            <td>Belgium</td>
                            <td>Client</td>
                            <td>12/12/2021</td>
                        </tr>
                        <tr>
                            <td>Company 3</td>
                            <td>5555-7777</td>
                            <td>Belgium</td>
                            <td>Client</td>
                            <td>12/12/2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <SectionFoot />
    </>
  )
}
