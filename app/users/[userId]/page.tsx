import React from 'react';

type UserPageProps = Promise<{
  userId: string;
}>;
const UserPage = async ({ params }: { params: UserPageProps }) => {
  const { userId } = await params;
  return <div>UserPage {userId}</div>;
};

export default UserPage;
