import { User } from '@prisma/client';
const now = new Date();
export const userData: User[] = [
  {
    id: '1',
    email: 'admin@gmail.com',
    username: 'admin',
    password: process.env.ADMIN_PASSWORD!,
    role: 'ADMIN',
    isActive: true,
    createdAt: now,
    updatedAt: now,
  },
];
