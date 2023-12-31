import { Helmet } from "react-helmet-async";

// import DashSectionTitle from "../../../component/DashboardSectionTitle"

import { useAllPayment } from "../../../../../hooks/usePayment";

const AdminPayHistory = () => {
  const [payments] = useAllPayment();
  console.log(payments);

  return (
    <div>
      <Helmet>
        <title>LearnUP || Payment History</title>
      </Helmet>
      {/* <DashSectionTitle
                name='Payment'
                title='Payment History'
                subTitle='All users added Sport and users Enrol the Sports Class!'
            /> */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="overflow-x-auto"
      >
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-center text-lg text-info">
              <th>Class</th>
              <th>userEmail</th>
              <th>Ins.email</th>
              <th>Price</th>
              <th>Date</th>
              <th>transactionId</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td>
                  {" "}
                  <span>{payment?.courseTitle}</span>
                </td>
                <td>
                  {" "}
                  <span>{payment?.email}</span>
                </td>
                <td>
                  {" "}
                  <span>{payment?.insEmail}</span>
                </td>
                <td>
                  {" "}
                  <span>$ {payment?.price}</span>
                </td>
                <td>
                  {" "}
                  <span>{payment?.date}</span>
                </td>
                <td>
                  {" "}
                  <span>{payment?.transactionId}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayHistory;
