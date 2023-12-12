import useReports from "../../Hooks/useReports";


const YourReports = () => {
    const [reports, refetch] = useReports()
    return (
        <div>
            <h2>Your Reports: {reports.length} </h2>
            <div>
                
            </div>
        </div>
    );
};

export default YourReports;