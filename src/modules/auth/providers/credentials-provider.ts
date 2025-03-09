import { User } from '@prisma/client';

import { compareSync } from 'bcrypt-ts';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '../../../../prisma/db';

export const credentialsProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: { label: 'Username', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: async (credentials): Promise<User> => {
    const username = credentials?.username;
    const password = credentials?.password;

    const userFound = await db.user.findFirst({
      where: { username },
    });
    console.log(userFound)
    if (!userFound || !password)
      throw new Error('El usuario no fue encontrado');

    const matchPassword = await compareSync(password, userFound?.password);

    if (!matchPassword) throw new Error('La contraseña es incorrecta');

    return userFound;
  },
});
