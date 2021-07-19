import React, {useEffect , useState} from 'react'
// import StatusCard from 'components/StatusCard';
// import TableCard from 'components/TableCard';
import axios from 'axios'


function Table() {
    const [dt, setData] = useState();
    // const d = data.map((_, index) => (
    //                   <td key={index}>Table heading</td>
    //                    ))
    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    //toddos
    // const States = 
    if (dt !== undefined) {

        var arr = Object.entries(dt).map((k, index) => {
            return <tr>
                <td className="px-2 align-middle border border-solid border-gray-500 py-3 text-sm whitespace-nowrap text-left">{k[0]}</td>
                <td className="px-2 text-teal-500 align-middle border border-solid border-gray-500 py-3 text-sm whitespace-nowrap  text-left">{k[1].total.recovered}</td>
                <td className="px-2 text-teal-500 align-middle border border-solid border-gray-500 py-3 text-sm whitespace-nowrap  text-left">{k[1].total.confirmed - (k[1].total.deceased + k[1].total.recovered)}</td>
                <td className="px-2 text-teal-500 align-middle border border-solid border-gray-500 py-3 text-sm whitespace-nowrap  text-left">{k[1].total.deceased}</td>
                <td className="px-2 text-teal-500 align-middle border border-solid border-gray-500 py-3 text-sm whitespace-nowrap  text-left">{k[1].total.confirmed}</td>
            </tr>
        })
    }
    return (
        <>
            <div className="overflow-x-auto px-2 py-5">
                <table className="items-center w-full bg-transparent ">
                    <thead>
                        <tr>
                            <th className="px-2 text-teal-500 align-middle border border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-left">
                                State/UT
                            </th>
                            <th className="px-2 text-teal-500 align-middle border border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-left">
                                Recovered
                            </th>
                            <th className="px-2 text-teal-500 align-middle border border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-left">
                                Active
                            </th>
                            <th className="px-2 text-teal-500 align-middle border border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-left">
                                Deceased
                            </th>
                            <th className="px-2 text-teal-500 align-middle border border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-left">
                                Confirmed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
            </div>
            </>
    )
}

export default Table
