import React from "react";
import { useState } from "react";
import "./UserAppointment.css";

import { useEffect } from "react";

import { UseAdmin } from "../../hooks";
import Loading from "../Loading/Loading";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";

const UserAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const [today, setToday] = useState(new Date().toISOString().slice(0, 10));

  
  const deleteAppointment = (id) => {
    const isConfirm = window.confirm("Want To Remove ?");
    const url = `https://meditro-server-production.up.railway.app/appointments/${id}`;
    if (isConfirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {

          toast.info("Removed !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="appointment-body">
      {appointment.length ? (
        <>

          <div className="text-light d-flex fixed">

              <input
                className="rounded rounded-5"
                type="text"
                placeholder="search by email"

              />
            {/* )} */}
            <select className="" onChange={(e) => setQuery(e.target.value)}>
              <option value="">All</option>
              <option value="pending">pending</option>
              <option value="complete">complete</option>
              <option value={today}>Today</option>
            </select>
          </div>
          <table>
            <thead className="shadow-sm">
              <tr>
                <th>#</th>
                <th>service</th>
                <th>appointment date</th>
                <th>booking date</th>
                <th>amount</th>
                <th>status</th>
                
              </tr>
            </thead>
            <tbody>
              {appointment
                .filter(
                  (a) =>
                    a.email.toLowerCase().includes(query) ||
                    a.stage.toLowerCase().includes(query) ||
                    a.appointmentDate.includes(query)
                )
                ?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-dark text-capitalize">
                        {data.serviceName}
                      </td>
                      <td>
                        <span className="time">{data.appointmentTime}</span>{" "}
                        <br />
                        <span
                          className={`date mt-1 d-inline-block ${data.appointmentDate === today &&
                            "bg-light text-success"
                            }`}
                        >
                          {data.appointmentDate}
                        </span>
                      </td>
                      <td>
                        <span className="time">{data.bookingTime}</span> <br />
                        <span className="date">{data.bookingDate}</span>
                      </td>
                      <td>${data.amount}</td>
                      <td className="text-success fw-bold">
                        <p
                          className={data.stage === "pending" && "text-danger"}
                        >
                          {data.stage}
                        </p>
                      </td>
                      
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      ) : (
        <div className="text-center d-massage">
          <h3>you have't no appointment yet</h3>
          <MyButtonLg
            action={() => navigate("/service")}
            style={{
              width: "250px",
              background: "#1f2278",
              padding: "10px 0",
            }}
          >
            book appointment
          </MyButtonLg>
        </div>
      )}
    </div>
  );
};

export default UserAppointment;
