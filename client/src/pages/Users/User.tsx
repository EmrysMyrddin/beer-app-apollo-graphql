import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks";
import { UserDetail } from "../../components";

export const UserPage: FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { user, loading, error } = useUser(userId);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error.message}</p>;
  if (!user) return null;
  return <UserDetail {...user} />;
};
