import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadCard from "../Components/HeadCard";
import BasicModal from "../Components/ModalComp";
import UserCard from "../Components/UserCard";
import { getUsers } from "../Redux/Admin/action";

const AdminPage = () => {
  const users = useSelector((state) => state.admin.users);
  const user = useSelector((state) => state.login.typeOfUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAct = getUsers();
    dispatch(getAct);
  }, []);

  if (user !== "ADMIN") {
    return (
      <>
        <h1>This page is only for Admins</h1>
        <h2>Go and Login as an Admin</h2>
      </>
    );
  }

  return (
    <>
      <br />
      <br />
      <HeadCard />
      {users.map((item) => (
        <UserCard
          name={item.name}
          date={item.date}
          purpose={item.purpose}
          amount={item.amount}
          status={item.status}
          id={item.id}
        />
      ))}
    </>
  );
};

export default AdminPage;
