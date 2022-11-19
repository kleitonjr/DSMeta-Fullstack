import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificacionBtn from '../NotificationBtn'
import './style.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-salesTitle">Vendas</h2>
            <div >
                <div className="dsmeta-formControlContainer">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-formControlContainer">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-salesTable">
                    <thead>
                        <tr>
                            <th className="dsmeta-show992">ID</th>
                            <th className="dsmeta-show576">Data</th>
                            <th>Vendedor</th>
                            <th className="dsmeta-show992">Visitas</th>
                            <th className="dsmeta-show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dsmeta-show992">#123</td>
                            <td className="dsmeta-show576">16/11/2022</td>
                            <td>Anakin</td>
                            <td className="dsmeta-show992">10</td>
                            <td className="dsmeta-show992">20</td>
                            <td>R$ 10.123,00</td>
                            <td>
                                <div className="dsmeta-redBtnContainer">
                                    <NotificacionBtn />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show992">#231</td>
                            <td className="dsmeta-show576">16/11/2022</td>
                            <td>Boba Fat</td>
                            <td className="dsmeta-show992">10</td>
                            <td className="dsmeta-show992">20</td>
                            <td>R$ 10.123,00</td>
                            <td>
                                <div className="dsmeta-redBtnContainer">
                                    <NotificacionBtn />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-show992">#321</td>
                            <td className="dsmeta-show576">16/11/2022</td>
                            <td>Obiwan</td>
                            <td className="dsmeta-show992">10</td>
                            <td className="dsmeta-show992">20</td>
                            <td>R$ 10.123,00</td>
                            <td>
                                <div className="dsmeta-redBtnContainer">
                                    <NotificacionBtn />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard

