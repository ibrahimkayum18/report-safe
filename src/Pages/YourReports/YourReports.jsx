import { useLoaderData } from "react-router-dom";


const YourReports = () => {
    const reports = useLoaderData();
    console.log(reports);
    return (
        <div>
            <h2>Your Reports: {reports.length} </h2>
            <div>
                {
                    reports.map(report => <div key={report._id}>
                        <img src={report.photo} alt="" />
                        <h2>{report.crimeType}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default YourReports;