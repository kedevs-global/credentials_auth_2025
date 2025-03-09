import { db } from '../../db';
import { userData } from '../data/user-data';
// @ts-expect-error: Ignoring type error because bcrypt is not properly typed for TypeScript
import bcrypt from 'bcrypt';

async function userPopulator() {
  for (const user of userData) {
    try {
      const existingUser = await db.user.findUnique({
        where: { id: user.id },
      });

      const hashedPassword = bcrypt.hashSync(user.password, 10);
      const data = {
        ...user,
        password: hashedPassword,
      };

      if (existingUser) {
        const isChanged = user.email !== existingUser.email;

        if (isChanged) {
          await db.user.update({
            where: { id: user.id },
            data: data,
          });
        }

        continue;
      }

      const newUser = await db.user.create({
        data: data,
      });

      console.log(`Created new user: ${newUser.username} (ID: ${newUser.id})`);
    } catch (error) {
      console.log(error);
      console.error(`Failed to create user: ${user.username}`);
    }
  }
}

export default userPopulator;
