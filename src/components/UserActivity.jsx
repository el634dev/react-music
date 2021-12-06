import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BsThreeDots } from "react-icons/bs";

const data = [
  {
    name: "Moose",
    songDiscovered: 4000,
    songListened: 2400,
  },
  {
    name: "Tus",
    songDiscovered: 3000,
    songListened: 1398,
  },
  {
    name: "Weebo",
    songDiscovered: 2000,
    songListened: 9000,
  },
  {
    name: "Thursday",
    songDiscovered: 2780,
    songListened: 3908,
  },
  {
    name: "France",
    songDiscovered: 1800,
    songListened: 4800,
  },
  {
    name: "Sans",
    songDiscovered: 2300,
    songListened: 3800,
  },
  {
    name: "Sunz",
    songDiscovered: 3490,
    songListened: 4300,
  },
];

function UserActivity() {
    return(
        <div className="user__name">
            <div className="user__activity__info">
                <div>
                    <h3>User Activity</h3>
                    <span>New Songs</span>
                </div>
                <div className="icon">
                    <BsThreeDots />
                </div>
            </div>
            <ResponsiveContainer width="100%" height="70%">
                <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="songDiscovered" stackId="a" fill="#4361ee" />
                    <Bar
                       radius={[7, 7, 0, 0]}
                       dataKey="songListened"
                       stackId="a"
                       fill="#48bfe3"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserActivity;