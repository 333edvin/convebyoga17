export default function TableSection() {
    const timings = [
      {
        time: "06:00 AM - 07:00 AM",
        days: ["Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning"],
      },
      {
        time: "09:00 AM - 10:00 AM",
        days: ["Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning"],
      },
      {
        time: "11:00 AM - 12:00 PM",
        days: ["Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning"],
      },
      {
        time: "03:30 PM - 05:00 PM",
        days: ["Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon", "Afternoon"],
      },
      {
        time: "05:00 PM - 06:00 PM",
        days: ["Evening", "Evening", "Evening", "Evening", "Evening", "Evening", "Evening"],
      },
      {
        time: "07:00 PM - 08:00 PM",
        days: ["Night", "Night", "Night", "Night", "Night", "Night", "Night"],
      },
    ];
  
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    return (
      <>
        <div className="text-center my-10">
        <p className="text-lime-900 text-sm">Choose Your Timing Schedule</p>
        <h2 className="text-2xl">Our Class TimeTable</h2>
        </div>
      <div className="overflow-x-auto px-5 md:px-20 my-10">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Time</th>
              {daysOfWeek.map((day) => (
                <th key={day} className="border border-gray-300 p-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timings.map((schedule, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">Timings</td>
                {schedule.days.map((day, idx) => (
                  <td key={idx} className="border border-gray-300 p-2">
                    {day} <br/>
            <p clasName="text-sm">
                    {schedule.time}
            </p>
                   
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
                    </>
    );
  }
  