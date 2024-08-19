// pages/api/login/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Login = {
    id: string;
   number: string;
   name: string;
   email: string;
   password: string;
};

// Dummy data for example purposes
const users: Login[] = [
    {
        id: "1",
        number: "09121234567",
        name: "محمد مروتی",
        email: "abcd123@gmail.com",
        password:"12345"
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { emailOrNumber, password } = req.body;

        const user = users.find((user) =>
            (user.number === emailOrNumber || user.email === emailOrNumber) && user.password === password
        );

        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(404).json({ message: 'Incorrect email/number or password' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}