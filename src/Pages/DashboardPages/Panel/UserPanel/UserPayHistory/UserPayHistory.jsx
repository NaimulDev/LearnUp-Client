import { Helmet } from "react-helmet-async";
import { userEmailToPayment } from "../../../../../hooks/usePayment";

const UserPayHistory = () => {
  const [payments] = userEmailToPayment();
  console.log(payments);
  return (
    <div>
      <Helmet>
        <title>LearnUP || My Enrol</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-info">
              <th>Class</th>
              <th>InstructorEmail</th>
              <th>amount</th>
              <th>TransitionId</th>
              <th>Course Details</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay) => (
              <tr key={pay?._id}>
                <td>
                  <span className="text-base font-medium">
                    {pay?.courseTitle}
                  </span>
                </td>
                <td>{pay?.insEmail}</td>
                <td>$ {pay?.price}</td>
                <td>$ {pay?.transactionId}</td>
                <td>
                  <p className="text-red">Enrolled</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPayHistory;
